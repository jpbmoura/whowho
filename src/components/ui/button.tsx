import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-lg font-semibold",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 active:scale-95",
        default:
          "bg-white text-gray-700 border border-gray-300 shadow-sm hover:bg-gray-50 hover:shadow-md hover:scale-105 active:scale-95",
        destructive:
          "bg-red-500 text-white shadow-lg hover:bg-red-600 hover:shadow-xl hover:scale-105 active:scale-95",
        outline:
          "border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:scale-105 active:scale-95",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md hover:scale-105 active:scale-95",
        ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md",
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700",
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
