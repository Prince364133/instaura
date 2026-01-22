
// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAY_TN3to4yAqk7IJNqVSKFS-fSuynXwOw",
    authDomain: "teste-erhij8.firebaseapp.com",
    projectId: "teste-erhij8",
    storageBucket: "teste-erhij8.firebasestorage.app",
    messagingSenderId: "744778225564",
    appId: "1:744778225564:web:f5d6b73e501495b3dfda59"
};

// Initialize Firebase (via CDN script in admin.html usually, but here as a config object to be exported or used)
// We will use standard CDN imports in the HTML files.
window.firebaseConfig = firebaseConfig;
