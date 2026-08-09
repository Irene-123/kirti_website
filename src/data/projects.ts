export type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "mermaid"; chart: string; caption?: string };

export interface Project {
  slug: string;
  title: string;
  year: string;
  summary: string;
  stack: string[];
  repo?: string;
  demo?: string;
  detail: Block[];
}

const sagaArchitecture = `flowchart LR
  Client[Dashboard / HTMX + SSE] --> Order[Order Service]
  Order --> OB[(Postgres outbox)]
  OB --> Poller[Outbox poller]
  Poller --> K{{Kafka / Azure Event Hubs}}
  K --> Inventory[Inventory Service]
  K --> Payment[Payment Service]
  K --> Fulfillment[Fulfillment Service]
  K --> Saga[Saga Orchestrator]
  K --> AI[AI Insights Service]
  K --> Notify[Notification Service]
  Saga --> K
  AI --> Azure[Azure OpenAI]
  Inventory --> OB
  Payment --> OB
  Fulfillment --> OB
  Saga --> Client`;

const sagaHappyPath = `sequenceDiagram
  participant O as Order
  participant S as Saga Orchestrator
  participant I as Inventory
  participant P as Payment
  participant F as Fulfillment
  O->>S: OrderCreated
  S->>I: ReserveInventory
  I-->>S: InventoryReserved
  S->>P: AuthorizePayment
  P-->>S: PaymentAuthorized
  S->>F: ScheduleFulfillment
  F-->>S: FulfillmentScheduled
  S->>O: OrderCompleted`;

const sagaCompensation = `sequenceDiagram
  participant S as Saga Orchestrator
  participant I as Inventory
  participant P as Payment
  participant F as Fulfillment
  S->>I: ReserveInventory
  I-->>S: InventoryReserved
  S->>P: AuthorizePayment
  P-->>S: PaymentAuthorized
  S->>F: ScheduleFulfillment
  F-->>S: FulfillmentFailed
  S->>P: RefundPayment
  P-->>S: PaymentRefunded
  S->>I: ReleaseInventory
  I-->>S: InventoryReleased
  S->>S: Saga marked compensated`;

