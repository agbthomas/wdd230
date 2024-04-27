// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

// Format the last modified date
const lastModifiedString = lastModifiedDate.toLocaleString();

// Update the footer elements
document.getElementById("copyright-year").textContent = currentYear;
document.getElementById("last-modified").textContent = lastModifiedString;