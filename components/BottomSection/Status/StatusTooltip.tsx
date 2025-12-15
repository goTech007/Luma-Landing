'use client'

interface StatusTooltipProps {
  isVisible: boolean
}

export function StatusTooltip({ isVisible }: StatusTooltipProps) {
  const sentences = [
    'Product is currently in private development',
    'Early testers will be contacted gradually',
    'Token launch planned with early access participants',
  ]

  return (
    <div
      className={`absolute bottom-full left-0 mb-4 bg-neutral-800 border border-cyan-500/20 rounded-lg p-6 shadow-2xl shadow-cyan-500/10 min-w-[300px] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
        Status & Transparency
      </h3>
      <div className="space-y-3">
        {sentences.map((sentence, index) => (
          <p
            key={index}
            className="text-sm text-neutral-200"
            style={{
              animation: isVisible
                ? `fade-in-up 0.4s ease-out ${index * 0.1}s both`
                : 'none',
            }}
          >
            {sentence}
          </p>
        ))}
      </div>
    </div>
  )
}

