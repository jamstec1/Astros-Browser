let leftacsses = 1;
let rightacsses = 0;
let leftname = "browser";
let rightname = "blank";
var script;

function app(appname) {
  alert(appname);
  switch (appname) {
    case "browser":
      alert(document.getElementById('script'))
      
      var script = document.createElement('script'); //変数名は適当なものにでも
      script.src = "/src/browser/browser.js"; //ファイルパス
      document.head.appendChild(script);
      
      let response = fetch("./src/browser/browser.html")
      .then(response => response.text())
      .then(data => {
        if (leftacsses === "0"){
          document.getElementById('leftwindow').innerHTML = data
          leftacsses++;
          leftname = "browser";
          alert(leftacsses + "leftacsses");
        }else {
          document.getElementById('rightwindow').innerHTML = data
          rightacsses++;
          rightname = "browser";
          alert(rightacsses + "rightacsses")
        }})
      break;
  }
}

function closewindow(closeapp) {
  switch(closeapp) {
    case "browser":
      if
      document.removeChild(script);
      document.getElementById("browser").remove();
      if (leftname === "browser") {
        leftname = "blank";
        leftacsses = "0";
        alert(leftname　+ "leftname");
        alert(leftacsses + "leftacsses");
      } else if (rightname === "browser"){
        rightname = "blank";
        rightacsses = "0";
        alert(rightname + "rightname");
        alert(rightacsses + "rightacsses");
      }
      break;
  }
}