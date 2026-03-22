import * as React from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

const variantClasses = {
  default: 'bg-primary text-primary-foreground shadow-sm hover:opacity-90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'border border-border bg-white/70 hover:bg-white',
  ghost: 'hover:bg-secondary/70',
} as const

const sizeClasses = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 px-3',
  lg: 'h-11 px-5 text-base',
} as const

type ButtonBaseProps = {
  variant?: keyof typeof variantClasses
  size?: keyof typeof sizeClasses
  className?: string
  children: React.ReactNode
}

type ButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: false
  to?: never
}

type LinkButtonProps = ButtonBaseProps & {
  to: string
  asChild?: never
}

export function Button(props: ButtonProps | LinkButtonProps) {
  const variant = (props.variant ?? 'default') as keyof typeof variantClasses
  const size = (props.size ?? 'default') as keyof typeof sizeClasses
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
    variantClasses[variant],
    sizeClasses[size],
    props.className,
  )

  if ('to' in props) {
    const { to, children } = props
    return <Link to={to} className={classes}>{children}</Link>
  }

  const { children, type = 'button', ...rest } = props
  return <button type={type} className={classes} {...rest}>{children}</button>
}
