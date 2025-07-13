// Automatically style the message area (textarea) when the page loads
window.onload = function () {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.style.width = "40%";
    textarea.style.height = "60px"; // reduce height here
    textarea.style.padding = "10px";
    textarea.style.fontSize = "16px";
    textarea.style.boxSizing = "border-box";
  }
};
