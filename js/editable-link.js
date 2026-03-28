// editable-link.js
document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);

  const clinicName = params.get("clinic") || "Dantist";
  const doctorName = params.get("doctor") || "Dr. Demo";
  const locationName = params.get("location") || "Abbottabad";

  // Replace text in whole page
  document.querySelectorAll("*").forEach(el => {
    el.childNodes.forEach(node => {
      if(node.nodeType === 3){ // text node
        node.textContent = node.textContent
          .replace(/Dantist/gi, clinicName)
          .replace(/Dr\. Demo/gi, doctorName)
          .replace(/Abbottabad/gi, locationName);
      }
    });
  });

  // Update page title
  document.title = `${clinicName} | ${locationName}`;

  // Update meta description
  const descMeta = document.querySelector('meta[name="description"]');
  if(descMeta){
    descMeta.setAttribute("content", `${clinicName} with ${doctorName} offers premium services in ${locationName}.`);
  }

  // Update og:title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if(ogTitle){
    ogTitle.setAttribute("content", `${clinicName} | Premium services in ${locationName}`);
  }

  // Update og:description
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if(ogDesc){
    ogDesc.setAttribute("content", `${clinicName} with ${doctorName} offers premium services in ${locationName}.`);
  }
});
