import { useState, useEffect } from "react"
import Test1 from "../assets/img/test1.png"

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date("2026-10-25T18:00:00+05:00")
            const now = new Date()
            const difference = targetDate - now

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
                const minutes = Math.floor((difference / 1000 / 60) % 60)
                const seconds = Math.floor((difference / 1000) % 60)

                setTimeLeft({ days, hours, minutes, seconds })
            }
        }

        const timer = setInterval(calculateTimeLeft, 1000)
        calculateTimeLeft()

        return () => clearInterval(timer)
    }, [])

    const TimeBox = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="bg-blue-base text-white rounded-full min-h-10 min-w-10 flex justify-center items-center border-2 border-white">
                <span className="text-base   font-bold">{value}</span>
            </div>
            <span className="text-xs mt-3 text-white font-semibold">{label}</span>
        </div>
    )

    return (
        <div className="bg-blue-base text-white relative px-6 pt-6 pb-14 rounded-lg shadow-lg text-center max-w-md mx-auto">
            <h2 className="text-7xl leading-[50px] font-kazak font-cursive mb-4">Той салтанатына дейін:</h2>
            <div className="flex justify-center mt-10 gap-4">
                <TimeBox value={timeLeft.days} label="КҮН" />
                <span className="text-3xl font-bold">:</span>
                <TimeBox value={timeLeft.hours} label="САҒАТ" />
                <span className="text-3xl font-bold">:</span>
                <TimeBox value={timeLeft.minutes} label="МИНУТ" />
                <span className="text-3xl font-bold">:</span>
                <TimeBox value={timeLeft.seconds} label="СЕКУНД" />
            </div>
            <div className="absolute bottom-0 right-0 flex flex-row">
                <img src={Test1} alt="test" className="object-contain w-1/2" />
                <img src={Test1} alt="test" className="object-contain w-1/2" />
            </div>
        </div>
    )
}

export default Countdown
