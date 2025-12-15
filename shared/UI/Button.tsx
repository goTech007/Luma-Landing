import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'font-medium transition-transform disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:scale-105 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 text-sm font-semibold',
    secondary: 'w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:scale-[1.02] font-semibold',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

