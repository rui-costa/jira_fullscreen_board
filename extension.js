
fetch("https://raw.githubusercontent.com/rui-costa/jira_fullscreen_board/master/code.js")
  .then(response => response.text())
  .then(script_txt => {
    var script = document.createElement('SCRIPT');
    script.type = "text/javascript"
    script.text = script_txt
    document.body.appendChild(script)
    console.log("JIRA FULLSCREEN BOARD : Script loaded from github")
  }
   );

//script.src = "";
//document.body.appendChild(script);