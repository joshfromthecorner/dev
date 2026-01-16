"use client";

export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="small-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.05"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="url(#small-grid)" />
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(30, 10%, 95%)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="hsl(30, 10%, 98%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(30, 10%, 95%)" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="grid-gradient-dark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 0%, 12%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(0, 0%, 9%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(0, 0%, 12%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground/5 dark:text-foreground/10" />
        <rect width="100%" height="100%" fill="url(#grid-gradient)" className="dark:hidden" />
        <rect width="100%" height="100%" fill="url(#grid-gradient-dark)" className="hidden dark:block" />
      </svg>
    </div>
  );
}
