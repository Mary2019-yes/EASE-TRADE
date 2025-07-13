document.addEventListener("DOMContentLoaded", function () {
  // Responsive meta tag
  document.head.insertAdjacentHTML(
    "beforeend",
    '<meta name="viewport" content="width=device-width, initial-scale=1">'
  );

  // Form submit alert
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    form.reset();
  });

  // Dark mode toggle
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
