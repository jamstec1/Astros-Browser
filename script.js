let urlbar = document.getElementById("urlbar");
let linkbar = "0";
let searchtype = "google";

let number = 0;
let foremost = 0;
var urls = ["https://www.8bitdash.com"];
var URL = 0;

var dragging = false;
var iframe = document.getElementById("ub");
var windows = document.getElementById("window");
const stylewindow = getComputedStyle(windows);
var ewidth = 0;

function fullscreen() {
  document.documentElement.requestFullscreen();
} // 全画面モードにする

function info() {
  alert(
    "PRODUCTION(制作):Jamstec/Hayatos/xxx\nUPDATELOG:1.0-作成 1.01-難読化 1.1-プルタブ追加\n1.11-UI調整 1.12-UI自動最適化仮実装 1.13-リンク追加\n1.14-微調整 1.15-リリース 1.16-info及びリンク追加\n1.17-新しいタブ試験実装　1.18-タブ数6→8 1.19-ページ操作\n1.20-自由リンク 1.2i-アイコン追加 1.22-URLバー,リロード追加"
  );
}

function help() {
  alert(
    "無限の可能性を秘めているproxy\njavascriptを有効にしてください。\npcサイズの画面で正常に機能します。"
  );
}

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

$(function () {
  $('input[type="text"]').focus(function () {
    $(this).select();
  });
});

$("#dragbar").mousedown(function (e) {
  e.preventDefault();
  iframe.style.pointerEvents = "none";

  dragging = true;
  var main = $("#main");

  $(document).mousemove(function (e) {
    if (dragging) {
      windows.onmousemove = function (e) {
        var target_rect = e.currentTarget.getBoundingClientRect();
        ewidth = e.clientX - target_rect.left;
      };
      var percentage = (ewidth / stylewindow.width.replace( "px" , "" )) * 100;
      if (percentage < 20) {
        percentage = "20";
      } else if (percentage > 80) {
        percentage = "80";
      }
      var mainPercentage = 100 - percentage;

      //("left:" + percentage + " right:" + mainPercentage);
      $("#leftwindow").css("width", percentage + "%");
      $("#rightwindow").css("width", mainPercentage + "%");
    }
  });
});

$(document).mouseup(function (e) {
  if (dragging) {
    $(document).unbind("mousemove");
    iframe.style.pointerEvents = "all";
    dragging = false;
  }
});

var xhr = new XMLHttpRequest();
var openname;
var data;
function app(appname) {
  
  openname = appname
  
  fetch('/text/test.json') // (1) リクエスト送信
	.then(response => response.json()) // (2) レスポンスデータを取得
	.then(data => {}}
        
window.onload = function onLoad() {
  xhr.open('GET', './src/browser/browser.html', false);// GETでローカルファイルを開く
  xhr.onload = () => {
              data = xhr.responseText;
          };
  xhr.onerror = () => {
             console.log("error!");
          };
  
  xhr.send();
  alert(data)
}