export function SectionDivider({ className = "" }: { className?: string }) {
    return (
        <div className={`mx-auto my-10 flex h-8 w-40 items-center justify-center ${className}`} aria-hidden="true">
            <svg viewBox="0 0 160 24" className="h-full w-full text-champagne-deep">
                <path d="M8 12h52M100 12h52" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
                <path d="M80 5c7 3.5 10 7 0 14-10-7-7-10.5 0-14z" fill="currentColor" opacity="0.8" />
                <circle cx="80" cy="12" r="2" fill="#F7F1E8" />
            </svg>
        </div>
    )
}
