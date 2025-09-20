import * as se from "./se.js";
import { answerCreate } from "./answerCreate.js";

export function step39() {
  const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const TBL = document.getElementById("TBL");
  TBL.style.lineHeight = "1.6"; // 各行の行間を1.6倍に広げる
  TBL.style.fontSize = "18px"; 

  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());

  question_create();

  // 問題作成の関数
  function question_create() {
    TBL.innerHTML = "";
    const answer_array = []; //答えを格納する
    se.set.currentTime = 0;
    se.set.play();

    // Call the function to generate the first table
    const numberOfAngles = Math.floor(Math.random() * 4 + 3);
    const num = Math.floor(Math.random() * 4 + 6);
    const Angle = ["正三角形", "正方形", "正五角形", "正六角形"];
    const text_1 = `(１)  次の表は、${Angle[numberOfAngles - 3]}で、１辺の長さをいろいろに変えたときの、<br>
                    1辺の長さ xcm と、周りの長さ y cm の関係を表したものです。`;

    const quest_1 = document.createElement("div");
    quest_1.innerHTML = `　①　1辺の長さ xcm と周りの長さ ycm は比例しますか、反比例しますか？<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`;
    answer_array[0] = "比例する";

    const quest_2 = document.createElement("div");
    quest_2.innerHTML = `　②　x と y の関係を式に表しましょう。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`;
    answer_array[1] = `y=${numberOfAngles}×x<br>　　(x×${numberOfAngles}＝y)`;

    const quest_3 = document.createElement("div");
    quest_3.innerHTML = `　③　1辺の長さが${num}cmのとき、周りの長さは、何cmになりますか。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）<br><br>`;
    answer_array[2] = `${numberOfAngles * num}cm`;

    generateTable(text_1, (j) => j * numberOfAngles, quest_1, quest_2, quest_3);

    // Call the function to generate the second table
    const areaOfTriangle = Math.floor(Math.random() * 4 + 1) * 18;
    const teihen = Math.floor(Math.random() * 3 + 1) * 6;
    const text_2 = `(2)  次の表は、面積が決まっている三角形で、底辺の長さをいろいろに<br>　　変えたときの
                    底辺の長さ xcm と、高さ y cm の関係を表したものです。`;

    const quest_4 = document.createElement("div");
    quest_4.innerHTML = `　④　底辺の長さ xcm と高さ ycm は比例しますか、反比例しますか？<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`;
    answer_array[3] = "反比例する";

    const quest_5 = document.createElement("div");
    quest_5.innerHTML = `　⑤　x と y の関係を式に表しましょう。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`;
    answer_array[4] = `y=${areaOfTriangle}÷x <br>　　(x×y=${areaOfTriangle})`;

    const quest_6 = document.createElement("div");
    quest_6.innerHTML = `　⑥　底辺の長さが${teihen}cmのとき、高さは、何cmになりますか。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）<br><br>`;
    answer_array[5] = `${areaOfTriangle / teihen}cm`;
    generateTable(text_2, (j) => areaOfTriangle / j, quest_4, quest_5, quest_6);

    // 比例するかどうかを問う問題
    const textContainer = document.createElement("div");
    const a = Math.floor(Math.random() * 8 + 2);
    const b = Math.floor(Math.random() * 4 + 2);
    const c = Math.floor(Math.random() * 8 + 2);
    const d = Math.floor(Math.random() * 8 + 2);
    const e = Math.floor(Math.random() * 8 + 2);
    const textA = `底辺が ${a}cm の三角形の高さ x (cm)と面積 y (㎠)`;
    const textB = `面積が ${b * 6}(㎠) の平行四辺形の底辺x(cm)と高さ y (cm)`;
    const textC = `1mあたり${c * 20}円のリボンの長さ x (m)と代金 y (円)`;
    const textD = `${d * 6}kmの道のりを移動するときの、時速 x (km)と y (時間)`;
    const textE = `${e * 2}cm のろうそくに火をつけたときの、時間 x (分)と長さ y (cm)`;
    const TEXT = [textA, textB, textC, textD, textE];
    const ANSWER = ["○", "△", "○", "△", "×"];

    const order = shuffleOrder();
    textContainer.innerHTML = `
    <div>(３)　比例…〇、反比例…△、どちらでもない…×の記号をつけましょう。</div>
    <div>　⑦（　　）${TEXT[order[0]]}</div>
    <div>　⑧（　　）${TEXT[order[1]]}</div>
    <div>　⑨（　　）${TEXT[order[2]]}</div>
    <div>　⑩（　　）${TEXT[order[3]]}</div>
    `;

    answer_array[6] = ANSWER[order[0]];
    answer_array[7] = ANSWER[order[1]];
    answer_array[8] = ANSWER[order[2]];
    answer_array[9] = ANSWER[order[3]];

    TBL.appendChild(textContainer);
    answerCreate(answer_array);
  }

  function generateTable(text, formula, q_1, q_2, q_3) {
    // 問題設定の作成
    const textContainer = document.createElement("div");
    textContainer.innerHTML = text;
    TBL.appendChild(textContainer);

    // 問題に関する表の作成
    const table = document.createElement("table");
    table.style.marginLeft = "50px";
    for (let i = 0; i < 2; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        const td = document.createElement("td");
        td.classList = "graphTd";
        if (i === 0 && j === 0) {
          td.innerText = "x(cm)";
          td.style.width = "100px";
        }
        if (i === 1 && j === 0) td.innerText = "y(cm)";
        if (i === 0 && j !== 0) td.innerText = j;
        if (i === 1 && j !== 0) td.innerText = formula(j);
        if (j === 6) td.innerText = "…";

        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    TBL.appendChild(table);

    // 小問の作成
    TBL.appendChild(q_1);
    TBL.appendChild(q_2);
    TBL.appendChild(q_3);
  }

  function shuffleOrder() {
    const order = [];
    let num = [0, 1, 2, 3, 4];
    for (let i = 0; i < 5; i++) {
      order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
    }
    return order;
  }
}
