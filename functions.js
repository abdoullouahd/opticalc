function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        console.log(x.className);
    } else {
        x.className = "topnav";
        
    }
}

function isActive() {
    var element = document.getElementById("test");
    element.className = "active";
}