loadTopBar();
if(window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split(".")[0])
{
  loadSideBar(window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split(".")[0]);
}
else {
  loadSideBar("index");
}


$("body").on("click", "#menu-toggle", function(e) {
  toggleSidebarMenu(e);
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};