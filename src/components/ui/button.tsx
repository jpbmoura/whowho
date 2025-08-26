import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fox-600 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 font-bold tracking-wide",
  {
    variants: {
      variant: {
        primary:
          "bg-fox-600 text-vintage-50 border-fox-700 shadow-vintage hover:bg-fox-700 hover:shadow-paper hover:transform hover:-translate-y-0.5 active:transform active:translate-y-0 active:shadow-vintage",
        default:
          "bg-vintage-600 text-vintage-50 border-vintage-700 shadow-vintage hover:bg-vintage-700 hover:shadow-paper hover:transform hover:-translate-y-0.5 active:transform active:translate-y-0 active:shadow-vintage",
        destructive:
          "bg-mushroom-500 text-vintage-50 border-mushroom-600 shadow-vintage hover:bg-mushroom-600 hover:shadow-paper hover:transform hover:-translate-y-0.5",
        outline:
          "border-vintage-600 bg-vintage-50 text-vintage-800 shadow-vintage hover:bg-vintage-100 hover:border-vintage-700 hover:shadow-paper hover:transform hover:-translate-y-0.5",
        secondary:
          "bg-vintage-200 text-vintage-900 border-vintage-400 shadow-vintage hover:bg-vintage-300 hover:border-vintage-500 hover:shadow-paper hover:transform hover:-translate-y-0.5",
        ghost:
          "border-transparent bg-transparent text-vintage-800 hover:bg-vintage-100 hover:border-vintage-300 hover:text-vintage-900",
        link: "border-transparent bg-transparent text-fox-700 underline-offset-4 hover:underline hover:text-fox-800",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
