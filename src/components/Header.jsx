import Main from "../assets/img/main.png"

export const Names2 = () => {
    return (
        <div className="flex-1 flex absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center">
            <h1 className="absolute -top-0 -left-36 text-[80px] font-kazak b-4 text-blue-base mr-20">Думан</h1>
            <span className="absolute top-[90px] -left-[62px] text-lg font-kazak ml-10 mb-4 font-montserrat">мен</span>
            <h1 className="text-[80px] absolute top-[90px] -left-36 font-kazak ml-20 text-blue-base">Ақсауле</h1>
        </div>
    )
}

const Header = () => {
    return (
        <div className="relative w-full">
            <div className="w-full min-h-[600px] relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src={Main} alt="Wedding couple" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 header-overlay"></div>
                </div>

                <div className="h-full my-auto">
                    <div className="flex-1 flex absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center">
                        <h1 className="absolute top-24 -left-32 text-[100px] font-kazak b-4 mr-20 -translate-y-[0px] -translate-x-[40px]">Думан</h1>
                        <span className="absolute top-44 -left-20 text-[100px] font-kazak ml-10 mb-4">&</span>
                        <h1 className="text-8xl absolute top-64 font-kazak translate-y-[30px] translate-x-[50px]">Ақсауле</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
