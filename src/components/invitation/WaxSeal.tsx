import { useId } from "react"

type WaxSealProps = {
    className?: string
    onClick?: () => void
    label?: string
    monogram?: string
}

export function WaxSeal({ className = "", onClick, label = "Мөрді басыңыз", monogram = "Д & А" }: WaxSealProps) {
    const uid = useId().replace(/:/g, "")
    const grain = `waxGrain-${uid}`
    const body = `waxBody-${uid}`
    const sheen = `waxSheen-${uid}`
    const rim = `waxRim-${uid}`
    const well = `waxWell-${uid}`
    const wellLight = `waxWellLight-${uid}`
    const lip = `waxLip-${uid}`
    const specular = `waxSpecular-${uid}`

    return (
        <button type="button" onClick={onClick} aria-label={label} className={`wax-seal relative ${className}`}>
            <svg viewBox="0 0 220 220" className="h-full w-full overflow-visible" aria-hidden="true">
                <defs>
                    <filter id={grain} x="-15%" y="-15%" width="130%" height="130%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.78" numOctaves="4" seed="11" result="n" />
                        <feColorMatrix
                            in="n"
                            type="matrix"
                            values="0 0 0 0 0.42
                                    0 0 0 0 0.12
                                    0 0 0 0 0.07
                                    0 0 0 0.28 0"
                            result="t"
                        />
                        <feComposite in="t" in2="SourceGraphic" operator="in" result="g" />
                        <feBlend in="SourceGraphic" in2="g" mode="multiply" />
                    </filter>

                    <radialGradient id={body} cx="36%" cy="26%" r="80%">
                        <stop offset="0%" stopColor="#F0A078" />
                        <stop offset="22%" stopColor="#E07050" />
                        <stop offset="48%" stopColor="#C24A30" />
                        <stop offset="72%" stopColor="#9A3220" />
                        <stop offset="100%" stopColor="#5C1A10" />
                    </radialGradient>

                    <radialGradient id={sheen} cx="30%" cy="20%" r="46%">
                        <stop offset="0%" stopColor="rgba(255,240,225,0.7)" />
                        <stop offset="35%" stopColor="rgba(255,210,185,0.28)" />
                        <stop offset="100%" stopColor="rgba(255,200,170,0)" />
                    </radialGradient>

                    <radialGradient id={rim} cx="50%" cy="46%" r="54%">
                        <stop offset="62%" stopColor="rgba(255,210,180,0)" />
                        <stop offset="82%" stopColor="rgba(255,205,175,0.28)" />
                        <stop offset="100%" stopColor="rgba(55,14,8,0.42)" />
                    </radialGradient>

                    <radialGradient id={well} cx="44%" cy="36%" r="62%">
                        <stop offset="0%" stopColor="#D06042" />
                        <stop offset="45%" stopColor="#A03822" />
                        <stop offset="100%" stopColor="#4E160E" />
                    </radialGradient>

                    <radialGradient id={wellLight} cx="36%" cy="30%" r="58%">
                        <stop offset="0%" stopColor="rgba(255,205,175,0.34)" />
                        <stop offset="100%" stopColor="rgba(255,200,170,0)" />
                    </radialGradient>

                    <linearGradient id={lip} x1="0.2" y1="0" x2="0.8" y2="1">
                        <stop offset="0%" stopColor="rgba(255,225,205,0.5)" />
                        <stop offset="45%" stopColor="rgba(180,70,45,0.15)" />
                        <stop offset="100%" stopColor="rgba(55,14,8,0.4)" />
                    </linearGradient>

                    <radialGradient id={specular} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(255,248,238,0.72)" />
                        <stop offset="55%" stopColor="rgba(255,225,200,0.22)" />
                        <stop offset="100%" stopColor="rgba(255,230,210,0)" />
                    </radialGradient>
                </defs>

                {/* contact shadow on paper */}
                <ellipse cx="110" cy="188" rx="62" ry="12" fill="rgba(55,25,18,0.28)" />
                <ellipse cx="110" cy="184" rx="48" ry="7" fill="rgba(55,25,18,0.18)" />

                {/* poured wax body — irregular scalloped edge */}
                <g filter={`url(#${grain})`}>
                    <path
                        d="M112 10c11 1 17 9 26 8 10-1 14 7 23 12 9 5 19 3 24 13 5 9-1 17 3 26 4 10 14 13 12 24-1 11-11 14-12 24-1 10 6 18-1 26-6 9-17 7-24 15-7 7-5 17-15 20-10 4-16-4-26-2-11 2-15 11-26 8-11-3-12-14-22-18-9-4-20 0-26-9-6-8 1-18-3-27-4-10-15-12-14-23 1-10 12-13 13-23 2-9-4-18 3-26 7-9 18-5 25-14 6-7 8-17 18-19 9-2 14 5 24 4 8-1 13-11 22-9z"
                        fill={`url(#${body})`}
                    />
                </g>

                {/* secondary wax lobes / drips */}
                <ellipse cx="168" cy="58" rx="11" ry="9" fill="#C24A30" opacity="0.85" />
                <ellipse cx="52" cy="156" rx="10" ry="8" fill="#8A2E1C" opacity="0.8" />
                <ellipse cx="168" cy="148" rx="8" ry="7" fill="#D4684A" opacity="0.65" />
                <ellipse cx="48" cy="78" rx="9" ry="7" fill="#A84832" opacity="0.7" />
                <path d="M150 28c6 2 10 8 9 14-4-2-8-4-14-5 2-4 3-7 5-9z" fill="#E07050" opacity="0.75" />
                <path d="M70 178c-5 3-4 10 1 13 2-4 5-7 9-9-4-1-7-2-10-4z" fill="#7A2818" opacity="0.7" />

                <path
                    d="M112 10c11 1 17 9 26 8 10-1 14 7 23 12 9 5 19 3 24 13 5 9-1 17 3 26 4 10 14 13 12 24-1 11-11 14-12 24-1 10 6 18-1 26-6 9-17 7-24 15-7 7-5 17-15 20-10 4-16-4-26-2-11 2-15 11-26 8-11-3-12-14-22-18-9-4-20 0-26-9-6-8 1-18-3-27-4-10-15-12-14-23 1-10 12-13 13-23 2-9-4-18 3-26 7-9 18-5 25-14 6-7 8-17 18-19 9-2 14 5 24 4 8-1 13-11 22-9z"
                    fill={`url(#${sheen})`}
                />

                {/* raised collar */}
                <circle cx="110" cy="110" r="64" fill="none" stroke={`url(#${lip})`} strokeWidth="7" strokeOpacity="0.55" />
                <circle cx="110" cy="110" r="57" fill={`url(#${rim})`} />

                {/* stamped depression */}
                <circle cx="110" cy="113" r="47" fill="rgba(40,10,6,0.28)" />
                <circle cx="110" cy="110" r="45" fill={`url(#${well})`} />
                <circle cx="110" cy="110" r="45" fill={`url(#${wellLight})`} />
                <circle cx="110" cy="110" r="45" fill="none" stroke="#F2C8B0" strokeOpacity="0.28" strokeWidth="1.8" />
                <circle cx="110" cy="110" r="38" fill="none" stroke="#3A120C" strokeOpacity="0.45" strokeWidth="1.4" />
                <circle cx="110" cy="110" r="33" fill="none" stroke="#E8B89A" strokeOpacity="0.14" strokeWidth="1" />

                {/* glossy specular — softer, more wax than plastic */}
                <ellipse cx="82" cy="72" rx="20" ry="11" fill={`url(#${specular})`} opacity="0.42" transform="rotate(-28 82 72)" />
                <ellipse cx="94" cy="64" rx="5" ry="2.6" fill="rgba(255,250,242,0.55)" transform="rotate(-28 94 64)" />
            </svg>

            <span className="wax-monogram font-script pointer-events-none absolute inset-0 flex items-center justify-center pb-[2px] text-[34px] leading-none tracking-wide">
                {monogram}
            </span>
        </button>
    )
}
