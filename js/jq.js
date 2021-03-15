function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
    document.getElementById("main").style.marginLeft = "450px";
    document.getElementById("mySidenav").classList.add('puff-in-center');
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("mySidenav").classList.remove('puff-in-center');
    document.body.style.backgroundColor = "transparent";
}