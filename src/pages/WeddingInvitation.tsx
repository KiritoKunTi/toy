import { InviteShell } from "../components/invitation/InviteShell"
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

export function WeddingInvitation() {
    return (
        <InviteShell>
            <MusicButton enabled />
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
        </InviteShell>
    )
}
