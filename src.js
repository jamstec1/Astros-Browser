let leftacsses = 1;
let rightacsses = 0;

function app(appname) {
  alert(appname);
  switch (appname) {
    case "browser":
      let response = fetch("./src/browser/browser.html")
      .then(response => response.text())
      .then(data => {
        console.log(data)
        if (leftacsses === 0){
          
        }else {
        document.getElementById('rightwindow').innerHTML = data}})
      break;
  }
}