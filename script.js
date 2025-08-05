<script>
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
        await db.collection("escrowRequests").add(data);
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

        document.getElementById("price").addEventListener("input", function () {
  const price = parseFloat(this.value);
  if (!isNaN(price)) {
    const fee = price * 0.02;
    document.getElementById("escrow-fee").innerText = `KES ${fee.toFixed(2)}`;
  } else {
    document.getElementById("escrow-fee").innerText = "KES 0.00";
  }
});

</script>
