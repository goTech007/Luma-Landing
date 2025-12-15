'use client'

import { ReactNode } from 'react'

interface FormModalProps {
  children: ReactNode
  onClose: () => void
}

export function FormModal({ children, onClose }: FormModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 border border-cyan-500/20 rounded-2xl max-w-md w-full p-8 shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="float-right text-neutral-400 hover:text-cyan-400 text-2xl leading-none transition-colors"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}

