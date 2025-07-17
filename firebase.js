import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyATGDe4NI75RSny4ZbE3WDtaUoUivjv3E8",
  authDomain: "digital-menu-wooden.firebaseapp.com",
  databaseURL: "https://digital-menu-wooden-default-rtdb.firebaseio.com",
  projectId: "digital-menu-wooden",
  storageBucket: "digital-menu-wooden.firebasestorage.app",
  messagingSenderId: "776717051891",
  appId: "1:776717051891:web:c52bc347ba84434e839486",
  measurementId: "G-12S0DC6EMT"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };