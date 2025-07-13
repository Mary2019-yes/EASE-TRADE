document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.style.width = "40%";
    textarea.style.height = "60px";
    textarea.style.padding = "10px";
    textarea.style.fontSize = "16px";
    textarea.style.boxSizing = "border-box";
    console.log("Textarea styled by JS");
  } else {
    console.log("No textarea found");
  }
});
