
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDFYhjBIDFZMUbUf4U4aXsMH-Sm5yLKXGs",
    authDomain: "instaura-cb182.firebaseapp.com",
    projectId: "instaura-cb182",
    storageBucket: "instaura-cb182.firebasestorage.app",
    messagingSenderId: "350604671415",
    appId: "1:350604671415:web:d74cddf74c4ea1ff0f5032",
    measurementId: "G-QQ08EE07ME"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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
