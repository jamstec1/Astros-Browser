export const app = function(appname) {
  alert(appname);
  switch (appname) {
    case "app":
      alert("appです")
      break;
    case "browser":
      let response = fetch("./browser/browser.html")
      .then(data => data.text())
      .then(html => document.getElementById('').innerHTML = html)
      .then(data =>{});
      break;
  }
}