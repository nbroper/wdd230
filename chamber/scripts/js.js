// hamburger menu

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle('open');
    document.getElementById("hamburgerButton").classList.toggle('open');
}

const x = document.getElementById('hamburgerButton');
x.onclick = toggleMenu;

//current date

const datefield = document.querySelector(".date");
const now = new Date();
const currentdate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `${currentdate}`;

//footer text
const options = { year: "numeric" }
const currentyear = now.toLocaleDateString("en-US", options);
document.querySelector("#footerBase").innerHTML = `&copy;${currentyear} West Face Chamber Nathan Roper WDD230 Last Modification: ${document.lastModified}`;