
const currentYear = new Date().getFullYear();


const lastModifiedDate = new Date(document.lastModified);


const lastModifiedString = lastModifiedDate.toLocaleString();


document.getElementById("copyright-year").textContent = currentYear;
document.getElementById("last-modified").textContent = lastModifiedString;