export const projects: Project[] = [
  {
    slug: "sagaforge-ai",
    title: "SagaForge AI — Distributed Transaction Orchestrator",
    year: "2026",
    summary:
      "Event-driven saga orchestrator coordinating long-running business transactions across independent services, with automatic compensation and no two-phase commit.",
    stack: ["Go", "Kafka (Azure Event Hubs)", "Postgres (Supabase)", "Azure OpenAI", "Echo", "HTMX", "SSE"],
    repo: "https://github.com/Irene-123/sagaforge-ai",
    detail: [
      { type: "h", text: "The problem" },
      {
        type: "p",
        text: "An order is not one write. It is a reservation, a charge, a fulfillment request, and a notification, each owned by a different service that can fail on its own schedule. There is no shared transaction to roll back. A dropped message leaves inventory held for an order nobody placed. A duplicated message charges a customer twice.",
      },
      {
        type: "p",
        text: "SagaForge coordinates those steps as a saga. Every step has a compensating step. Failure walks the completed steps backwards instead of pretending the whole thing was atomic.",
      },
      { type: "h", text: "Architecture" },
      {
        type: "p",
        text: "Eight Go services communicate over Kafka topics: order, inventory, payment, fulfillment, saga orchestrator, AI insights, notification, and dashboard. Services never call each other directly. The only contract between them is the event schema on the topic.",
      },
      { type: "mermaid", chart: sagaArchitecture, caption: "Service and topic layout." },
      { type: "h", text: "Transactional outbox" },
      {
        type: "p",
        text: "Each service writes its state change and its outgoing event in a single Postgres transaction. The event cannot be lost in the gap between commit and publish, because there is no gap. If the commit succeeds the event exists in the outbox table, and if it fails neither exists.",
      },
      {
        type: "p",
        text: "Publishing is done by polling the outbox table rather than change data capture. That costs roughly 500ms of latency and saves running a Debezium and Connect stack for a system where half a second does not change the outcome. Multiple poller instances run safely: rows are claimed with row-level locking that skips already-claimed rows, so two pollers never publish the same event.",
      },
      { type: "h", text: "Idempotency" },
      {
        type: "p",
        text: "Kafka delivery is at-least-once, so every handler takes an idempotency key and treats a repeated key as a no-op returning the original result. Retries and consumer rebalances are then boring instead of dangerous.",
      },
      { type: "h", text: "Hybrid choreography and orchestration" },
      {
        type: "p",
        text: "Services stay decoupled and react to events, but a central orchestrator owns compensation. No service has to know how to undo another service's work, which is the part that turns pure choreography into a graph nobody can reason about after the fourth step.",
      },
      { type: "mermaid", chart: sagaHappyPath, caption: "Happy path across the four participants." },
      { type: "h", text: "Compensation flows" },
      {
        type: "ul",
        items: [
          "Payment failure releases the inventory reservation.",
          "Fulfillment failure refunds the payment and then releases inventory.",
        ],
      },
      { type: "mermaid", chart: sagaCompensation, caption: "Fulfillment failure, compensating backwards." },
      { type: "h", text: "AI risk scoring off the critical path" },
      {
        type: "p",
        text: "An AI insights service consumes the same event stream and scores orders for risk with Azure OpenAI. It runs asynchronously and deliberately outside the saga. A one to three second LLM call inside the transaction path would block saga progression for every order, so the score arrives when it arrives and the saga never waits on it.",
      },
      { type: "h", text: "Making failure visible" },
      {
        type: "p",
        text: "Payment fails about 10% of the time and fulfillment about 5% by simulation, so the dashboard shows a realistic mix of completed, compensating and compensated sagas rather than a wall of green. The system was load tested with a concurrent order generator to check the pollers and idempotency logic under overlap.",
      },
    ],
  },
  {
    slug: "xclone-backend",
    title: "X clone Backend",
    year: "2026",
    summary:
      "Social feed backend in Go handling fan-out writes and real-time timeline generation under concurrent load.",
    stack: ["Go", "Redis", "PostgreSQL", "Kafka", "WebSockets", "Kubernetes", "Prometheus"],
    repo: "https://github.com/Irene-123/xclone",
    detail: [
      { type: "h", text: "Timeline generation" },
      {
        type: "p",
        text: "Timelines are built fan-out-on-write. A post is pushed into follower timelines at write time so reads are a single cached lookup instead of a join across the follow graph. Timelines live in Redis, durable state in sharded Postgres. Feed reads hold a P95 under 150ms.",
      },
      { type: "h", text: "Real time" },
      {
        type: "p",
        text: "Likes, mentions and notifications move through Kafka and are delivered to connected clients over WebSockets. Rate limiting sits in front of the write paths.",
      },
      { type: "h", text: "Operations" },
      {
        type: "p",
        text: "Deployed on Kubernetes with horizontal autoscaling. Prometheus metrics cover queue lag, fan-out latency and connection counts.",
      },
    ],
  },
  {
    slug: "medical-insurance-rights-engine",
    title: "Medical Insurance Rights Engine",
    year: "2026",
    summary:
      "Turns dense insurance policy documents into plain language patients can act on when claiming.",
    stack: ["Python", "LLMs", "Sparse retrieval", "OCR"],
    detail: [
      { type: "h", text: "The failure mode that mattered" },
      {
        type: "p",
        text: "The model invented bill values it did not have. A wrong number in this context is worse than no answer, because a patient acts on it. The fix was sparse retrieval over the actual document text plus guardrails on every computed figure, so a number is either grounded in a retrieved span or it is not shown.",
      },
      { type: "h", text: "Rights Map" },
      {
        type: "p",
        text: "Output is a Rights Map. Every claim is anchored to clause-level evidence: document, page, section and the quoted span it came from. A patient can take that to an insurer, and a reviewer can check it without rerunning the model.",
      },
      { type: "h", text: "OCR pipeline" },
      {
        type: "p",
        text: "Policy documents arrive as scans in several languages. A six-stage multilingual OCR pipeline normalises them, using regex with negative lookbehinds and proximity matching to pull amounts, clause numbers and dates out of noisy layouts.",
      },
    ],
  },
  {
    slug: "storage-telemetry-rag",
    title: "Storage Telemetry RAG",
    year: "2025",
    summary: "Open source tool answering natural language questions over storage telemetry.",
    stack: ["Python", "RAG", "RAGAS", "Grafana"],
    detail: [
      { type: "h", text: "What it answers" },
      {
        type: "p",
        text: "Questions across capacity, IOPS, latency and error rate time series. Things like when latency started drifting on a volume, or which pools are near capacity.",
      },
      { type: "h", text: "Retrieval design" },
      {
        type: "p",
        text: "Retrieval runs over downsampled time windows and metric metadata rather than raw series. Raw points are the wrong retrieval unit: they are enormous, mostly redundant, and a window summary carries the shape the question is actually about.",
      },
      { type: "h", text: "Evaluation" },
      {
        type: "p",
        text: "Ships a RAGAS-style evaluation harness so chunking and retrieval changes are tuned against measured answer quality instead of impressions. Grafana panels sit alongside for the numeric view.",
      },
    ],
  },
  {
    slug: "gpu-virtualization-kubernetes",
    title: "GPU Resource Management and Virtualization in Kubernetes",
    year: "B.Tech thesis, 2023",
    summary:
      "Kubernetes device plugin allowing GPU memory and compute to be allocated independently.",
    stack: ["Python", "CUDA APIs", "Kubernetes"],
    detail: [
      { type: "h", text: "Finer-grained allocation" },
      {
        type: "p",
        text: "Kubernetes hands out whole GPUs. Most workloads do not need one. The device plugin exposes GPU memory and compute as separately allocatable resources, so two jobs with different bottlenecks can share a card.",
      },
      { type: "h", text: "Profiling and scheduling" },
      {
        type: "p",
        text: "HPC, mathematical and ML workloads were profiled to find distinct configurations that deliver equivalent performance. The Kubernetes scheduler was extended to filter nodes for those configurations, and the result was validated against a suite of HPC workloads.",
      },
    ],
  },
];

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);
