import * as se from "./se.js";
import { createGraphPaper } from "./createGraphPaper.js";

export function step39() {
  const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const TBL = document.getElementById("TBL");

  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());
  //問題作成の関数
  function question_create() {
    TBL.innerHTML = "";
    const answer_array = []; //答えを格納する
    se.set.currentTime = 0;
    se.set.play();
    let a, b, c, d, e, textA, textB, textC, textD, textE;
    for (let i = 0; i < 6; i++) {
      //ここに式を記述する。
      const textContainer = document.createElement("div");
      a = Math.floor(Math.random() * 8 + 2);
      b = Math.floor(Math.random() * 4 + 2);
      c = Math.floor(Math.random() * 8 + 2);
      d = Math.floor(Math.random() * 8 + 2);
      e = Math.floor(Math.random() * 8 + 2);
      textA = `底辺が ${a}cm の三角形の高さ x (cm)と面積 y (㎠)`;
      textB = `面積が ${b * 6}(㎠) の平行四辺形の底辺x(cm)と高さ y (cm)`;
      textC = `1mあたり${c * 20}円のリボンの長さ x (m)と代金 y (円)`;
      textD = `${d * 6}kmの道のりを移動するときの、時速 x (km)で y (時間)`;
      textE = `${e * 2}cm のろうそくに火をつけたときの、時間 x (分)と長さ y (cm)`;
      const TEXT = [textA, textB, textC, textD, textE];
      const ANSWER = [`○,${a / 2}×x=y`, `△,x×y=${b * 6}`, `○,${c * 20}*x=y`,`×,x-y=${e*2}`];
      switch (i) {
        case 0:
          const order = shuffleOrder();
          textContainer.innerHTML = `
          <h5>☆　比例…〇、反比例…△、どちらでもない…×の記号をつけましょう。</h5>
          <h5>　比例または反比例するとき、x と y の関係を式で表しましょう。</h5>
          <h5>①　${TEXT[order[0]]}</h5>
          <h5> 　　記号（　　　），　x と y の関係式（　　　　　　　　　　） </h5>
          <h5>②　${TEXT[order[1]]}</h5>
          <h5> 　　記号（　　　），　x と y の関係式（　　　　　　　　　　） </h5>
          <h5>③　${TEXT[order[2]]}</h5>
          <h5> 　　記号（　　　），　x と y の関係式（　　　　　　　　　　） </h5>
          `;
          answer_array[i] = `${a * b * 10}km`;
          break;
      }
      textContainer.innerHTML = `
      ${textContainer.innerHTML}
      <h5>　式</h5>
      <h5 style="text-align:right">答え（　　　　　　　　）</h5>
      </div>`;
      TBL.appendChild(textContainer);
    }
    // グリッド用紙の生成
    const gridContainer = createGraphPaper(15, 20, 300, 400);
    TBL.appendChild(gridContainer);

    // answerCreate(answer_array);
  }
  question_create();
}

function createTable(xText, yText, variable) {
  const xTextContent = [xText, 1, 2, 3, 4, 5, "…"];
  const yTextContent = [yText, null, null, null, null, null, "…"];
  const TABLE = document.createElement("table");
  for (let i = 0; i < 2; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const td = document.createElement("td");
      if (i === 0) {
        td.innerHTML = xTextContent[j];
      } else if (i === 1) {
        td.innerHTML = yTextContent[j];
      }
      td.style.border = "solid 1px black";
      td.style.textAlign = "center";
      td.style.width = "100px";
      tr.appendChild(td);
    }
    TABLE.appendChild(tr);
  }
  return TABLE;
}
function shuffleOrder() {
  const order = [];
  let num = [0, 1, 2, 3, 4];
  for (let i = 0; i < 5; i++) {
    order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
  }
  return order;
}
