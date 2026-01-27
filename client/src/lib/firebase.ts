
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAY_TN3to4yAqk7IJNqVSKFS-fSuynXwOw",
    authDomain: "teste-erhij8.firebaseapp.com",
    projectId: "teste-erhij8",
    storageBucket: "teste-erhij8.firebasestorage.app",
    messagingSenderId: "744778225564",
    appId: "1:744778225564:web:55adaccd9baa5564dfda59",
    measurementId: "G-BLVDC6CV2B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const analytics = getAnalytics(app);

export const saveFormSubmission = async (collectionName: string, data: any) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            timestamp: serverTimestamp(),
            userAgent: window.navigator.userAgent,
            url: window.location.href
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
};
