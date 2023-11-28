let urlbar = document.getElementById("urlbar");
let linkbar = "0";
let searchtype = "google";

let number = 0;
let foremost = 0;
var urls = ["https://www.8bitdash.com"];
var URL = 0;

alert("input")
function fullscreen() {
  document.documentElement.requestFullscreen();
} // 全画面モードにする


urlbar.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    linkbar = document.getElementById("urlbar").value;
    if (linkbar) {
      if (linkbar.indexOf(".") === -1) {
        switch (searchtype) {
          case "google":
            console.log("google");
            URL =
              "https://www.google.com/search?q=" +
              linkbar +
              "&sca_esv=583768629&igu=1";
            break;
          case "bing":
            console.log("bing");
            URL = "https://www.bing.com/search?q=" + linkbar;
            break;
        }
      } else {
        if (linkbar.indexOf("https://") === -1) {
          URL = "https://" + linkbar;
        } else {
          URL = linkbar;
        }
      }
      if (number === foremost) {
        if (URL !== urls[foremost]) {
          number++;
          foremost++;
          urls.push(URL);
        }
        console.log(urls);
        console.log(number);
        console.log(foremost);
        document.getElementById("urlbar").value = URL;
        document.getElementById("ub").src = URL;
      } else {
        if (URL !== urls[foremost]) {
          //
          foremost++;
          urls.push(URL);
        }
        number = foremost;
        console.log(urls);
        console.log(number);
        console.log(foremost);
        document.getElementById("urlbar").value = URL;
        document.getElementById("ub").src = URL;
      }
    }
  }
});

function link(URL) {
  //クリック時
  if (number === foremost) {
    //最先端か確認
    if (URL !== urls[foremost]) {
      number++;
      foremost++;
      urls.push(URL);
    }
    console.log(number);
    console.log(foremost);
    document.getElementById("urlbar").value = URL;
    document.getElementById("ub").src = URL;
  } else {
    if (URL !== urls[foremost]) {
      //最先端か確認
      foremost++; //重複リンクは表示しない
      urls.push(URL);
    }
    number = foremost; //最先端の位置に設定
    console.log(urls);
    console.log(number);
    console.log(foremost);
    console.log("ok");
    document.getElementById("urlbar").value = URL;
    document.getElementById("ub").src = URL;
  }
}

function go() {
  //前
  if (number < foremost) {
    number++;
    URL = urls[number];
    console.log(number);
    console.log(foremost);
    document.getElementById("urlbar").value = URL;
    document.getElementById("ub").src = URL;
  }
}

function back() {
  //戻る
  if (number > 0) {
    number--;
    URL = urls[number];
    console.log(number);
    console.log(foremost);
    document.getElementById("urlbar").value = URL;
    document.getElementById("ub").src = URL;
  }
}

function history() {
  alert(urls);
}

function reload() {
  if (foremost > "0") {
    URL = urls[number];
    console.log(number);
    console.log(foremost);
    document.getElementById("ub").src = URL;
  }
}