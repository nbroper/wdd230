//current year after "copyright" symbol in footer
const year = { year: 'numeric' };
document.getElementById("currentYear").textContent = new Date().toLocaleDateString('en-US', year);

//last updated date in footer
const lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;

// document.querySelectora('#lastUpdate').innerHTML = `Last Updated: ${document}`