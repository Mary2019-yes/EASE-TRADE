import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async function () {
  // Firebase config (replace with your actual values)
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Toggle Read More
  const readMoreBtn = document.getElementById("readMoreBtn");
  const moreAbout = document.getElementById("moreAbout");

  readMoreBtn.addEventListener("click", () => {
    if (moreAbout.style.display === "none" || moreAbout.style.display === "") {
      moreAbout.style.display = "block";
      readMoreBtn.textContent = "Read Less";
    } else {
      moreAbout.style.display = "none";
      readMoreBtn.textContent = "Read More";
    }
  });

  // Form submit
  const form = document.querySelector("form");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      await addDoc(collection(db, "escrowRequests"), data);
      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);
      form.reset();
    } catch (error) {
      alert("Error submitting form.");
      console.error("Submission error:", error);
    }
  });
});

