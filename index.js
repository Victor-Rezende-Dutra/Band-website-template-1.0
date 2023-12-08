var iconMenu = $("#menuIcon");
var subMenu = $(".sub-menu-wrap");
var subMenuSobre = $(".sub-menu-sobre");
var sideMenuSobre = $(".side-menu-sobre");
var subMenuParticipe = $(".sub-menu-participe");
var sideMenuParticipe = $(".side-menu-participe");

$(document).ready(function () {
    iconMenu.click(function() {
        subMenu.toggleClass("open-menu");
        sideMenuSobre.removeClass("open-menu-side");
        sideMenuParticipe.removeClass("open-menu-side");
    });
    subMenuSobre.click(function() {
        sideMenuSobre.toggleClass("open-menu-side");
        sideMenuParticipe.removeClass("open-menu-side");
    });
    subMenuParticipe.click(function() {
        sideMenuParticipe.toggleClass("open-menu-side");
        sideMenuSobre.removeClass("open-menu-side");
    });
});

$(document).ready(function () {
    
});

