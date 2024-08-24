// ............... nav select ......................
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = ()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [herf*=' + id + ']').classList.add('active');
            });
        };
    });
};


// ............... navbar show ......................
const menuIcon = document.querySelector("#menu-icon");
const navlist  = document.querySelector(".navList");

menuIcon.onclick =  ()=> {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("active");
};

window.onscroll =  ()=> {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("active");
};


// ............... contact me ......................
function sendToWhatsapp() {
     const number = "+8801973671966";

     var url = "https://wa.me/" + number + "?text=";

     window.open(url, '_blank').focus();
 };

// ............... contact me ......................
 function sendToGmail() {
    var url = "https://mail.google.com/mail/u/0/#inbox?compose=jrjtXFBHzzBLxJxnQPWkKfghdCtfbJgKpBSXdPXknkhQLdhvqzRTSjKGgCwDLMKPnpLcXQzl";

    window.open(url, '_blank').focus();
 }