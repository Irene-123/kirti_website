import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: no route for", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-prose">
        <h1 className="text-2xl font-semibold">404</h1>
        <p className="mt-2 text-muted-foreground">That page does not exist.</p>
        <Link to="/" className="mt-4 inline-block font-mono text-sm text-primary underline underline-offset-4">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
