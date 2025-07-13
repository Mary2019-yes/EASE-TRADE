document.addEventListener("DOMContentLoaded", function () {
  // Inject mobile responsive meta tag
  document.head.insertAdjacentHTML(
    "beforeend",
    '<meta name="viewport" content="width=device-width, initial-scale=1">'
  );

  // Success message on form submission
  const form = document.querySelector("form");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMessage.style.display = "block";

    // Hide it after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);

    form.reset();
  });

  // Optional: Dark mode toggle (if you’ve added one)
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ddd";
      } else {
        document.body.style.backgroundColor = "#f8f9fa";
        document.body.style.color = "#333";
      }
    });
  }
});
