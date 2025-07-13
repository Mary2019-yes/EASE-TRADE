document.addEventListener("DOMContentLoaded", function () {
  // Body
  document.body.style.backgroundColor = "#ffe4e1";
  document.body.style.margin = "30px";
  document.body.style.fontFamily = "Arial, sans-serif";
  console.log("Body styled by JS");

  // Header
  const header = document.querySelector("header");
  if (header) {
    header.style.backgroundColor = "#f1f1f1";
    header.style.fontStyle = "italic";
    header.style.fontSize = "25px";
    header.style.padding = "10px";
    header.style.border = "10px solid black";
    header.style.margin = "20px";
    console.log("Header styled by JS");
  }

  // Navigation
  const navUl = document.querySelector("nav ul");
  if (navUl) {
    navUl.style.listStyle = "none";
    navUl.style.margin = "10px";
    navUl.style.padding = "10px";
    navUl.style.display = "flex";
    navUl.style.justifyContent = "flex-start";
    navUl.style.gap = "30px";
    navUl.style.backgroundColor = "#f0f0f0";
    console.log("Navigation styled by JS");
  }

  document.querySelectorAll("nav ul li a").forEach(link => {
    link.style.textDecoration = "none";
    link.style.color = "#333";
    link.style.fontWeight = "bold";
    link.addEventListener("mouseover", () => {
      link.style.color = "#007bff";
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "#333";
    });
  });
  console.log("Navigation links styled by JS");

  // Headings
  document.querySelectorAll("h1").forEach(h1 => {
    h1.style.color = "blue";
    h1.style.paddingTop = "20px";
    h1.style.marginLeft = "20px";
  });
  console.log("H1 headings styled by JS");

  document.querySelectorAll("h2").forEach(h2 => {
    h2.style.color = "blue";
    h2.style.marginLeft = "20px";
  });
  console.log("H2 headings styled by JS");

  document.querySelectorAll("h3").forEach(h3 => {
    h3.style.color = "orange";
  });
  console.log("H3 headings styled by JS");

  // Paragraphs
  document.querySelectorAll("p").forEach(p => {
    p.style.fontSize = "20px";
  });
  console.log("Paragraphs styled by JS");

  // Form
  const form = document.querySelector("form");
  if (form) {
    form.style.color = "purple";
    form.style.fontSize = "30px";
    form.style.fontStyle = "italic";
    form.style.fontFamily = "Arial";
    form.style.boxSizing = "border-box";
    form.style.width = "90%";
    console.log("Form styled by JS");
  }

  // Inputs
  document.querySelectorAll("input").forEach(input => {
    input.style.width = "50%";
    input.style.padding = "10px";
    input.style.boxSizing = "border-box";
    input.style.fontSize = "16px";
  });
  console.log("Input fields styled by JS");

  // Textarea
  const textarea = document.querySelector("textarea");
  if (textarea) {
    textarea.style.width = "40%";
    textarea.style.height = "100px";
    textarea.style.padding = "10px";
    textarea.style.boxSizing = "border-box";
    textarea.style.fontSize = "16px";
    console.log("Textarea styled by JS");
  }

  // Footer
  const footer = document.querySelector("footer");
  if (footer) {
    footer.style.marginTop = "40px";
    footer.style.textAlign = "center";
    footer.style.fontSize = "16px";
    footer.style.color = "#444";
    console.log("Footer styled by JS");
  }
});
