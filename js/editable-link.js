document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);

  const clinicName = params.get("clinic") || "Dantist";
  const doctorName = params.get("doctor") || "Dr. Demo";
  const locationName = params.get("location") || "Abbottabad";

  // Recursive safe function to update text nodes
  function replaceTextNodes(node) {
    // Ignore script, style, noscript, iframe
    const skipTags = ["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME"];
    if(skipTags.includes(node.tagName)) return;

    node.childNodes.forEach(child => {
      if(child.nodeType === 3) { // Text node
        child.textContent = child.textContent
          .replace(/Dantist/gi, clinicName)
          .replace(/Dr\. Demo/gi, doctorName)
          .replace(/Abbottabad/gi, locationName);
      } else {
        replaceTextNodes(child); // Recursive call
      }
    });
  }

  try {
    replaceTextNodes(document.body);
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
  } catch(e) {
    console.error("Error updating page text:", e);
  }
});
