import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-ios-md text-headline font-semibold transition-all duration-ios-normal ease-ios-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px]",
  {
    variants: {
      variant: {
        default: "bg-ios-blue text-white hover:opacity-90 active:opacity-80",
        destructive: "bg-ios-red text-white hover:opacity-90 active:opacity-80",
        outline:
          "border border-separator bg-transparent text-label hover:bg-fill-secondary active:bg-fill",
        secondary:
          "bg-fill-secondary text-label hover:bg-fill active:bg-fill-tertiary",
        ghost: "text-label hover:bg-fill-secondary active:bg-fill",
        link: "text-ios-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[44px] px-ios-md",
        sm: "h-[36px] px-ios-sm text-body",
        lg: "h-[52px] px-ios-lg text-title-3",
        icon: "h-[44px] w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

