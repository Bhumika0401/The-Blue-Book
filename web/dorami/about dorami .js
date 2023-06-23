var count = 1;
setInterval(function() {
    count = ($("#dorara").fadeOut('slow').next().length == 0) ? 1 : count+1;
    $("#dorara").fadeIn('slow');
}, 5000);



