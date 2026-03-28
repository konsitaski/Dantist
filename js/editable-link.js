document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);

  const businessName = params.get("name") || "Dantist";
  const businessLocation = params.get("location") || "Abbottabad";

  // Replace text in whole page
  document.querySelectorAll("*").forEach(el => {
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      if (businessName) {
        el.textContent = el.textContent.replace(/Dantist|Demo Clinic/gi, businessName);
      }
      if (businessLocation) {
        el.textContent = el.textContent.replace(/Abbottabad|Default City/gi, businessLocation);
      }
    }
  });

  // Update page title
  document.title = `${businessName} | ${businessLocation}`;

  // Update meta tags
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute("content", `${businessName} in ${businessLocation}`);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", businessName);
});
