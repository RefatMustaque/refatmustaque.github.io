function toggleSidebarMenu(e)
{
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
};

function loadTopBar(){
    $("#global-top-navbar").load("/nav.html");
};

function loadSideBar(folderName){
    var count_first = 0;
    
    $("#sidebar-anchor-list > a").each(function(){

        if($(this).attr("href").substring(1).trim()){

            if(count_first == 0) {
                $("#sidebar-tab-content-list").append('<div id="'+ $(this).attr("href").substring(1).trim() +'" class="tab-pane in active"></div>')
            }
            else{
                $("#sidebar-tab-content-list").append('<div id="'+ $(this).attr("href").substring(1).trim() +'" class="tab-pane fade"></div>')
            }

            $("#" + $(this).attr("href").substring(1).trim()).load( folderName + "/"+ $(this).attr("href").substring(1).trim() +".html")
        }

        count_first = count_first + 1;
    });
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("#scrollToTopBtn").css("display", "block");
    } else {
      $("#scrollToTopBtn").css("display", "none");
    }
  }
  
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function typingEffect(element){
    Alert("working");
    var string = element.textContent;
    element.textContent = "";
    // element.style.visibility = "visible";
    var str = string.split("");
    (function animate() {
    element.length > 0 ? element.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 90);
    })();
}

function getMonthDifferenceBetweenDates(from, to) 
 {

  var diff =(from.getTime() - to.getTime()) / 1000;
   diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));
  
 }