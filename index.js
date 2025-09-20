import { Menu_show } from "./00_menu.js";

// 画面の横幅と縦幅を取得
const screenWidth = window.innerWidth;

//画面が小さいときは、ズームの初期値を変更する。
if (screenWidth < 768) {
  document.getElementById("zoom").value = parseInt((screenWidth / 768) * 100);
}

//ズーム設定
document.body.style.zoom = document.getElementById("zoom").value / 125;
document.getElementById("zoom").addEventListener("change", () => {
  document.body.style.zoom = document.getElementById("zoom").value / 125;
});

document.getElementById("print").addEventListener("click", () => {
  const tmp = document.getElementById("zoom").value;
  // 一時的にズームをA4印刷用にする。
  document.body.style.zoom = 1 / 1.25;
  window.print();
  // ズームをもとに戻す
  document.getElementById("zoom").value = tmp;
  document.body.style.zoom = document.getElementById("zoom").value / 125;
});

Menu_show();
showTime();

// 初回アラート制御
function showInitialAlert() {
  try {
    const alertData = localStorage.getItem('jimipri-initial-alert');
    if (!alertData) {
      alert("スマホで印刷するときは、印刷前に倍率を100％に設定するか、ブラウザメニューから「PC版サイト」にチェックを入れるとうまく印刷できます。");
      localStorage.setItem('jimipri-initial-alert', JSON.stringify({
        shown: true,
        timestamp: new Date().getTime()
      }));
    } else {
      const data = JSON.parse(alertData);
      const now = new Date().getTime();
      const oneDayMs = 24 * 60 * 60 * 1000;

      // 1日経過したらリセット
      if (now - data.timestamp > oneDayMs) {
        localStorage.removeItem('jimipri-initial-alert');
        showInitialAlert(); // 再帰呼び出し
      }
    }
  } catch (error) {
    // エラー時は表示しない
    console.warn('Alert check failed:', error);
  }
}

showInitialAlert();

//時刻設定
function showTime() {
  const now = new Date();
  const nowYear = now.getYear() + 1900;
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();
  document.getElementById("dateArea").innerHTML = `${nowYear}/${nowMonth}/${nowDate}`;
}
