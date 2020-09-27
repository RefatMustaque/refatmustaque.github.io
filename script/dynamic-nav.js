
function fixSourceUrl()
{
    console.log(window.location.hostname);
}

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