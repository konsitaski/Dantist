document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);

  const businessName = params.get("name") || "Dantist";
  const businessLocation = params.get("location") || "Abbottabad";

  // Replace text in whole page
  document.querySelectorAll("*").forEach(el => {
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      el.textContent = el.textContent.replace(/Dantist/gi, businessName);
      el.textContent = el.textContent.replace(/Abbottabad/gi, businessLocation);
    }
  });

  // Update page title
  document.title = `${businessName} | ${businessLocation}`;
});
