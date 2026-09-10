import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBoCGJWETkCBgGgCWc26uicjSPgrKGNH34",
    authDomain: "invitation-7c557.firebaseapp.com",
    projectId: "invitation-7c557",
    storageBucket: "invitation-7c557.firebasestorage.app",
    messagingSenderId: "139490322258",
    appId: "1:139490322258:web:a2c9d79e8f11fa4bd3bc8b",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
