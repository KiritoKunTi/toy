import { useCallback, useEffect, useState } from "react"
import { InviteShell } from "../components/invitation/InviteShell"
import { InvitationIntro } from "../components/invitation/InvitationIntro"
import { HeroSection } from "../components/invitation/HeroSection"
import { WelcomeSection } from "../components/invitation/WelcomeSection"
// import { StorySection } from "../components/invitation/StorySection"
import { WeddingDetails } from "../components/invitation/WeddingDetails"
// import { Timeline } from "../components/invitation/Timeline"
import { VenueSection } from "../components/invitation/VenueSection"
// import { DressCode } from "../components/invitation/DressCode"
import { RSVPForm } from "../components/invitation/RSVPForm"
import { FinalSection } from "../components/invitation/FinalSection"
import { MusicButton } from "../components/invitation/MusicButton"

function prefersReducedMotion() {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function WeddingInvitation() {
    const [opened, setOpened] = useState(prefersReducedMotion)

    const handleOpened = useCallback(() => {
        setOpened(true)
    }, [])

    useEffect(() => {
        document.body.style.overflow = opened ? "" : "hidden"
        return () => {
            document.body.style.overflow = ""
        }
    }, [opened])

    return (
        <InviteShell locked={!opened}>
            {!opened && <InvitationIntro onOpened={handleOpened} />}
            {opened && <MusicButton enabled />}
            {opened && (
                <main>
                    <HeroSection />
                    <WelcomeSection />
                    {/* <StorySection /> */}
                    <WeddingDetails />
                    {/* <Timeline /> */}
                    <VenueSection />
                    {/* <DressCode /> */}
                    <RSVPForm />
                    <FinalSection />
                </main>
            )}
        </InviteShell>
    )
}
