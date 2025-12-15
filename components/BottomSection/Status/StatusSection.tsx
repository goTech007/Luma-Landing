'use client'

import { useState } from 'react'
import { StatusTooltip } from './StatusTooltip'

export function StatusSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex-1 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4 cursor-pointer hover:text-cyan-400 transition-colors">
        Status & Transparency
      </h2>
      <StatusTooltip isVisible={isHovered} />
    </div>
  )
}

