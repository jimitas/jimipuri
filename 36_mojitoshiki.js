import * as se from "./se.js";
import { answerCreate } from "./answerCreate.js";

export function step36() {
  const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const TBL = document.getElementById("TBL");
  TBL.style.lineHeight = "1.7"; // 各行の行間を広げる
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
    const text_1 = `(１)  １辺の長さが xcmの、${Angle[numberOfAngles - 3]}があります。`;
    const quest_1 = document.createElement("div");
    quest_1.innerHTML = `　①　周りの長さを ycm として、xとyの関係を式に表しましょう。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`;
    answer_array[0] = `x×${numberOfAngles}＝y`;

    const quest_2 = document.createElement("div");
    const initialValue = 3;
    quest_2.innerHTML = `　②　xの値を3,4,5,6,…としたとき、<br>
                         　　　それぞれに対応するyの値を求めて、表にかきましょう。`;
    answer_array[1] = `${numberOfAngles * 3},${numberOfAngles * 4},${numberOfAngles * 5},${numberOfAngles * 6}`;

    const quest_3 = document.createElement("div");
    quest_3.innerHTML = `　③　yの値が${numberOfAngles * num}となるxの値を求めましょう。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）<br><br>`;
    answer_array[2] = `x=${num}`;

    generateTable(text_1, initialValue, (j) => j * numberOfAngles, quest_1, quest_2, quest_3);

    // Call the function to generate the first table
    const teihen = Math.floor(Math.random() * 4 + 2) * 2;
    const num2 = Math.floor(Math.random() * 4 + 10);

    const text_4 = `(２)  底辺の長さが ${teihen}cmの三角形があります。`;
    const quest_4 = document.createElement("div");
    quest_4.innerHTML = `　④　高さを xcm 、面積をy㎠として、xとyの関係を式に表しましょう。<br>
                  　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`;
    answer_array[3] = `${teihen}×x÷2＝y`;

    const quest_5 = document.createElement("div");
    const initialValue2 = 7;
    quest_5.innerHTML = `　⑤　xの値を7,8,9,10,…としたとき、<br>
                     　　　それぞれに対応するyの値を求めて、表にかきましょう。`;
    answer_array[4] = `${(teihen * 7) / 2},${(teihen * 8) / 2},${(teihen * 9) / 2},${(teihen * 10) / 2},`;

    const quest_6 = document.createElement("div");
    quest_6.innerHTML = `　⑥　yの値が${(teihen * num2) / 2}となるxの値を求めましょう。<br>
                  　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）<br><br>`;
    answer_array[5] = `x=${num2}`;

    generateTable(text_4, initialValue2, (j) => (j * teihen) / 2, quest_4, quest_5, quest_6);

    // 文字式を答えるための問題
    const textContainer = document.createElement("div");
    const num3 = Math.floor(Math.random() * 4 + 4);
    const initialValue3 = Math.floor(Math.random() * 4 + 2) * 100;

    const textA = `水がxmL入った水そうに${initialValue3}mLの水を${num3}回入れたときの全体の水の量<br>
                    　　　　　　　　　　　　　　　　　　　式（　　　　　　　　　　　　　）<br>`;
    const textB = `重さxgのボール${num3}個を${initialValue3}gの箱に入れたときの全体の重さ<br>
                    　　　　　　　　　　　　　　　　　　　式（　　　　　　　　　　　　　）<br>`;
    const textC = `x円のクッキー１まいと、${initialValue3}円のケーキ１こを組にして${num3}組買ったときの代金<br>
                    　　　　　　　　　　　　　　　　　　　式（　　　　　　　　　　　　　）<br>`;
    const TEXT = [textA, textB, textC];
    const ANSWER = [`x+${initialValue3}×${num3}`, `x×${num3}+${initialValue3}`, `(x+${initialValue3})×${num3}`];
    const order = shuffleOrder();
    textContainer.innerHTML = `
    <div>(３)　次のことがらを式であらわしましょう。
    <div>　⑦ ${TEXT[order[0]]}</div>
    <div>　⑧ ${TEXT[order[1]]}</div>
    <div>　⑨ ${TEXT[order[2]]}</div>
    `;


    answer_array[6] = ANSWER[order[0]];
    answer_array[7] = ANSWER[order[1]];
    answer_array[8] = ANSWER[order[2]];

    TBL.appendChild(textContainer);
    answerCreate(answer_array);
  }

  function generateTable(text, initialValue, formula, q_1, q_2, q_3) {
    // 問題設定の作成
    const textContainer = document.createElement("div");
    textContainer.innerHTML = text;
    TBL.appendChild(textContainer);

    // 小問の作成
    TBL.appendChild(q_1);
    TBL.appendChild(q_2);

    // 小問２に関する表の作成
    const table = document.createElement("table");
    table.style.marginLeft = "50px";
    for (let i = 0; i < 2; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < 6; j++) {
        const td = document.createElement("td");
        td.classList = "graphTd";
        if (i === 0 && j === 0) {
          td.innerText = "x(cm)";
          td.style.width = "100px";
        }
        if (i === 1 && j === 0) td.innerText = "y(cm)";
        if (i === 0 && j !== 0) td.innerText = j + initialValue - 1;
        if (j === 5) td.innerText = "…";

        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    TBL.appendChild(table);

    TBL.appendChild(q_3);
  }

  function shuffleOrder() {
    const order = [];
    let num = [0, 1, 2];
    for (let i = 0; i < 3; i++) {
      order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
    }
    return order;
  }
}
