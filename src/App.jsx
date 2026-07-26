import HeartImg from "./assets/img/heart.png"
import Header, { Names2 } from "./components/Header"
import "./index.css"
import Countdown from "./components/Countdown"
import MobileCheck from "./components/MobileCheck"
import DividerImg from "./assets/img/divider.png"
import Footer from "./components/Footer"
import CircleAU from "./components/CircleAU"
import RSVPForm from "./components/RSVPForm"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import MusicPlayer from "./components/MusicPlayer"
import CrookedLine from "./components/CrookedLine"

const Divider = () => {
    return (
        <div className="mx-auto h-9 w-36 my-10">
            <img className="object-cover" src={DividerImg} alt="test" />
        </div>
    )
}

export const CircleImg = ({ className }) => {
    return (
        <div className={`absolute w-[320px] h-[320px] ${className}`}>
            <CircleAU />
        </div>
    )
}

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])

    return (
        <MobileCheck>
            <div className="App relative">
                <MusicPlayer />
                <div data-aos="fade">
                    <Header />
                </div>

                <div className="text-center relative overflow-hidden">
                    <div data-aos="fade-up">
                        <div className="text-center uppercase font-playfair mt-10 leading-[23px] text-adjust-auto origin-center">
                            құрметті ағайын-туыс,
                            <br />
                            құда-жекжат, нағашы-жиендер,
                            <br />
                            дос-жарандар, көршілер
                            <br />
                            және әріптестер!
                        </div>
                    </div>

                    <div className="mt-10 text-center relative">
                        <div data-aos="fade-up">
                            <h2 className="uppercase font-montserrat text-xl">сіздерді аяулы қызымыз</h2>
                        </div>

                        <CircleImg className="-right-56 -top-24 opacity-15 -z-10" />

                        <div data-aos="fade-up">
                            <div className="relative">
                                <Names2 />
                            </div>
                        </div>

                        <div className="mt-56 relative">
                            <CircleImg className="-left-56 top-8 opacity-15 -z-10" />

                            <div data-aos="fade-up">
                                <p className="font-playfair text-adjust-auto transform origin-center leading-[23px]">
                                    ұзату тойына <br />
                                    арналған салтанатты ақ <br />
                                    дастарханымыздың қадірлі
                                    <br />
                                    қонағы болуға шақырамыз!
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            <Divider />
                            <div className="text-xl  font-montserrat">ТОЙ ИЕЛЕРІ:</div>
                            <div className="text-6xl font-cursive text-center font-kazak text-blue-base mt-2">
                                <span className="relative">
                                    Аманжол
                                </span>
                                - Рита
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            <Divider />
                            <div className="text-3xl font-montserrat">ТОЙ САЛТАНАТЫ:</div>
                            <div className="text-7xl font-kazak text-blue-base mt-2">25 қазан 2026</div>
                            <div className="text-3xl font-semibold mt-3 flex flex-row justify-around py-1 border mx-auto">
                                <span>Қазан</span>
                                <span>2026</span>
                            </div>
                            <div className="grid grid-cols-7 gap-1 w-10/12 relative mx-auto text-sm mt-2">
                                {["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"].map((day, index) => (
                                    <div key={index} className="font-playfair">
                                        {day}
                                    </div>
                                ))}
                                {Array.from({ length: 34 }, (_, index) => {
                                    const day = index - 2
                                    const isBlank = day <= 0
                                    const isEvent = day === 25
                                    const isHoliday = day === 26

                                    return (
                                        <div
                                            key={index}
                                            className={`py-1 px-2 rounded-full ${isEvent ? "relative" : ""} ${isHoliday ? "bg-green-100 text-green-700 border border-green-300" : ""}`}
                                            title={isHoliday ? "Демалыс" : undefined}
                                        >
                                            {isBlank ? null : day}
                                            {isEvent && (
                                                <img
                                                    src={HeartImg}
                                                    alt="test"
                                                    className="animate-pulse absolute -top-1 left-1/2 -translate-x-1/2 w-10 h-10 -z-10"
                                                />
                                            )}
                                        </div>
                                    )
                                })}

                                <CircleImg className="-right-56 -top-24 opacity-10 -z-10" />
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            <div className="text-2xl text-gray-700 mt-10 font-playfair">БАСТАЛУ УАҚЫТЫ:</div>
                            <div className="flex items-center justify-center mt-2 mx-auto w-10/12">
                                <div className="border-t border-gray-400 flex-grow mr-2"></div>
                                <div className="text-2xl font-medium text-black-primary">18:00</div>
                                <div className="border-t border-gray-400 flex-grow ml-2"></div>
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            <div className="mt-2 p-2">
                                <Countdown />
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            <div className="mt-20">
                                <h3 className="font-playfair text-2xl">Мекен-Жайымыз: </h3>
                                <div className="border-t border-gray-400 w-1/2 mt-2 mx-auto"></div>
                                <div className="tn-atom text-adjust-auto transform font-medium origin-center leading-6 uppercase mt-4">
                                    <span className="font-montserrat">Ақтөбе қаласы,</span>
                                    <br />
                                    <span className="font-playfair">Ораз Тәтеұлы көшесі, 9</span>
                                </div>
                                <p className="mt-2 text-blue-base font-playfair text-3xl">"Royal Palace"</p>
                            </div>
                            <div id="map" className="mx-2 overflow-hidden rounded-lg border shadow mt-4 h-52" onClick={() => window.open("https://go.2gis.com/Z69VF")}></div>
                        </div>
                    </div>
                </div>

                <Divider />
                <RSVPForm />
                <Divider />

                <Footer />
            </div>
        </MobileCheck>
    )
}

export default App
