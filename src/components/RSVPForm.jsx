import React, { useState } from "react"
import HeartImg from "../assets/img/heart_input.png"
import Modal from "./Modal"
import { CircleImg } from "../App"
import { motion, AnimatePresence } from "framer-motion"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase"

export const statusList = [
    { label: "Келемін", value: "ACCEPT" },
    { label: "Жұбыммен келемін", value: "ACCEPT_WITH_PAIR" },
    { label: "Келе алмаймын", value: "NOT_ACCEPT" },
]

const LoadingSpinner = () => (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
)

const RSVPForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        attendance: "",
        comment: "",
    })
    const [errors, setErrors] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [serverError, setServerError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) {
            newErrors.name = "Есіміңізді енгізіңіз"
        }
        if (!formData.attendance) {
            newErrors.attendance = "Жауапты таңдаңыз"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            setIsLoading(true)
            try {
                const now = new Date()
                const formattedDate = `${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getFullYear()} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`

                await addDoc(collection(db, "responses"), {
                    ...formData,
                    timestamp: now.getTime(),
                    createdAt: formattedDate,
                })

                setIsModalOpen(true)
                setServerError(null)
            } catch (error) {
                setServerError(error.message)
                setIsModalOpen(true)
            } finally {
                setIsLoading(false)
            }
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
        if (!serverError) {
            setFormData({
                name: "",
                attendance: "",
                comment: "",
            })
            setErrors({})
        }
        setServerError(null)
    }

    return (
        <div className="max-w-md mx-auto p-6 pt-0 relative">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-playfair uppercase leading-relaxed font-medium">
                    Тойға келетініңізді
                    <br />
                    растауыңызды
                    <br />
                    сұраймыз
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Есіміңіз"
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value })
                                if (errors.name) setErrors({ ...errors, name: "" })
                            }}
                            className={`w-full pr-6 pl-2 py-3 border ${errors.name ? "border-red-400" : "border-gray-300"} rounded-lg text-2xl focus:outline-none focus:border-blue-400 placeholder:text-lg transition-colors`}
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            <img src={HeartImg} alt="heart-img" className="w-6 h-6 object-contain" />
                        </div>
                    </div>
                    <AnimatePresence>
                        {errors.name && (
                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-red-500 text-sm mt-1 ml-2 font-montserrat">
                                {errors.name}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <div className="text-left ml-4 space-y-1 font-montserrat">
                        <p className="mb-4 text-base">
                            Жұбыңызбен келсеңіз,
                            <br />
                            есімдеріңізді бірге жаза
                            <br />
                            кетіңіз
                        </p>

                        <div className="space-y-4">
                            {statusList.map((option) => (
                                <label key={option.value} className="flex items-center space-x-3">
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value={option.value}
                                        checked={formData.attendance === option.value}
                                        onChange={(e) => {
                                            const selectedOption = statusList.find((o) => o.value === e.target.value)
                                            setFormData({ ...formData, attendance: e.target.value, comment: selectedOption?.label || "" })
                                            if (errors.attendance) setErrors({ ...errors, attendance: "", comment: "" })
                                        }}
                                        className="w-5 h-5"
                                    />
                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </div>
                        <AnimatePresence>
                            {errors.attendance && (
                                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-red-500 text-sm mt-2 font-montserrat">
                                    {errors.attendance}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                <motion.button type="submit" whileTap={{ scale: 0.95 }} disabled={isLoading} className={`w-full py-3 px-6 bg-blue-base text-white rounded-full text-lg transition-colors font-montserrat flex items-center justify-center space-x-2 ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}>
                    {isLoading ? (
                        <>
                            <LoadingSpinner />
                            <span>Жіберілуде...</span>
                        </>
                    ) : (
                        <span>Жауапты жіберу</span>
                    )}
                </motion.button>
            </form>
            <CircleImg className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 opacity-10 -z-10" />
            <Modal isOpen={isModalOpen} onClose={closeModal} formData={formData} error={serverError} />
        </div>
    )
}

export default RSVPForm
