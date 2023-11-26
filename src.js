let leftacsses = 1;
let rightacsses = 0;
let leftname = "browser";
let rightname = "blank";

function app(appname) {
  alert(appname);
  switch (appname) {
    case "browser":
      let response = fetch("./src/browser/browser.html")
      .then(response => response.text())
      .then(data => {
        console.log(data)
        if (leftacsses === 0){
          document.getElementById('leftwindow').innerHTML = data
          leftacsses++;
          alert(leftacsses);
        }else {
          document.getElementById('rightwindow').innerHTML = data
          rightacsses++;
        }})
      break;
  }
}

function closewindow(closeapp) {
  switch(closeapp) {
    case "browser":
      document.getElementById("browser").remove();
      if (leftname === "browser") {
        leftname = "blank";
        leftacsses = "0"
      } else if (rightname === "browser"){
        rightname = "blank";
        rightacsses = "0";
      }
      break;
  }
}