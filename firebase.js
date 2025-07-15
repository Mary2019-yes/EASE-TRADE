// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAieRdXGsYRowlrCP-f20iylTb_KHK77yQ",
  authDomain: "simplifyd-biz.firebaseapp.com",
  projectId: "simplifyd-biz",
  storageBucket: "simplifyd-biz.appspot.com",
  messagingSenderId: "681167510393",
  appId: "1:681167510393:web:6a97787187ee27e879eda8",
  measurementId: "G-V2046MG1R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = form.name.value;
      const email = form.email.value;
      const message = form.message.value;

      try {
        await addDoc(collection(db, "contacts"), {
          name,
          email,
          message,
          timestamp: new Date()
        });

        form.reset();
        successMessage.style.display = "block";
      } catch (error) {
        console.error("Firestore error:", error);
        alert("Failed to send. Please try again.");
      }
    });
  }
});
