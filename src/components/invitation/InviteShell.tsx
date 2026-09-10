import { ReactNode } from "react"

type InviteShellProps = {
    children: ReactNode
    locked?: boolean
}

export function InviteShell({ children, locked = false }: InviteShellProps) {
    return (
        <div className="flex min-h-[100dvh] justify-center bg-cream-dark">
            <div
                className={`paper-sheet paper-grain relative w-full max-w-phone overflow-x-hidden shadow-invite ${
                    locked ? "h-[100dvh] overflow-hidden" : "min-h-[100dvh]"
                }`}
            >
                <div className="relative z-[2]">{children}</div>
            </div>
        </div>
    )
}
