import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";
export function step33() {
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
    let a, b, c, d, e, f, g, textA, textB, textC, textD, textE;
    //ここに式を記述する。
    const textContainer = document.createElement("div");
    a = Math.floor(Math.random() * 4 + 5);
    b = Math.floor(Math.random() * 4 + 4);
    if (a === b) b = b + 1;
    c = Math.floor(Math.random() * 4 + 5);
    d = Math.floor(Math.random() * 4 + 4);
    if (c === d) d = d + 1;
    e = Math.floor(Math.random() * 20 + 11);
    f = Math.floor(Math.random() * 20 + 11);
    g = Math.floor(Math.random() * 20 + 11);
    textA = `
    Aのみかんは${a}こで480円、Bのみかんは${b}こで360円です。</br>
    　１こあたりのねだんが高いのはどちらのみかんですか。</br>
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `;
    const perA = 240 / a;
    const perB = 200 / b;
    if (perA > perB) {
      answer_array[0] = "Aのみかん";
    } else if (perA < perB) {
      answer_array[0] = "Bのみかん";
    } else {
      answer_array[0] = "同じ";
    }
    textB = `
    Cさんは240ページの本を${a}日で読み、</br>
    　Dさんは200ページの本を${b}日で読みました。</br>
    　１日あたりの読んだページ数が多いのはどちらですか。</br>
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `;
    const perC = 240 / c;
    const perD = 200 / d;
    if (perC > perD) {
      answer_array[1] = "Cさん";
    } else if (perC < perD) {
      answer_array[1] = "Dさん";
    } else {
      answer_array[1] = "同じ";
    }
    textC = `
    E町の面積は 120 ㎢で、人口は ${e * 1200}人います。</br>
    　この町の人口密度を（四捨五入して、整数で）求めなさい。 
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `;
    const perE = Math.floor((e * 1200) / 120);
    answer_array[2] = perE + "人";

    textD = `
    花だんに、１㎡あたり12個の球根を植えます。</br>
    　${f}㎡の花だんでは、球根は何個植えられますか。
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `;
    answer_array[3] = f * 12 + "個";
    
    textE = `
    １Lのガソリンで18km走る車があります。</br>
    　この車が${18 * g}km走るには、何Lのガソリンが必要ですか。
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `;
    answer_array[4] = g + "L";

    textContainer.innerHTML = `
    <h5 style="width:18cm;">①　${textA}</h5>
    <br/>
    <h5 style="width:18cm;">②　${textB}</h5>
    <br/>
    <h5 style="width:18cm;">③　${textC}</h5>
    <br/>
    <h5 style="width:18cm;">④　${textD}</h5>
    <br/>
    <h5 style="width:18cm;">⑤　${textE}</h5>
    <br/>
    `;
    TBL.appendChild(textContainer);
    answerCreate(answer_array);
  }

  question_create();
}
