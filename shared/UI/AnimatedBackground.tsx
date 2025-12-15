'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="radial1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grad1)" className="animate-pulse-slow" />
        <rect width="100%" height="100%" fill="url(#grad2)" className="animate-pulse-slow-delay" />
        
        <circle cx="200" cy="150" r="120" fill="url(#radial1)" className="animate-float" />
        <circle cx="1000" cy="600" r="150" fill="url(#radial1)" className="animate-float-delay" />
        <circle cx="600" cy="700" r="100" fill="url(#radial1)" className="animate-float-delay-2" />
        
        <g className="animate-rotate-slow" transform="translate(600, 400)">
          <path
            d="M -500 0 Q -300 -200 -100 0 T 300 0"
            stroke="url(#grad1)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            className="animate-draw"
          />
          <path
            d="M -400 100 Q -200 -100 0 100 T 400 100"
            stroke="url(#grad2)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            className="animate-draw-delay"
          />
        </g>
        
        <g opacity="0.6">
          <polygon
            points="150,100 200,200 100,200"
            fill="#06b6d4"
            opacity="0.2"
            className="animate-rotate"
            transform="translate(150, 150)"
          />
          <polygon
            points="1050,300 1100,400 1000,400"
            fill="#3b82f6"
            opacity="0.2"
            className="animate-rotate-delay"
            transform="translate(1050, 350)"
          />
          <polygon
            points="500,50 550,150 450,150"
            fill="#8b5cf6"
            opacity="0.2"
            className="animate-rotate-delay-2"
            transform="translate(500, 100)"
          />
        </g>
      </svg>
    </div>
  )
}

