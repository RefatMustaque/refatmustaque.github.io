$(document).ready(function () {
    $(".nav-tabs a").click(function () {
        $(this).tab("show");
    });



    // navigation content
    $("#home").load("/Content/home.html");

    $("#project").load("/Content/project.html");
});