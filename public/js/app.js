// Button Navbar
var btn = document.getElementById('btn-nav');
var mn = document.getElementById('mobileNav');
var btnClose = document.getElementById('btn-close');
var itemHello = document.getElementById('item-nav-hello');
var itemAbout = document.getElementById('item-nav-about');
var itemSkills = document.getElementById('item-nav-skills');
var itemWork = document.getElementById('item-nav-work');
var itemEmail = document.getElementById('item-nav-email');

// Munculin navbar resolusi smartphone
btn.addEventListener("click", showListNav);
function showListNav(){
    mn.classList.remove("hidden");        
}

btnClose.addEventListener("click", hideListNav);
itemHello.addEventListener("click", hideListNav);
itemAbout.addEventListener("click", hideListNav);
itemSkills.addEventListener("click", hideListNav);
itemWork.addEventListener("click", hideListNav);
itemEmail.addEventListener("click", hideListNav);

// Nyembunyiin navbar resolusi smartphone
function hideListNav(){        
    mn.classList.add("hidden");
}

// Ini buat navbar active menu
const a = document.querySelectorAll(".menu");
const sec = document.querySelectorAll(".section");

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    a.forEach(ltx => ltx.classList.remove("text-selected-text"));
    a[len].classList.add("text-selected-text");        
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// Ini buat tooltip
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl);
});