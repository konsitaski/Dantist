document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);

  const businessName = params.get("name") || "Demo Clinic";
  const businessLocation = params.get("location") || "Default City";

  // Update heading and tagline
  const nameEl = document.getElementById("clinic-name");
  if (nameEl) nameEl.textContent = businessName;

  const locationEl = document.getElementById("clinic-location");
  if (locationEl) locationEl.textContent = businessLocation;

  // Update title
  const titleEl = document.getElementById("page-title");
  if (titleEl) titleEl.textContent = `${businessName} | ${businessLocation}`;

  // Update meta description
  const descEl = document.getElementById("meta-description");
  if (descEl) descEl.setAttribute("content", `${businessName} offers world-class dental care in ${businessLocation}.`);

  // Update keywords
  const keywordsEl = document.getElementById("meta-keywords");
  if (keywordsEl) keywordsEl.setAttribute("content", `dentist ${businessLocation}, dental clinic ${businessName}, teeth whitening ${businessLocation}, dental implants, braces ${businessLocation}`);

  // Update author
  const authorEl = document.getElementById("meta-author");
  if (authorEl) authorEl.setAttribute("content", businessName);

  // Update OG tags
  const ogTitle = document.getElementById("og-title");
  if (ogTitle) ogTitle.setAttribute("content", `${businessName} | ${businessLocation}`);

  const ogDesc = document.getElementById("og-description");
  if (ogDesc) ogDesc.setAttribute("content", `World-class dental care in ${businessLocation}.`);

  // Update canonical link
  const canonicalEl = document.getElementById("canonical-link");
  if (canonicalEl) canonicalEl.setAttribute("href", `https://${businessName.toLowerCase().replace(/\s+/g, "-")}.com/`);
});
