import * as React from "react";
import { cn } from "@/lib/utils";

// Define InputProps as a type instead of an interface to avoid the ESLint warning.
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// Using React.forwardRef to ensure compatibility with Next.js server-side rendering
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", ...props }, ref) => {
    // Avoid rendering issues by ensuring `type` is a valid string and setting a default value
    const safeType = typeof type === "string" ? type : "text";

    // Using React.useEffect to ensure classes or dynamic props are applied only on the client
    const [hydratedClassName, setHydratedClassName] = React.useState(className);

    React.useEffect(() => {
      setHydratedClassName(className); // Ensure className is updated only on the client-side
    }, [className]);

    return (
      <input
        type={safeType}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          hydratedClassName
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
