import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[44px] w-full rounded-ios-md border border-separator bg-background px-ios-sm py-ios-sm text-body text-label placeholder:text-label-tertiary focus:outline-none focus:ring-2 focus:ring-ios-blue focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-separator-dark",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

