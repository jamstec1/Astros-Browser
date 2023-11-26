function app(appname) {
  var data;
  alert(appname);
  switch (appname) {
    case "browser":
      let response = fetch("./src/browser/browser.html")
      .then(data => data.text())
      alert(data)
      .then(html => document.getElementById('rightwindow').innerHTML = html)
      break;
  }
}