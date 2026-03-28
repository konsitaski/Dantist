document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);

  const clinicName = params.get("clinic") || "Dantist";
  const doctorName = params.get("doctor") || "Dr. Demo";
  const locationName = params.get("location") || "Abbottabad";

  // Safe selectors for visible text
  const textSelectors = [
    ".hero-title",
    ".hero-tagline",
    ".nav-logo-text",
    ".nav-logo-sub",
    ".doctor-name",
    "h1",
    "h2",
    "h3",
    "h4",
    "p",
    "span",
    "li"
  ];

  textSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.textContent = el.textContent
        .replace(/Dantist/gi, clinicName)
        .replace(/Dr\. Demo/gi, doctorName)
        .replace(/Abbottabad/gi, locationName);
    });
  });

  // Update page title
  document.title = `${clinicName} | ${locationName}`;

  // Update meta tags safely
  const descMeta = document.querySelector('meta[name="description"]');
  if(descMeta){
    descMeta.setAttribute("content", `${clinicName} with ${doctorName} offers premium services in ${locationName}.`);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if(ogTitle){
    ogTitle.setAttribute("content", `${clinicName} | Premium services in ${locationName}`);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if(ogDesc){
    ogDesc.setAttribute("content", `${clinicName} with ${doctorName} offers premium services in ${locationName}.`);
  }
});
