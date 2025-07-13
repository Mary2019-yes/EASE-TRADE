document.addEventListener("DOMContentLoaded", function () {
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

  // Form submit success popup
  const form = document.querySelector("form");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);

    form.reset();
  });
});
