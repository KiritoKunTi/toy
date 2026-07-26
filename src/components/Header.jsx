import Main from "../assets/img/1.jpg"
// import Main from "../assets/img/main.png"
import CrookedLine from "./CrookedLine"

export const Names2 = () => {
    return (
        <div className="flex-1 flex absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center">
            {/* <h1 className="absolute -top-10 -left-32 text-[100px] font-kazak b-4 text-blue-base mr-20">
                Зан<span className="kazak-letter after:border-blue-base">гар</span>
                <div className="absolute bottom-[45px] -z-1 left-12 text-sm">
                    <CrookedLine className="text-sm w-4 h-4" color="#8097c9" />
                </div>
            </h1>
            <span className="absolute top-16 -left-20 text-lg font-kazak ml-10 mb-4 font-montserrat">мен</span> */}
            <h1 className="text-[100px] font-kazak text-blue-base">Ақсауленің</h1>
            {/* <h1 className="text-[100px] absolute top-20 -left-24 font-kazak ml-20 text-blue-base">Ақсауле</h1> */}
        </div>
    )
}

const Header = () => {
    return (
        <div className="relative w-full">
            {/* Main Image with Gradient Overlay */}
            <div className="w-full min-h-[600px] relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img src={Main} alt="Wedding couple" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 header-overlay"></div>
                </div>

                {/* Content */}
                <div className="h-full my-auto">
                    {/* Names */}
                    <div className="flex-1 flex absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center">
                        {/* <h1 className="absolute top-24 -left-32 text-[100px] font-kazak b-4 mr-20">
                            Зан<span className="kazak-letter after:border-black">гар</span>
                            <div className="absolute bottom-[45px] -z-1 left-12 text-sm">
                                <CrookedLine className="text-sm w-4 h-4" />
                            </div>
                        </h1>
                        <span className="absolute top-44 -left-20 text-[100px] font-kazak ml-10 mb-4">&</span> */}
                        <h1 className="text-9xl absolute top-64 font-kazak">Ақсауле</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
