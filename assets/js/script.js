const btn = document.querySelector("#btn");
const section = document.querySelectorAll(".section-name");
const dropdown = document.querySelector("#members-collapse");
const sidebar = document.querySelector("#sidebar");
const main = document.querySelector("main");

eventListeners();

function eventListeners() {
    btn.addEventListener("click", openCloseNavbar);
    section[1].parentElement.addEventListener("click", function() {
        for (var i = 0; i < 3; i++) {
            if (section[i].style.display == "none") {
                section[i].style.display = "inline-block";
                sidebar.style.width = "270px";
                main.style.marginLeft = "270px";
            }
        }
    });
}

function openCloseNavbar() {
    for (var i = 0; i < 3; i++) {
        if (section[i].style.display == "inline-block") {
            section[i].style.display = "none";
            dropdown.className = "collapse";
            sidebar.style.width = "90px";
            main.style.marginLeft = "90px";

        } else {
            section[i].style.display = "inline-block";
            sidebar.style.width = "270px";
            main.style.marginLeft = "270px";
        }
    }
}