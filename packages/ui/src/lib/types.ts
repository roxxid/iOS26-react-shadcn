import { type HTMLAttributes } from "react"

export interface ComponentProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

