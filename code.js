var fullscreen = false;
var h_board = "";

var link = document.createElement( "link" );
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );

function init(){

    var main = document.getElementById("ghx-quick-filters").childNodes[0];
    if(main === null || main == undefined ){
        ms = 500
        console.log("JIRA FULLSCREEN : Not loaded yet, trying in "+ms+" mileseconds");
        setTimeout(init,ms);
    }else{
        h_board = document.getElementById("ghx-work").style.height;
        var button_fs = document.createElement("BUTTON"); 
        button_fs.innerHTML = '<span class="material-icons">settings_overscan</span>';
        button_fs.setAttribute("id", "button_fs");
        button_fs.setAttribute("class", "aui-button aui-button-primary");
        button_fs.setAttribute("title", "Fullscreen");
        main.insertBefore(button_fs,main.childNodes[0]);
        document.getElementById("button_fs").addEventListener("click", toogle_fs);
        document.getElementById("button_fs").style.marginRight = "10px";
    }
}

function toogle_fs(){
    if(fullscreen){
        document.getElementById("ghx-header").style.display = "";
        document.getElementById("navigation-app").style.display = "";
        document.getElementById("content").style.margin = "";
        document.getElementById("content").style.borderTop = "";
        document.getElementById("ghx-quick-filters").style.marginBottom = "";
        document.getElementById("ghx-work").style.height = h_board;
        button_fs.innerHTML = '<span class="material-icons">settings_overscan</span>';
        
        fullscreen = false
    }else{
        document.getElementById("ghx-header").style.display = "none";
        document.getElementById("navigation-app").style.display = "none";
        document.getElementById("content").style.margin = "2px";
        document.getElementById("content").style.borderTop = "2px";
        document.getElementById("ghx-quick-filters").style.marginBottom = "0px";
        document.getElementById("ghx-work").style.height = window.innerHeight + "px";
        button_fs.innerHTML = '<span class="material-icons">cancel_presentation</span>';
        fullscreen = true;
    }
}

init();
