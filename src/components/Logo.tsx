import React from 'react'

export function Logo({ className = "" }: { className?: string }) {
  const isWhite = className.includes('text-white')

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-teal-600"
      >
        {/* Main server icon background */}
        <rect width="40" height="40" rx="8" fill="currentColor" />

        {/* Server rack lines */}
        <rect x="8" y="10" width="24" height="3" rx="1.5" fill="white" />
        <rect x="8" y="16" width="24" height="3" rx="1.5" fill="white" />
        <rect x="8" y="22" width="16" height="3" rx="1.5" fill="white" />
        <rect x="8" y="28" width="20" height="3" rx="1.5" fill="white" />

        {/* Power indicators */}
        <circle cx="29" cy="12" r="1.5" fill="#10b981" />
        <circle cx="29" cy="18" r="1.5" fill="#10b981" />
        <circle cx="27" cy="24" r="1.5" fill="#f59e0b" />
        <circle cx="31" cy="30" r="1.5" fill="#10b981" />

        {/* Tiger stripes effect on corner */}
        <path
          d="M32 4 L36 0 L40 4 L36 8 Z"
          fill="#f59e0b"
          opacity="0.8"
        />
        <path
          d="M34 6 L35 5 L36 6 L35 7 Z"
          fill="white"
        />
      </svg>
      <div className="flex flex-col">
        <span className={`text-xl font-bold ${isWhite ? 'text-white' : 'text-slate-900'}`}>
          hostingtigger
        </span>
        <span className={`text-xs ${isWhite ? 'text-gray-300' : 'text-gray-500'}`}>
          .com
        </span>
      </div>
    </div>
  )
}
