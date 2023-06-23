document.querySelector("#headbed").addEventListener("click",function()
{
    var aa= new Audio('../sounds/dorara.mp3');
    aa.play();
    this.style.color="white";
});

$('.col').on("click",function() {
$(this).slideDown();
});

