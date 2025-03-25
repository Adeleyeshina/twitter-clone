// // -----------code for search bar behaviours--------------------

var searchInput = $(".search-bar input");
var searchBar = $(".search-bar");
searchInput = document.getElementsByClassName('search-bar')[0]

//This work for reaction when when the input is focused
$(".search-bar input").focus(function (){
    $(".ex-bck").removeClass("d-none") //this for the explore page back button

    //this first check if there's text already in the input when focused and add bootstrap progress slide under it
    if(searchInput.val().length >=1){  
        $(".badge").css("opacity", "1");
    }
    // this change the background, add border and also show the div underneath
    $(searchBar).css({"border" : "1.5px solid #0d6efd", "background-color" : "#000000"});
    $(".search-abt").show()

});
//this return the backgroud and others specified above to the initial state
$(".search-bar input").focusout(function (){
    $(".ex-bck").addClass("d-none") //this for the explore page back button


    $(searchBar).css({"border" : "none", "background-color" : " rgba(255, 255, 255, .2)"});
    $(".search-abt").hide()
    $(".badge").css("opacity", "0");
});



//This work for reaction when text is being inserted in the input 
searchInput.keyup(() => {
    var textLength = searchInput.val().length; //calculte the length of the word in the input tag
    if (textLength >= 1){
        setTimeout (function () {
            $(".progress-bar").css("width", "25%")//add progress bar when text is written in d input
        }, 1000)
        
        $(".badge").css("opacity", "1"); //make the badge visible ,, ,, ,,
        $(".search-abt p").text("") // change the text on the div
        $(".badge").click( ()=> { // check for click on the badge to clear the text in the input
            searchInput.val("");
            $(".progress-bar").css("width", "0%"); //remove progress bar
            $(".search-abt p").text("Try search for people, lists or keyword") // return the text back
        });
    }

    //return everything above the initial state
    else{
        $(".progress-bar").css("width", "0%");
        $(".badge").css("opacity", "0");
        $(".search-abt p").text("Try search for people, lists or keyword")
    }
});

function icons (caller){
    $(caller).mouseenter( function (){
        $(this).find(".more").delay(1000).show(0);
    })
    $(caller).mouseout( function (){
        $(".more").hide(0);
    })
}

// This is working for Trends when the elipsis icon is hover
var trendsIcon = $(".trends i")
icons(trendsIcon) 

// This is working for icons below the tweet when when they are over
var tweetIcon = $(".tweet-icons div i")
icons(tweetIcon) 




/// for the middle to switch from for you to following
var tablinks = $(".tablinks p");
var middleContent = $(".middle-content");
var nav = $(".middle-nav div");
function opentab(name, side){
    $(tablinks).removeClass("activated bold-nav")
    $(middleContent).removeClass("active-tab")

    $("." + side).addClass("activated bold-nav")
    $("#" + name).addClass("active-tab")   
}

var ellipsis = $(".creator .fa-ellipsis");
icons(ellipsis)

//for the reactions underpost
var  postReaction= $(".reactions span")
icons(postReaction) 


// for textarea to activate post when there's  content on it
textArea = $('[contenteditable]');
textArea.keyup (function (){
    textareaLength = textArea.text().length
   if (textareaLength >= 1){
     $(".tweet-icons a").removeClass("disabled")
   }
   else {
     $(".tweet-icons a").addClass("disabled")
   }

});

window.onscroll = () => {
    if(document.body.scrollTop > 950){
       $(".col-lg-4").css({"position" : "fixed", "right" : "0", "top": "-950"})
    }
    else{
        $(".col-lg-4").css({"position" : "relative", "top" : "auto"})
    }
}

//----------------------------------- explore ---------------------------------------------
var ex_search = $(".explore-search i")
icons(ex_search)

var exploreIcons = $(".explore .middle-content i")
icons(exploreIcons)



var notifications = $(".top-icn")
icons(notifications)

// ------------------------ communities ------------------------------------------

$(".carousel-inner, .carousel-inner ul li, .caro").hover(function () {

    $(".carousel-inner .icn").show()
})
$(".carousel-inner").mouseout(function () {
    $(".carousel-inner .icn").hide()
})

