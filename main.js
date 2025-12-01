// Toggle visibility of regions layer  
document.getElementById("regions-visible").addEventListener("change", (e) => {
  const v = e.target.checked ? "visible" : "none";
  map.setLayoutProperty("regions", "visibility", v);
  map.setLayoutProperty("regions-outline", "visibility", v);
});

// Toggle visibility of regions labels
document.getElementById("regions-labels-visible").addEventListener("change", (e) => {
  const v = e.target.checked ? "visible" : "none";
  map.setLayoutProperty("regions-labels", "visibility", v);
});

// Adjust opacity of regions layer and labels
document.getElementById("regions-opacity").addEventListener("input", (e) => {
  const op = parseFloat(e.target.value);

  map.setPaintProperty("regions-fill", "fill-opacity", op);
  map.setPaintProperty("regions-outline", "line-opacity", op);
  map.setPaintProperty("regions-labels", "text-opacity", op);
});


// Toggle visibility of different marker types
// Default marker toggle
document.getElementById("marker-default-visible").addEventListener("change", (e) => {
  if (e.target.checked) {
    markerDefault.addTo(map);
  } else {
    markerDefault.remove();
  }
});

// PNG marker toggle
document.getElementById("marker-png-visible").addEventListener("change", (e) => {
  if (e.target.checked) {
    markerPNG.addTo(map);
  } else {
    markerPNG.remove();
  }
});

// HTML marker toggle
document.getElementById("marker-html-visible").addEventListener("change", (e) => {
  if (e.target.checked) {
    markerHTML.addTo(map);
  } else {
    markerHTML.remove();
  }
});

