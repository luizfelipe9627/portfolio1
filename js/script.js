/*
    ABA MENU ↴
*/

window.onload = function() {
    document.querySelector(".menu_mobile"). addEventListener("click", function () {
        if(document.querySelector(".menu nav").style.display == 'flex') {
            document.querySelector(".menu nav").style.display = 'none';
        }   
        
        else {
            document.querySelector(".menu nav").style.display = 'flex';
        }
    });
};

/*
    ROLAGEM DE PÁGINA ↴
*/

link.on("click", function () {
    var seletor = $
    (this).attr('href');
});

/*
    ROLAGEM SUAVE ↴
*/

const menuLinks = document.querySelectorAll('.menu nav li a[href^="#"]');

console.log(menuLinks);