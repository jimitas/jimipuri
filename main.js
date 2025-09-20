function k(c,i){let l=!1;for(let s=0;s<i.length;s++)i[s]===c&&(l=!0);return!l}new Audio("./Sounds/pi.mp3");const p=new Audio("./Sounds/set.mp3");new Audio("./Sounds/reset.mp3");new Audio("./Sounds/right.mp3");new Audio("./Sounds/move1.mp3");new Audio("./Sounds/move2.mp3");new Audio("./Sounds/kako.mp3");function _e(){const c=["dog","duck","frog","horse","monkey","mouse"];let i=[0,1,2,3,4,5];TBL.innerHTML=`
  <div class="h1">なんばんめですか。</div>
  <div class="h4 px-5 py-3" style="display:flex;border:solid 1px black;">
    <div class="pt-4">ひだり</div>
    <div id="imagePlace"></div>
    <div class="pt-4">みぎ　</div>
  </div>
  <div>
    <div class="h4">
      ①　<img id="img_1" src="./Images/dog.png" class="animal"/>は、ひだりから<input class="input-box mt-2"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ②　<img id="img_2" src="./Images/dog.png"/ class="animal"/>は、みぎから<input class="input-box mt-2"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ③　<img id="img_3" src="./Images/dog.png"/ class="animal"/>は、<br/>
      　　ひだりから<input class="input-box mt-1"/>ばんめ、
      みぎから<input class="input-box mt-1"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ④　<img id="img_4" src="./Images/dog.png"/ class="animal"/>は、<br/>
      　　ひだりから<input class="input-box mt-1"/>ばんめ、
      みぎから<input class="input-box mt-1"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ⑤　<img id="img_5" src="./Images/dog.png"/ class="animal"/>は、<br/>
      　　ひだりから<input class="input-box mt-1"/>ばんめ、
      みぎから<input class="input-box mt-1"/>ばんめ
    </div>
  </div>
  `,l(),question.addEventListener("click",()=>l());function l(){s();const t=[],e=[];p.currentTime=0,p.play();let o;for(;e.length<5;){o=Math.floor(Math.random()*6+1);const r=o;k(r,e)&&(e.push(r),t.push(o))}console.log(c),console.log("order="+i),console.log("answer="+t),document.getElementById("img_1").src=`./Images/${c[i[t[0]-1]]}.png`,document.getElementById("img_2").src=`./Images/${c[i[t[1]-1]]}.png`,document.getElementById("img_3").src=`./Images/${c[i[t[2]-1]]}.png`,document.getElementById("img_4").src=`./Images/${c[i[t[3]-1]]}.png`,document.getElementById("img_5").src=`./Images/${c[i[t[4]-1]]}.png`;const a=document.getElementById("answer-area");a.innerHTML=`
    ①　ひだりから${t[0]}ばんめ　
    ②　みぎから${7-t[1]}ばんめ　
    ③　ひだりから${t[2]}ばんめ
    、みぎから${7-t[2]}ばんめ
    <br/>
    ④　ひだりから${t[3]}ばんめ
     、みぎから${7-t[3]}ばんめ　
    ⑤　ひだりから${t[4]}ばんめ
     、みぎから${7-t[4]}ばんめ
    `}function s(){i=[];let t=[0,1,2,3,4,5];for(let e=0;e<6;e++)i.push(...t.splice(Math.floor(Math.random()*t.length-1),1));n()}function n(){const t=document.getElementById("imagePlace");t.innerHTML="";for(let e=0;e<c.length;e++){const o=document.createElement("img");o.setAttribute("src",`./Images/${c[i[e]]}.png`),o.setAttribute("class","animal"),t.appendChild(o)}}}function E(c){c.length>1?select.style.backgroundColor="pink":select.style.backgroundColor="none";for(let i=0;i<c.length;i++){const l=document.createElement("option");l.value=i,l.textContent=c[i],select.appendChild(l)}}const ge=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮","⑯","⑰","⑱","⑲","⑳"];function C(c,i,l){const s=document.getElementById("TBL");s.innerHTML="";for(let n=0;n<10;n++){const t=document.createElement("tr");for(let e=0;e<10;e++){const o=document.createElement("td");o.classList.add("td_oneLine"),t.appendChild(o)}s.appendChild(t)}for(let n=0;n<10;n++)for(let t=0;t<2;t++)s.rows[n].cells[t*5].innerHTML=ge[t*10+n],s.rows[n].cells[t*5+1].innerHTML=c[t*10+n],s.rows[n].cells[t*5+2].innerHTML=i,s.rows[n].cells[t*5+3].innerHTML=l[t*10+n],s.rows[n].cells[t*5+4].innerHTML="="}function ke(c,i,l,s,n){const t=document.getElementById("TBL");t.innerHTML="";for(let e=0;e<10;e++){const o=document.createElement("tr");for(let a=0;a<7;a++){const r=document.createElement("td");r.classList.add("td_oneLine_3formura"),o.appendChild(r)}t.appendChild(o)}for(let e=0;e<10;e++)for(let o=0;o<1;o++)t.rows[e].cells[o*5].innerHTML=ge[o*10+e],t.rows[e].cells[o*5+1].innerHTML=c[o*10+e],t.rows[e].cells[o*5+2].innerHTML=i[o*10+e],t.rows[e].cells[o*5+3].innerHTML=l[o*10+e],t.rows[e].cells[o*5+4].innerHTML=s[o*10+e],t.rows[e].cells[o*5+5].innerHTML=n[o*10+e],t.rows[e].cells[o*5+6].innerHTML="="}const Te=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮","⑯","⑰","⑱","⑲","⑳"];function $(c){const i=document.getElementById("answer-area");i.innerHTML="";for(let l=0;l<c.length;l++){const s=document.createElement("div"),t=100/Math.floor(c.length/2+.5);s.style.width=t+"%",s.style.display="flex",s.innerHTML=`${Te[l]}　${c[l]}`,i.appendChild(s)}}const Ee=["10までのたしざん"],we="+",J=document.getElementById("select"),xe=document.getElementById("question");function Ce(){E(Ee),c(),J.addEventListener("change",()=>{J.value,c()}),xe.addEventListener("click",()=>c());function c(){const i=[],l=[],s=[],n=[];p.currentTime=0,p.play();let t,e,o;for(;n.length<20;){o=Math.floor(Math.random()*9+2),t=Math.floor(Math.random()*(o-1)+1),e=o-t;const a=+(t*100+e);k(a,n)&&(n.push(a),i.push(t),l.push(e),s.push(o))}C(i,we,l),$(s)}}const Be=["10までのひきざん"],Ie="-",K=document.getElementById("select"),He=document.getElementById("question");function qe(){E(Be),c(),K.addEventListener("change",()=>{K.value,c()}),He.addEventListener("click",()=>c());function c(){const i=[],l=[],s=[],n=[];p.currentTime=0,p.play();let t,e,o;for(;n.length<20;){t=Math.floor(Math.random()*9+2),e=Math.floor(Math.random()*(t-1)+1),o=t-e;const a=+(t*100+e);k(a,n)&&(n.push(a),i.push(t),l.push(e),s.push(o))}C(i,Ie,l),$(s)}}function Ae(){TBL.innerHTML=`
  <div style="display: flex;justify-content:space-between;flex-wrap:wrap;">
    <div style="display:flex;font-size:20px;">
      <div>①</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  じ　　　　</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>②</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  じ　　　　</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>③</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  じ　　　　</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>④</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  じ　　　　</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>⑤</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  じ　　　　</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>⑥</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  じ　　　　</div>
      </div>
    </div>
  </div>
  `,document.getElementById("question").addEventListener("click",()=>c()),c();function c(){const a=[],r=[];let d,m,h,f,u=0;for(p.currentTime=0,p.play();r.length<6;){const M=document.getElementsByClassName("clock")[u],v=M.getContext("2d");d=Math.floor(Math.random()*12+1),m=Math.floor(Math.random()*2)*30,m===0?f=`${d}じ`:f=`${d}じはん（${d}じ${m}ふん)`;const b=+(d*100+m);k(b,r)&&(r.push(b),a.push(f),u++,h="",o(M,v,d,m,h))}$(a)}function i(a,r){a.beginPath(),a.moveTo(200,200),a.lineWidth=3,a.lineTo(200+130*Math.cos(Math.PI/180*(270+6*r)),200+130*Math.sin(Math.PI/180*(270+6*r))),a.strokeStyle="blue",a.stroke()}function l(a,r,d){a.beginPath(),a.moveTo(200,200),a.lineWidth=6,a.lineTo(200+100*Math.cos(Math.PI/180*(270+30*(r+d/60))),200+100*Math.sin(Math.PI/180*(270+30*(r+d/60)))),a.strokeStyle="red",a.stroke()}function s(a,r,d){i(a,d),l(a,r,d)}function n(a,r){a.font="30px 'ＭＳ ゴシック'",a.textAlign="center";const d=[260,305,325,310,265,200,140,95,75,95,135,200],m=[105,150,210,275,320,335,320,270,210,150,105,85],h=[200,280,340,360,340,280,200,120,60,40,60,120],f=[45,65,125,205,285,345,365,345,285,205,125,65];for(let u=0;u<=11;u++)a.fillText(u+1,d[u],m[u]);if(a.font="15px 'ＭＳ ゴシック'",r=="hint1")for(let u=0;u<=11;u++)a.fillText(u*5,h[u],f[u]);else if(r=="hint2")for(let u=0;u<60;u++)a.fillText(u,200+160*Math.cos(Math.PI/180*(270+u*6)),205+160*Math.sin(Math.PI/180*(270+u*6)));a.font="10px 'ＭＳ ゴシック'"}function t(a){for(let r=0;r<60;r++)a.beginPath(),a.moveTo(200+150*Math.cos(Math.PI/180*(270+r*6)),200+150*Math.sin(Math.PI/180*(270+r*6))),a.lineTo(200+145*Math.cos(Math.PI/180*(270+r*6)),200+145*Math.sin(Math.PI/180*(270+r*6))),a.lineWidth=1.5,a.strokeStyle="black",a.stroke();for(let r=0;r<12;r++)a.beginPath(),a.moveTo(200+150*Math.cos(Math.PI/180*(270+r*30)),200+150*Math.sin(Math.PI/180*(270+r*30))),a.lineTo(200+140*Math.cos(Math.PI/180*(270+r*30)),200+140*Math.sin(Math.PI/180*(270+r*30))),a.lineWidth=3,a.strokeStyle="black",a.stroke()}function e(a,r){r.clearRect(0,0,a.width,a.height),r.beginPath(),r.arc(200,200,150,0,Math.PI*2),r.lineWidth=1,r.strokeStyle="black",r.stroke()}function o(a,r,d,m,h){e(a,r),t(r),n(r,h),s(r,d,m)}}const Pe=["〇+〇+〇","〇―〇―〇","+と-のまじった"],Q=document.getElementById("select"),Ne=document.getElementById("question");function ze(){let c="0";E(Pe),i(),Q.addEventListener("change",()=>{c=Q.value,i()}),Ne.addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[],e=[],o=[],a=[];p.currentTime=0,p.play();let r,d,m,h,f,u;for(;a.length<10;){switch(c){case"0":r=Math.floor(Math.random()*9+1),d=Math.floor(Math.random()*9+1),m=Math.floor(Math.random()*Math.min(20-(r+d),9)+1),u=Math.floor(r+d+m),h="+",f="+";break;case"1":r=Math.floor(Math.random()*14+5),d=Math.floor(Math.random()*Math.min(r-2,9)+1),m=Math.floor(Math.random()*Math.min(r-d-1,9)+1),u=Math.floor(r-d-m),h="-",f="-";break;case"2":Math.floor(Math.random()*2+1)===1?(r=Math.floor(Math.random()*9+1),d=Math.floor(Math.random()*9+1),m=Math.floor(Math.random()*(r+d-1)+1),u=Math.floor(r+d-m),h="+",f="-"):(r=Math.floor(Math.random()*14+5),d=Math.floor(Math.random()*Math.min(r,9)+1),m=Math.floor(Math.random()*Math.min(20-(r-d),9)+1),u=Math.floor(r-d+m),h="-",f="+");break}const M=+(r*100+d*10+m);k(M,a)&&(a.push(M),l.push(r),n.push(d),e.push(m),s.push(h),t.push(f),o.push(u))}ke(l,s,n,t,e),$(o)}}const Se=["20までのたしざん"],We="+";function De(){E(Se),c(),select.addEventListener("change",()=>{select.value,c()}),document.getElementById("question").addEventListener("click",()=>c());function c(){const i=[],l=[],s=[],n=[];p.currentTime=0,p.play();let t,e,o;for(;n.length<20;){t=Math.floor(Math.random()*8+2),e=Math.floor(Math.random()*t+(8-t)+2),o=Math.floor(t+e);const a=+(t*100+e);k(a,n)&&(n.push(a),i.push(t),l.push(e),s.push(o))}C(i,We,l),$(s)}}const Fe=["くりさがり　あり","１□-□"],Oe="-",U=document.getElementById("select"),je=document.getElementById("question");function Re(){let c="0";E(Fe),i(),U.addEventListener("change",()=>{c=U.value,i()}),je.addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a;for(;t.length<20;){switch(c){case"0":e=Math.floor(Math.random()*9+11);const m=20-e;o=Math.floor(Math.random()*m+(10-m));break;case"1":e=Math.floor(Math.random()*9+11),o=Math.floor(Math.random()*(e-11)+1);break}a=e-o;const r=+(e*100+o);k(r,t)&&(t.push(r),l.push(e),s.push(o),n.push(a))}C(l,Oe,s),$(n)}}let Z,ee,te,ne;function Xe(){let c=[0,1,2,3];TBL.innerHTML=`
  <div class="h4">
    <div style="display:flex;">
      <div>①　</div>
      <div id="quest_1"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
    
    <div class="h4">
    <div style="display:flex;">
    <div>②　</div>
    <div id="quest_2"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
    
    <div class="h4">
    <div style="display:flex;">
    <div>③　</div>
    <div id="quest_3"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
    <div class="h4">
    <div style="display:flex;">
    <div>④　</div>
    <div id="quest_4"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
`,i(),question.addEventListener("click",()=>i());function i(){l();const s=[],n=[],t=[],e=["-","+","+","-"],o=["まい","人","人","人"],a=[];p.currentTime=0,p.play();let r,d,m=0,h;for(;a.length<10;){e[m]==="+"?(r=Math.floor(Math.random()*9+2),d=Math.floor(Math.random()*9+2),h=Math.floor(r+d)):(r=Math.floor(Math.random()*9+5),d=Math.floor(Math.random()*(r-1)+2),h=Math.floor(r-d));const M=+(r*100+d);k(M,a)&&(a.push(M),s.push(r),n.push(d),t.push(`しき　${r}${e[m]}${d}=${h}　こたえ　${h}${o[m]}`),m++)}Z=`
  のりものの　けんが　${s[0]}まい　あります。<br/>
  ${n[0]}人の　こどもに　１まいずつ<br/>
  わたすと、なんまい　のこりますか。<br/>
  `,ee=`
  しゃしんを　とります。<br/>
  ${s[1]}つの　いすに，ひとりずつ　すわり、<br/>
  うしろに　${n[1]}人　たちます。<br/>
  なん人で　しゃしんを　とりますか。<br/>
  `,te=`
  ひかるさんは　まえから　${s[2]}ばんめに　ならんでいます。<br/>
  ひかるさんの　うしろには　${n[2]}人　います。<br/>
  みんなで　なん人　ならんで　いますか。<br/>
  `,ne=`
  ${s[3]}人　ならんで　います。<br/>
  かおるさんは　まえから　${n[3]}ばんめに　います。<br/>
  かおるさんの　うしろには　なんにん　いますか。<br/>
  `;const f=[Z,ee,te,ne];document.getElementById("quest_1").innerHTML=f[c[0]],document.getElementById("quest_2").innerHTML=f[c[1]],document.getElementById("quest_3").innerHTML=f[c[2]],document.getElementById("quest_4").innerHTML=f[c[3]];const u=document.getElementById("answer-area");u.innerHTML=`
    ①　${t[c[0]]}　　
    ②　${t[c[1]]}</br>
    ③　${t[c[2]]}　　
    ④　${t[c[3]]}
    `}function l(){c=[];let s=[0,1,2,3];for(let n=0;n<4;n++)c.push(...s.splice(Math.floor(Math.random()*s.length-1),1))}}function Ve(){TBL.innerHTML=`
  <div style="display: flex;justify-content:space-between;flex-wrap:wrap;">
    <div style="display:flex;font-size:20px;">
      <div>①</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>②</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>③</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>④</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>⑤</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>⑥</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
  </div>
  `,document.getElementById("question").addEventListener("click",()=>c()),c();function c(){const a=[],r=[];let d,m,h,f,u=0;for(p.currentTime=0,p.play();r.length<6;){const M=document.getElementsByClassName("clock")[u],v=M.getContext("2d");d=Math.floor(Math.random()*12+1),m=Math.floor(Math.random()*60),f=`${d}じ　${m}ふん`;const b=+(d*100+m);k(b,r)&&(r.push(b),a.push(f),u<2?h="hint1":h="",u++,o(M,v,d,m,h))}$(a)}function i(a,r){a.beginPath(),a.moveTo(200,200),a.lineWidth=3,a.lineTo(200+130*Math.cos(Math.PI/180*(270+6*r)),200+130*Math.sin(Math.PI/180*(270+6*r))),a.strokeStyle="blue",a.stroke()}function l(a,r,d){a.beginPath(),a.moveTo(200,200),a.lineWidth=6,a.lineTo(200+100*Math.cos(Math.PI/180*(270+30*(r+d/60))),200+100*Math.sin(Math.PI/180*(270+30*(r+d/60)))),a.strokeStyle="red",a.stroke()}function s(a,r,d){i(a,d),l(a,r,d)}function n(a,r){a.font="30px 'ＭＳ ゴシック'",a.textAlign="center";const d=[260,305,325,310,265,200,140,95,75,95,135,200],m=[105,150,210,275,320,335,320,270,210,150,105,85],h=[200,280,340,360,340,280,200,120,60,40,60,120],f=[45,65,125,205,285,345,365,345,285,205,125,65];for(let u=0;u<=11;u++)a.fillText(u+1,d[u],m[u]);if(a.font="15px 'ＭＳ ゴシック'",r=="hint1")for(let u=0;u<=11;u++)a.fillText(u*5,h[u],f[u]);else if(r=="hint2")for(let u=0;u<60;u++)a.fillText(u,200+160*Math.cos(Math.PI/180*(270+u*6)),205+160*Math.sin(Math.PI/180*(270+u*6)));a.font="10px 'ＭＳ ゴシック'"}function t(a){for(let r=0;r<60;r++)a.beginPath(),a.moveTo(200+150*Math.cos(Math.PI/180*(270+r*6)),200+150*Math.sin(Math.PI/180*(270+r*6))),a.lineTo(200+145*Math.cos(Math.PI/180*(270+r*6)),200+145*Math.sin(Math.PI/180*(270+r*6))),a.lineWidth=1.5,a.strokeStyle="black",a.stroke();for(let r=0;r<12;r++)a.beginPath(),a.moveTo(200+150*Math.cos(Math.PI/180*(270+r*30)),200+150*Math.sin(Math.PI/180*(270+r*30))),a.lineTo(200+140*Math.cos(Math.PI/180*(270+r*30)),200+140*Math.sin(Math.PI/180*(270+r*30))),a.lineWidth=3,a.strokeStyle="black",a.stroke()}function e(a,r){r.clearRect(0,0,a.width,a.height),r.beginPath(),r.arc(200,200,150,0,Math.PI*2),r.lineWidth=1,r.strokeStyle="black",r.stroke()}function o(a,r,d,m,h){e(a,r),t(r),n(r,h),s(r,d,m)}}let ae,oe,re,se,ce,le,ie,de,he,me;function Ye(){let c=[0,1,2,3,4,5,6,7,8,9];TBL.innerHTML=`
  <div class="h4">
    <div style="display:flex;">
      <div>①　</div>
      <div id="quest_1"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
    
    <div class="h4">
    <div style="display:flex;">
    <div>②　</div>
    <div id="quest_2"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
    
    <div class="h4">
    <div style="display:flex;">
    <div>③　</div>
    <div id="quest_3"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
    <div class="h4">
    <div style="display:flex;">
    <div>④　</div>
    <div id="quest_4"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
`,i(),question.addEventListener("click",()=>i());function i(){l();const s=[],n=[],t=[],e=["+","-","+","-","-","+","-","-","+","+"],o=["人","人","本","本","本","こ","こ","だん","こ","人"],a=[];p.currentTime=0,p.play();let r,d,m=0,h;for(;a.length<10;){r=Math.floor(Math.random()*9+2),d=Math.floor(Math.random()*r),e[m]==="+"?h=Math.floor(r+d):h=Math.floor(r-d);const M=+(r*100+d);k(M,a)&&(a.push(M),s.push(r),n.push(d),t.push(`しき　${r}${e[m]}${d}=${h}　こたえ　${h}${o[m]}`),m++)}ae=`
  こどもが　${s[0]}人　あそんでいました。<br/>
  そこへ、　${n[0]}人　やってきました。<br/>
  みんなで　なん人になりましたか。<br/>
  `,oe=`
  こどもが　${s[1]}人　あそんでいました。<br/>
  ${n[1]}人　かえっていきました。<br/>
  のこりは　なん人になりましたか。<br/>
  `,re=`
  あかい　かさが　${s[2]}本，　<br/>
  きいろい　かさが、　${n[2]}本　あります。<br/>
  かさは　ぜんぶで　なん本　ですか。<br/>
  `,se=`
  あかい　かさが　${s[3]}本，　<br/>
  きいろい　かさが、　${n[3]}本　あります。<br/>
  あかい　かさは、きいろい　かさより、<br/>
  なん本　おおいですか。<br/>
  `,ce=`
  あかい　かさが　${s[4]}本，　<br/>
  きいろい　かさが、　${n[4]}本　あります。<br/>
  きいろい　かさは、あかい　かさより、<br/>
  なん本　すくないですか。<br/>
  `,le=`
  あめが　${s[5]}こ，あります。<br/>
  そこへ、　${n[5]}こ　もらいました。<br/>
  あめは　ぜんぶで　なんこ　ありますか。<br/>
  `,ie=`
  あめが　${s[6]}こ，あります。<br/>
  ${n[6]}こ　たべました。<br/>
  あめは　のこり　なんこに　なりましたか。<br/>
  `,de=`
  かいだんが　ぜんぶで　${s[7]}だん，あります。<br/>
  ${n[7]}だんめまで　のぼりました。<br/>
  あと　なんだん　ありますか。
  `,he=`
  いすに　${s[8]}人，すわっています。<br/>
  あいている　いすは　${n[8]}こ　あります。<br/>
  いすは、みんなで　いくつ　ありますか。<br/>
  `,me=`
  たろうさんは、うしろから　${s[9]}ばんめに　います。<br/>
  たろうさんの　まえに　${n[9]}人　います。<br/>
  みんなで　なん人　いますか。<br/>
  `;const f=[ae,oe,re,se,ce,le,ie,de,he,me];document.getElementById("quest_1").innerHTML=f[c[0]],document.getElementById("quest_2").innerHTML=f[c[1]],document.getElementById("quest_3").innerHTML=f[c[2]],document.getElementById("quest_4").innerHTML=f[c[3]];const u=document.getElementById("answer-area");u.innerHTML=`
    ①　${t[c[0]]}　　
    ②　${t[c[1]]}</br>
    ③　${t[c[2]]}　　
    ④　${t[c[3]]}
    `}function l(){c=[];let s=[0,1,2,3,4,5,6,7,8,9];for(let n=0;n<10;n++)c.push(...s.splice(Math.floor(Math.random()*s.length-1),1))}}const Ge=["〇0+〇0","〇0-〇0","〇〇+〇","〇〇-〇"];function Je(){let c="0";E(Ge),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a,r;for(;t.length<20;){switch(c){case"0":{e=Math.floor(Math.random()*9)*10+10,o=Math.floor(Math.random()*(100-e)/10)*10+10,a=Math.floor(e+o),r="+";break}case"1":{e=Math.floor(Math.random()*8)*10+20,o=Math.floor(Math.random()*((e-10)/10))*10+10,a=Math.floor(e-o),r="-";break}case"2":{e=Math.floor(Math.random()*8)*10+10+Math.floor(Math.random()*8+1),o=Math.floor(Math.random()*(9-e%10)+1),a=Math.floor(e+o),r="+";break}case"3":{e=Math.floor(Math.random()*9)*10+10+Math.floor(Math.random()*8+2),o=Math.floor(Math.random()*(e%10)+1),a=Math.floor(e-o),r="-";break}}const d=+(e*100+o);k(d,t)&&(t.push(d),l.push(e),s.push(o),n.push(a))}C(l,r,s),$(n)}}function Ke(){const c=["dog","frog","horse","monkey"],i=["いぬ","かえる","うま","さる"],l=["どうぶつ","いぬ","かえる","うま","さる","かず","①　　　　　","②　　　　　","③　　　　　","④　　　　　"];let s,n,t,e,o,a,r,d,m,h;const f=document.getElementById("TBL");f.innerHTML=`
  <h3>　どうぶつの　かずを　しらべます。</h3>
  <div id="animal_field" style="width:100%;height:200px;border:solid 1px gray;padding:20px;"></div>
  <br/>
  <h4>☆　どうぶつの　かずを　下の　ひょうに　かきましょう。</h4>
  <h5 style="text-align:center;">どうぶつの　かずしらべ</h5>
  <div id="animal_table"></div>
  <br/>
  <div style="display:flex;">
    <div style="width:60%;margin-right:20px;">
      <h4>☆　どうぶつの　かずを<br/>　●を　つかって、右のグラフに　<br/>　かきましょう。</h4>
      <br/>
      <h4>⑨　いちばん　おおい<br/>　どうぶつは　なんですか。</h4>
      <h3 style="text-align:right;">(　　　　　　　)</h3>
      <br/>
      <h4 id="text"></h4>
      <h3 style="text-align:right;">(　　　　　ひき)</h3>
    </div>
    <div id="animal_graph" style="margin-left:auto;"></div>
  </div>
  `,u(),question.addEventListener("click",()=>u());function u(){p.currentTime=0,p.play();const y=[];let _=[2,3,4,5,6,7,8];for(let T=0;T<7;T++)y.push(..._.splice(Math.floor(Math.random()*_.length-1),1));s=y[0],n=y[1],t=y[2],e=y[3];const L=[s,n,t,e];o=Math.max(s,n,t,e),r=L.indexOf(o),m=i[r],a=Math.min(s,n,t,e),d=L.indexOf(a),h=i[d],document.getElementById("text").innerHTML=`⑩　${m}は　${h}より<br/>　なんびき　おおいですか。`,document.getElementById("animal_field").innerHTML="";for(let T=0;T<4;T++)for(let H=0;H<L[T];H++){const I=document.createElement("img");I.setAttribute("class","animal"),I.src=`./Images/${c[T]}.png`,document.getElementById("animal_field").appendChild(I)}const g=document.getElementById("answer-area");g.innerHTML=`
    ①　${s}　
    ②　${n}　
    ③　${t}　
    ④　${e}
    <br/>
    ⑤～⑧　あっているか　どうか　だれかに　みてもらいましょう。
    <br/>
    ⑨　${m}　
    ⑩　${o-a}ひき
    `}const M=document.createElement("table");for(let y=0;y<2;y++){const _=document.createElement("tr");for(let L=0;L<5;L++){const g=document.createElement("td");g.classList.add("animal_td"),g.innerHTML=l[y*5+L],g.style.height=`${30+y*20}px`,_.appendChild(g)}M.appendChild(_)}const v=document.createElement("table"),b=["⑤","⑥","⑦","⑧"];for(let y=0;y<9;y++){const _=document.createElement("tr");for(let L=0;L<4;L++){const g=document.createElement("td");g.style.width="60px",g.style.height="40px",g.style.border="solid 1px black",_.appendChild(g),y===8&&(g.style.height="80px",g.style.paddingTop="5px",g.style.writingMode="vertical-rl",g.innerHTML=`${b[L]}${i[L]}`)}v.appendChild(_)}document.getElementById("animal_table").appendChild(M),document.getElementById("animal_graph").appendChild(v)}const D=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮"];function W(c,i,l,s){const n=document.getElementById("TBL");n.innerHTML="",s===void 0&&(s=5);for(let t=0;t<20;t++){const e=document.createElement("tr");for(let o=0;o<12;o++){const a=document.createElement("td");a.classList.add("td_2column"),e.appendChild(a)}n.appendChild(e)}for(let t=0;t<s;t++)for(let e=0;e<3;e++){n.rows[t*4+1].cells[e*4].innerHTML=D[t*3+e],n.rows[t*4+2].cells[e*4].innerHTML=i,n.rows[t*4+2].cells[e*4].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*4+1].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*4+2].style.borderBottom="solid 1px black",s===4&&(n.rows[t*4+3].cells[e*4+3].style.height="20mm"),s===3&&(n.rows[t*4+3].cells[e*4+3].style.height="38mm");const o=c[t*3+e],a=l[t*3+e];Math.floor(o/10)!=0&&(n.rows[t*4+1].cells[e*4+1].innerHTML=Math.floor(o/10)),Math.floor(a/10)!=0&&(n.rows[t*4+2].cells[e*4+1].innerHTML=Math.floor(a/10)),n.rows[t*4+1].cells[e*4+2].innerHTML=o%10,n.rows[t*4+2].cells[e*4+2].innerHTML=a%10}}function Y(c,i,l,s){const n=document.getElementById("TBL");n.innerHTML="",s===void 0&&(s=5);for(let t=0;t<20;t++){const e=document.createElement("tr");for(let o=0;o<15;o++){const a=document.createElement("td");a.classList.add("td_3column"),e.appendChild(a)}n.appendChild(e)}for(let t=0;t<s;t++)for(let e=0;e<3;e++){n.rows[t*4+1].cells[e*5].innerHTML=D[t*3+e],n.rows[t*4+2].cells[e*5].innerHTML=i,n.rows[t*4+2].cells[e*5].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*5+1].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*5+2].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*5+3].style.borderBottom="solid 1px black",s===4?n.rows[t*4+3].cells[e*5+3].style.height="20mm":s===3&&(n.rows[t*4+3].cells[e*5+3].style.height="38mm");const o=c[t*3+e],a=l[t*3+e];Math.floor(o/100)!=0?n.rows[t*4+1].cells[e*5+1].innerHTML=Math.floor(o/100):n.rows[t*4+1].cells[e*5+1].innerHTML="",n.rows[t*4+1].cells[e*5+2].innerHTML=Math.floor(o%100/10),n.rows[t*4+1].cells[e*5+3].innerHTML=o%100%10,Math.floor(a/10)!=0?n.rows[t*4+2].cells[e*5+2].innerHTML=Math.floor(a/10):n.rows[t*4+2].cells[e*5+2].innerHTML="",n.rows[t*4+2].cells[e*5+3].innerHTML=a%10}}function O(c,i,l,s){const n=document.getElementById("TBL");n.style.marginTop="30px",n.innerHTML="",i=")",s===void 0&&(s=3);for(let t=0;t<9;t++){const e=document.createElement("tr");for(let o=0;o<15;o++){const a=document.createElement("td");a.classList.add("td_division"),e.appendChild(a)}n.appendChild(e)}for(let t=0;t<s;t++)for(let e=0;e<3;e++){n.rows[t*3].cells[e*5+3].style.borderBottom="solid 3px black",n.rows[t*3+1].cells[e*5+3].style.borderTop="solid 3px black",s===4?n.rows[t*3+2].cells[e*5+3].style.height="30mm":s===3&&(n.rows[t*3+2].cells[e*5+3].style.height="45mm");const o=c[t*3+e],a=l[t*3+e];n.rows[t*3].cells[e*5].innerHTML=D[t*3+e],n.rows[t*3+1].cells[e*5+2].innerHTML=i,n.rows[t*3+1].cells[e*5+3].innerHTML=o,n.rows[t*3+1].cells[e*5+1].innerHTML=a,n.rows[t*3].cells[e*5+4].colSpan="2",n.rows[t*3+1].cells[e*5+2].colSpan="2",n.rows[t*3+2].cells[e*5+2].colSpan="2",n.rows[t*3].cells[e*5+2].style.width="16px",n.rows[t*3].cells[e*5+3].style.width="16px",n.rows[t*3+1].cells[e*5+2].style.textAlign="right",o>999?n.rows[t*3+1].cells[e*5+3].style.letterSpacing="8px":Number.isInteger(o)?n.rows[t*3+1].cells[e*5+3].style.letterSpacing="16px":n.rows[t*3+1].cells[e*5+3].style.letterSpacing="0px"}}function G(c,i,l,s){const n=document.getElementById("TBL");n.innerHTML="";for(let t=0;t<20;t++){const e=document.createElement("tr");for(let o=0;o<15;o++){const a=document.createElement("td");a.classList.add("td_Decimals"),e.appendChild(a)}n.appendChild(e)}for(let t=0;t<s;t++)for(let e=0;e<3;e++){n.rows[t*4+1].cells[e*5].innerHTML=D[t*3+e],n.rows[t*4+2].cells[e*5].innerHTML=i,n.rows[t*4+2].cells[e*5].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*5+1].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*5+2].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*5+3].style.borderBottom="solid 1px black",n.rows[t*4+3].cells[e*5+1].style.height="38mm";const o=c[t*3+e],a=l[t*3+e];Number.isInteger(o)?(n.rows[t*4+1].cells[e*5+1].innerHTML=Math.floor(o/10),n.rows[t*4+1].cells[e*5+3].innerHTML=o%10):(n.rows[t*4+1].cells[e*5+1].innerHTML=Math.floor(o),n.rows[t*4+1].cells[e*5+2].innerHTML=".",n.rows[t*4+1].cells[e*5+3].innerHTML=Math.floor(o*10%10)),Number.isInteger(a)?(n.rows[t*4+2].cells[e*5+1].innerHTML=Math.floor(a/10),n.rows[t*4+2].cells[e*5+3].innerHTML=a%10):(n.rows[t*4+2].cells[e*5+1].innerHTML=Math.floor(a),n.rows[t*4+2].cells[e*5+2].innerHTML=".",n.rows[t*4+2].cells[e*5+3].innerHTML=Math.floor(a*10%10))}}function Qe(c,i,l,s){const n=document.getElementById("TBL");n.innerHTML="";for(let t=0;t<20;t++){const e=document.createElement("tr");for(let o=0;o<21;o++){const a=document.createElement("td");a.classList.add("td_Decimals2"),e.appendChild(a)}n.appendChild(e)}for(let t=0;t<s;t++)for(let e=0;e<3;e++){n.rows[t*4+1].cells[e*7].innerHTML=D[t*3+e],n.rows[t*4+2].cells[e*7].innerHTML=i,n.rows[t*4+2].cells[e*7].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*7+1].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*7+2].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*7+3].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*7+4].style.borderBottom="solid 1px black",n.rows[t*4+2].cells[e*7+5].style.borderBottom="solid 1px black",n.rows[t*4+3].cells[e*7+1].style.height="38mm";const o=c[t*3+e],a=l[t*3+e];n.rows[t*4+1].cells[e*7+1].innerHTML=Math.floor(o),n.rows[t*4+1].cells[e*7+2].innerHTML=".",n.rows[t*4+1].cells[e*7+3].innerHTML=Math.floor(o*10%10),n.rows[t*4+1].cells[e*7+5].innerHTML=Math.floor(o*100%100%10),n.rows[t*4+2].cells[e*7+3].innerHTML=Math.floor(a),n.rows[t*4+2].cells[e*7+4].innerHTML=".",n.rows[t*4+2].cells[e*7+5].innerHTML=Math.floor(a*10%10)}}const Ue=["+くり上がりなし","+くり上がりあり","-くりさがりなし","-くりさがりあり"];function Ze(){let c="0";E(Ue),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a,r;for(;t.length<15;){switch(c){case"0":{const h=Math.floor(Math.random()*8+1),f=Math.floor(Math.random()*(9-h)+1),u=Math.floor(Math.random()*9+1),M=Math.floor(Math.random()*(9-u));e=Math.floor(h*10)+Math.floor(u),o=Math.floor(f*10)+Math.floor(M),a=Math.floor(e+o),r="+";break}case"1":{const h=Math.floor(Math.random()*7+1),f=Math.floor(Math.random()*(7-h)+1),u=Math.floor(Math.random()*8+2),M=Math.floor(Math.random()*u+(8-u)+2);e=Math.floor(h*10)+Math.floor(u),o=Math.floor(f*10)+Math.floor(M),a=Math.floor(e+o),r="+";break}case"2":{e=Math.floor(Math.random()*4+5)*10+Math.floor(Math.random()*4+5),o=Math.floor(Math.random()*4+1)*10+Math.floor(Math.random()*4+1),a=e-o,r="-";break}case"3":{e=Math.floor(Math.random()*4+5)*10+Math.floor(Math.random()*4+1),o=Math.floor(Math.random()*4+1)*10+Math.floor(Math.random()*4+5),a=e-o,r="-";break}}const d=+(e*100+o);k(d,t)&&(t.push(d),l.push(e),s.push(o),n.push(a))}W(l,r,s),$(n)}}function et(){const c=document.getElementById("TBL");question.addEventListener("click",()=>i()),i();function i(){const l=[],s=[],n=[],t=[],e=[];p.currentTime=0,p.play();let o;for(;e.length<10;){const r=Math.floor(Math.random()*9+1),d=Math.floor(Math.random()*9+1),m=Math.floor(Math.random()*9+1);o=r*100+d*10+m;const h=o;k(h,e)&&(e.push(h),s.push(r),n.push(d),t.push(m),l.push(o))}c.innerHTML=`
    <div class="h4" style="line-height:36px;">
      <div class="py-2">①　100を${s[0]}こ、10を${n[0]}こ、1を${t[0]}こ<br>　あわせた　数は　（　　　　）です。</div>
      <div class="py-2">②　100を${s[1]}こ、10を${n[1]}こ、1を${t[1]}こ<br>　あわせた　数は　（　　　　）です。</div>
      <div class="py-2">③　${l[2]}は、100を（　　）こ、10を（　　）こ<br>　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">④　${l[3]}は、100を（　　）こ、10を（　　）こ<br>　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">⑤　${l[4]-n[4]*10}は、100を（　　）こ、<br>　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">⑥　${l[5]-n[5]*10}は、100を（　　）こ、<br>　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">⑦　10を　${s[6]*10+n[6]*1}こ　あつめた　数は、<br>　（　　　　）です。</div>
      <div class="py-2">⑧　10を　${s[7]*10+n[7]*1}こ　あつめた　数は、<br>　（　　　　）です。</div>
      <div class="py-2">⑨　${s[8]*100+n[8]*10}は　10を（　　　）こあつめた数です。</div>
      <div class="py-2">⑩　${s[9]*100+n[9]*10}は　10を（　　　）こあつめた数です。</div>
    </div>
    `;const a=document.getElementById("answer-area");a.innerHTML=`
    ①　${l[0]}　　
    ②　${l[1]}　　
    ③　100を${s[2]}こ,10を${n[2]}こ,1を${t[2]}こ　　
    </br>
    ④　100を${s[3]}こ,10を${n[3]}こ,1を${t[3]}こ　　
    ⑤　100を${s[4]}こ,1を${t[4]}こ　
    ⑥　100を${s[5]}こ,1を${t[5]}こ　
    </br>
    ⑦　${s[6]*100+n[6]*10}　　
    ⑧　${s[7]*100+n[7]*10}　　
    ⑨　${s[8]*10+n[8]*1}こ　　
    ⑩　${s[9]*10+n[9]*1}こ
    `}}const tt=["100をこえるたし算","99+99まで","100をこえる引き算","1○○-○○"];function nt(){let c="0";E(tt),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a,r;for(;t.length<15;){switch(c){case"0":{e=Math.floor(Math.random()*10+100),o=Math.floor(Math.random()*(e-20)+10),e=e-o,a=Math.floor(e+o),r="+";break}case"1":{e=Math.floor(Math.random()*49+50),o=Math.floor(Math.random()*49+50),a=Math.floor(e+o),r="+";break}case"2":{e=Math.floor(Math.random()*49+150),o=Math.floor(Math.random()*49+1),a=e-o,r="-";break}case"3":{e=Math.floor(Math.random()*9+100),o=Math.floor(Math.random()*99+1),a=e-o,r="-";break}}const d=+(e*1e3+o);k(d,t)&&(t.push(d),l.push(e),s.push(o),n.push(a))}switch(c){case"0":W(l,r,s);break;case"1":W(l,r,s);break;case"2":Y(l,r,s);break;case"3":Y(l,r,s);break}$(n)}}const at=["かけざん(2～5)のだん"],ot="×",ue=document.getElementById("select"),rt=document.getElementById("question");function st(){E(at),c(),ue.addEventListener("change",()=>{ue.value,c()}),rt.addEventListener("click",()=>c());function c(){const i=[],l=[],s=[],n=[];p.currentTime=0,p.play();let t,e,o;for(;n.length<20;){t=Math.floor(Math.random()*4+2),e=Math.floor(Math.random()*9+1),o=t*e;const a=+(t*100+e);k(a,n)&&(n.push(a),i.push(t),l.push(e),s.push(o))}C(i,ot,l),$(s)}}const ct=["かけざん(6～9)のだん","かけざん(2～9)のだん"],lt="×",fe=document.getElementById("select"),it=document.getElementById("question");function dt(){let c="0";E(ct),i(),fe.addEventListener("change",()=>{c=fe.value,i()}),it.addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a;for(;t.length<20;){switch(c){case"0":e=Math.floor(Math.random()*4+6),o=Math.floor(Math.random()*9+1);break;case"1":e=Math.floor(Math.random()*8+2),o=Math.floor(Math.random()*9+1);break}a=e*o;const r=+(e*100+o);k(r,t)&&(t.push(r),l.push(e),s.push(o),n.push(a))}C(l,lt,s),$(n)}}function ht(){const c=document.getElementById("TBL");question.addEventListener("click",()=>i()),i();function i(){const l=[],s=[],n=[],t=[],e=[],o=[];p.currentTime=0,p.play();let a;for(;o.length<10;){const d=Math.floor(Math.random()*9+1),m=Math.floor(Math.random()*9+1),h=Math.floor(Math.random()*9+1),f=Math.floor(Math.random()*9+1);a=d*1e3+m*100+h*10+f;const u=a;k(u,o)&&(o.push(u),s.push(d),n.push(m),t.push(h),e.push(f),l.push(a))}c.innerHTML=`
    <div class="h4" style="line-height:34px;">
      <div class="py-2">①　1000を${s[0]}こ、100を${n[0]}こ、10を${t[0]}こ、1を${e[0]}こ<br>　あわせた　数は　（　　　　）です。</div>
      <div class="py-2">①　1000を${s[1]}こ、100を${n[1]}こ、10を${t[1]}こ、1を${e[1]}こ<br>　あわせた　数は　（　　　　）です。</div>

      <div class="py-2">③　${l[2]}は、1000を（　　）こ、100を（　　）こ、<br>　10を（　　）こ　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">④　${l[3]}は、1000を（　　）こ、100を（　　）こ、<br>　10を（　　）こ　１を（　　）こ　あわせた　数です。</div>

      <div class="py-2">⑤　${l[4]-n[4]*100}は、1000を（　　）こ、<br>　10を（　　）こ、　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">⑥　${l[5]-t[5]*10}は、1000を（　　）こ、　100を（　　）こ、<br>　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">⑦　100を　${s[6]*10+n[6]*1}こ　あつめた　数は、<br>　（　　　　）です。</div>
      <div class="py-2">⑧　100を　${s[7]*10+n[7]*1}こ　あつめた　数は、<br>　（　　　　）です。</div>
      <div class="py-2">⑨　${s[8]*1e3+n[8]*100}は　100を（　　　）こあつめた数です。<br>　また、10を（　　　）こあつめた数です。</div>
      <div class="py-2">⑩　${s[9]*1e3+n[9]*100}は　100を（　　　）こあつめた数です。<br>　また、10を（　　　）こあつめた数です。</div>
    </div>
    `;const r=document.getElementById("answer-area");r.innerHTML=`
    ①　${l[0]}　　
    ②　${l[1]}　　
    ③　${s[2]}こ,${n[2]}こ,${t[2]}こ,${e[2]}こ　　
    ④　${s[3]}こ,${n[3]}こ,${t[3]}こ,${e[3]}こ　　
    </br>
    ⑤　1000を${s[4]}こ,10を${t[4]}こ,1を${e[4]}こ　
    ⑥　1000を${s[5]}こ,100を${n[5]}こ,1を${e[5]}こ　
    </br>
    ⑦　${s[6]*1e3+n[6]*100}　　
    ⑧　${s[7]*1e3+n[7]*100}　　
    ⑨　${s[8]*10+n[8]*1}こ、　${s[8]*100+n[8]*10}こ　　
    ⑩　${s[9]*10+n[9]*1}こ、　${s[9]*100+n[9]*10}こ
    `}}function mt(){const c=document.getElementById("TBL");question.addEventListener("click",()=>i()),i();function i(){p.currentTime=0,p.play();const l=[],s=[],n=[];l[0]=Math.floor(Math.random()*9+1)*10,l[1]=Math.floor(Math.random()*9+1),l[2]=Math.floor(Math.random()*9+1)*10+Math.floor(Math.random()*9+1),l[3]=Math.floor(Math.random()*9+1)*10+Math.floor(Math.random()*9+1),l[4]=100+Math.floor(Math.random()*19+1),l[5]=100+Math.floor(Math.random()*19+1),l[6]=Math.floor(Math.random()*9+1)*10,l[7]=Math.floor(Math.random()*9+1),l[8]=Math.floor(Math.random()*9+1)*100,l[9]=Math.floor(Math.random()*9+1)*1e3;for(let e=10;e<15;e++)e===10||e===12?(s[e-10]=Math.floor(Math.random()*9+1)*10+Math.floor(Math.random()*8+1),n[e-10]=Math.floor(Math.random()*(8-s[e-10]%10)+1),l[e]=s[e-10]+n[e-10]):e===11||e===13?(s[e-10]=Math.floor(Math.random()*9+1)*10+Math.floor(Math.random()*4+5),n[e-10]=Math.floor(Math.random()*(s[e-10]%10-1)+1),l[e]=s[e-10]-n[e-10]):e===14&&(s[e-10]=Math.floor(Math.random()*8+1)*10+Math.floor(Math.random()*9+1),n[e-10]=Math.floor(Math.random()*(8-Math.floor(s[e-10]/10))+1),l[e]=s[e-10]+n[e-10]*10);c.innerHTML=`
    <div>
  <h3 class="py-1">（　　）に　あてはまる　数を　かきましょう。</h3>
  <h3 class="py-1">①　${l[0]/10}cm=（　　）mm</h3>
  <h3 class="py-1">②　${l[1]*10}mm=（　　）cm</h3>
  <h3 class="py-1">③　${Math.floor(l[2]/10)}cm${l[2]%10}mm=（　　）mm</h3>
  <h3 class="py-1">④　${l[3]}mm=（　　）cm（　　）mm</h3>
  <h3 class="py-1">⑤　${l[4]}cm=（　　）m（　　）cm</h3>
  <h3 class="py-1">⑥　${Math.floor(l[5]/100)}m${l[5]%100}cm=（　　）cm</h3>
  <h3 class="py-1">⑦　${l[6]/10}L=（　　）dL</h3>
  <h3 class="py-1">⑧　${l[7]*10}dL=（　　）L</h3>
  <h3 class="py-1">⑨　${l[8]/100}dL=（　　）mL</h3>
  <h3 class="py-1">⑩　${l[9]/1e3}L=（　　）mL</h3>
  <h3 class="py-1">計算を　しましょう。</h3>
  <h3 class="py-1">⑪　${Math.floor(s[0]/10)}cm${s[0]%10}mm + ${n[0]}mm</h3>
  <h3 class="py-1">⑫　${Math.floor(s[1]/10)}cm${s[1]%10}mm - ${n[1]}mm</h3>
  <h3 class="py-1">⑬　${Math.floor(s[2]/10)}L${s[2]%10}dL + ${n[2]}dL</h3>
  <h3 class="py-1">⑭　${Math.floor(s[3]/10)}L${s[3]%10}dL - ${n[3]}dL</h3>
  <h3 class="py-1">⑮　${Math.floor(s[4]/10)}L${s[4]%10}dL + ${n[4]}L</h3>
  </div>
  `;const t=document.getElementById("answer-area");t.innerHTML=`
  ①　${l[0]}mm　
  ②　${l[1]}cm　
  ③　${l[2]}mm　
  ④　${Math.floor(l[3]/10)}cm${l[3]%10}mm　
  ⑤　${Math.floor(l[4]/100)}cm${l[4]%100}mm　<br>
  ⑥　${l[5]}cm　
  ⑦　${l[6]}dL　
  ⑧　${l[7]}L　
  ⑨　${l[8]}mL　
  ⑩　${l[9]}mL　<br>
  ⑪　${Math.floor(l[10]/10)}cm${l[10]%10}mm　
  ⑫　${Math.floor(l[11]/10)}cm${l[11]%10}mm　
  ⑬　${Math.floor(l[12]/10)}L${l[12]%10}dL　
  ⑭　${Math.floor(l[13]/10)}L${l[13]%10}dL　
  ⑮　${Math.floor(l[14]/10)}L${l[14]%10}dL
  `}}const ut=["わり算のれんしゅう"],ft="÷",Me=document.getElementById("select"),Mt=document.getElementById("question");function pt(){E(ut),c(),Me.addEventListener("change",()=>{Me.value,c()}),Mt.addEventListener("click",()=>c());function c(){const i=[],l=[],s=[],n=[];p.currentTime=0,p.play();let t,e,o;for(;n.length<20;){o=Math.floor(Math.random()*8+2),e=Math.floor(Math.random()*8+2),t=o*e;const a=+(t*100+e);k(a,n)&&(n.push(a),i.push(t),l.push(e),s.push(o))}C(i,ft,l),$(s)}}function vt(){const c=document.getElementById("TBL");question.addEventListener("click",()=>i()),i();function i(){p.currentTime=0,p.play();const l=[],s=[],n=[];for(let t=0;t<15;t++){s[t]=Math.floor(Math.random()*9+2)*100+Math.floor(Math.random()*5+1)*10,n[t]=Math.floor(Math.random()*11+1)*5;let e=Math.floor(s[t]/100)*60+s[t]%100,o;switch(t){case 0:case 1:o=e-n[t],l[t]=`${Math.floor(o/60)}時${o%60}分`;break;case 2:case 3:o=e+n[t],l[t]=`${Math.floor(o/60)}時${o%60}分`;break;case 4:case 5:o=e+n[t],l[t]=`${n[t]}分`,n[t]=`${Math.floor(o/60)}時${o%60}分`;break;case 6:l[t]=`${Math.floor(60+n[t])}分`;break;case 7:l[t]=`${Math.floor(60+n[t])}秒`;break;case 8:l[t]=`１分${n[t]}秒`;break;case 9:s[t]=Math.floor(Math.random()*2+9)*100+Math.floor(Math.random()*5+1)*10;let a=Math.floor(s[t]/100)*60+s[t]%100;n[t]=Math.floor(Math.random()*3+14)*100+Math.floor(Math.random()*5+1)*10;let r=Math.floor(n[t]/100)*60+n[t]%100;o=r-a,console.log(r,a,o),l[t]=`${Math.floor(o/60)}時間${o%60}分`;break}}c.innerHTML=`
    <div>
  <h3 class="1">次の　時こくを　もとめましょう。</h3>
  <h3 class="py-3">①　${Math.floor(s[0]/100)}時${s[0]%100}分の${n[0]}分前の時こく（　時　　分）</h3>
  <h3 class="py-3">②　${Math.floor(s[1]/100)}時${s[1]%100}分の${n[1]}分前の時こく（　時　　分）</h3>
  <h3 class="py-3">③　${Math.floor(s[2]/100)}時${s[2]%100}分から${n[2]}分あとの時こく（　時　　分）</h3>
  <h3 class="py-3">④　${Math.floor(s[3]/100)}時${s[3]%100}分から${n[3]}分あとの時こく（　時　　分）</h3>
  <h3 class="py-3">⑤　${Math.floor(s[4]/100)}時${s[4]%100}分から${n[4]}まで（　　分）</h3>
  <h3 class="py-3">⑥　${Math.floor(s[5]/100)}時${s[5]%100}分から${n[5]}まで（　　分）</h3>
  <h3 class="py-3">⑦　１時間${n[6]}分＝（　　分）</h3>
  <h3 class="py-3">⑧　１分${n[7]}秒＝（　　秒）</h3>
  <h3 class="py-3">⑨　${n[8]+60}秒＝（　分　　秒）</h3>
  <h3 class="py-3">⑩　午前${Math.floor(s[9]/100)}時${s[9]%100}分から午後${Math.floor(n[9]/100)-12}時${n[9]%100}分まで</h3>
  <h3 style="text-align:right;">（　　時間　　分）</h3>
  
  </div>
  `,$(l)}}const yt=["あまりのあるわり算"],bt="÷",pe=document.getElementById("select"),gt=document.getElementById("question");function $t(){E(yt),c(),comment.innerHTML="こたえにある「…」は「あまり」を表しています。",pe.addEventListener("change",()=>{pe.value,c()}),gt.addEventListener("click",()=>c());function c(){const i=[],l=[],s=[],n=[];p.currentTime=0,p.play();let t,e,o,a;for(;n.length<20;){a=Math.floor(Math.random()*8+2),e=Math.floor(Math.random()*8+2),o=Math.floor(Math.random()*(e-1)+1),t=Math.floor(a*e+o);const r=+(t*100+e);k(r,n)&&(n.push(r),i.push(t),l.push(e),a=a+"…"+o,s.push(a))}C(i,bt,l),$(s)}}const Lt=["くり上がりなし","くり上がり1回A","くり上がり1回B","くり上がり2回"],_t="×";function kt(){let c="0";E(Lt),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a,r;for(;t.length<15;){switch(c=="0"?o=Math.floor(Math.random()*9+1):o=Math.floor(Math.random()*8+2),o){case 1:a=9;break;case 2:a=4;break;case 3:a=3;break;case 4:a=2;break;default:a=1;break}switch(c){case"0":{e=Math.floor(Math.random()*a+1)*10+Math.floor(Math.random()*a+1);break}case"1":{e=Math.floor(Math.random()*(9-a)+a+1)*10+Math.floor(Math.random()*a+1);break}case"2":{e=Math.floor(Math.random()*a+1)*10+Math.floor(Math.random()*(9-a)+a+1);break}case"3":{e=Math.floor(Math.random()*(9-a)+a+1)*10+Math.floor(Math.random()*(9-a)+a+1);break}}r=Math.floor(e*o);const d=+(e*100+o);k(d,t)&&(t.push(d),l.push(e),s.push(o),n.push(r))}W(l,_t,s),$(n)}}const Tt=["2けた×2けた","3けた×2けた"],ve="×";function Et(){let c="0";E(Tt),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a;for(;t.length<9;){switch(c){case"0":{e=Math.floor(Math.random()*90+10),o=Math.floor(Math.random()*90+10);break}case"1":{e=Math.floor(Math.random()*889+100),o=Math.floor(Math.random()*90+10);break}}a=Math.floor(e*o);const r=+(e*100+o);k(r,t)&&(t.push(r),l.push(e),s.push(o),n.push(a))}switch(c){case"0":W(l,ve,s,3);break;case"1":Y(l,ve,s,3);break}$(n)}}const wt=["２けた÷１けた","３けた÷１けた"],xt="÷";function Ct(){let c="0";E(wt),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a;for(;t.length<9;){switch(c){case"0":{e=Math.floor(Math.random()*50+50),o=Math.floor(Math.random()*8+2);break}case"1":{o=Math.floor(Math.random()*8+2),e=Math.floor(Math.random()*80*(o-1)+100);break}}e%o===0?a=Math.floor(e/o):a=`${Math.floor(e/o)}あまり${e%o}`;const r=+(e*100+o);k(r,t),t.push(r),l.push(e),s.push(o),n.push(a)}O(l,xt,s),$(n)}}const Bt=["２けた÷２けた","３けた÷２けた","４けた÷２けた"],It="÷";function Ht(){let c="0";E(Bt),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a;for(;t.length<9;){switch(c){case"0":{e=Math.floor(Math.random()*50+50),o=Math.floor(Math.random()*e/2+10);break}case"1":{e=Math.floor(Math.random()*899+100),o=Math.floor(Math.random()*89+10);break}case"2":{o=Math.floor(Math.random()*49+50),e=Math.floor(Math.random()*o*80+1e3);break}}e%o===0?a=Math.floor(e/o):a=`${Math.floor(e/o)}あまり${e%o}`;const r=+(e*100+o);k(r,t),t.push(r),l.push(e),s.push(o),n.push(a)}O(l,It,s),$(n)}}const qt=["小数×１けた","小数÷１けた","小数×２けた","小数÷２けた"];function At(){let c="0";E(qt),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a,r,d;for(;t.length<20;){switch(c){case"0":{a=Math.floor(Math.random()*9);const f=Math.floor(Math.random()*9+1);e=Math.floor(a*10+f)/10,o=Math.floor(Math.random()*9+1),r=e*o,Number.isInteger(r)||(r=r.toFixed(1)),d="×";break}case"1":{o=Math.floor(Math.random()*8+2),r=Math.floor(Math.random()*8+2)/10,e=(o*r).toFixed(1),Number.isInteger(e)&&(e=e+o/10),d="÷";break}case"2":{a=Math.floor(Math.random()*9);const f=Math.floor(Math.random()*9+1);e=Math.floor(a*10+f)/10,o=Math.floor(Math.random()*89+10),r=e*o,Number.isInteger(r)||(r=r.toFixed(1)),d="×";break}case"3":{document.getElementById("header-comment").innerHTML=`
          <h5>☆　整数の商とあまりを求めましょう。</h5>`,e=Math.floor(Math.random()*399+500)/10,o=Math.floor(Math.random()*(e-11)/2+11),Number.isInteger(e)&&(e=e+o/10);let f=e%o;Number.isInteger(f)||(f=f.toFixed(1)),f===0?r=Math.floor(e/o):r=`${Math.floor(e/o)}あまり${f}`,d="÷";break}}const m=+(e*100+o);k(m,t)&&(t.push(m),l.push(e),s.push(o),n.push(r))}switch(c){case"0":C(l,d,s);break;case"1":C(l,d,s);break;case"2":G(l,d,s,3),n.splice(9,11);break;case"3":O(l,d,s),n.splice(9,11);break}$(n)}}const Pt=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮","⑯","⑰","⑱","⑲","⑳"],Nt=["ア","イ","ウ","エ"];function zt(c){const i=document.createElement("div");return i.classList.add("improper_fraction"),i.textContent=Nt[c],i}function B(c){const i=document.createElement("div");return i.classList.add("improper_fraction"),i.textContent=Pt[c],i}function S(c){const i=document.createElement("div");return i.classList.add("improper_fraction"),i.textContent=c,i}function w(c,i){const l=document.createElement("span");l.classList.add("numerator"),l.textContent=c;const s=document.createElement("span");s.classList.add("denominator"),s.textContent=i;const n=document.createElement("div");return n.appendChild(l),n.appendChild(s),n}function x(c,i){const l=(e,o)=>o===0?e:l(o,e%o),s=l(c,i),n=c/s,t=i/s;return[n,t]}function St(c,i,l,s){const n=Math.floor(c*s+l*i),t=i*s;return[n,t]}function Wt(c,i,l,s){const n=c*s-l*i,t=i*s;return[n,t]}function Dt(c,i,l,s,n,t){i=c*l+i,n=s*t+n;const e=i*n,o=l*t,[a,r]=x(e,o);return[a,r]}function Ft(c,i,l,s,n,t){i=c*l+i,n=s*t+n;const e=i*t,o=l*n,[a,r]=x(e,o);return[a,r]}function $e(c,i,l,s,n,t,e,o){const a=document.createElement("div");a.classList.add("d-flex","fraction");const r=B(e);if(a.appendChild(r),c>0){const h=S(c);a.appendChild(h)}if(i!==0){const h=w(i,l);a.appendChild(h)}const d=document.createElement("div");if(d.classList.add("improper_fraction"),d.textContent=o,a.appendChild(d),s>0){const h=S(s);a.appendChild(h)}if(n!==0){const h=w(n,t);a.appendChild(h)}const m=document.createElement("div");return m.classList.add("fraction-equal"),m.textContent="＝　　　",a.appendChild(m),a}const ye=["ア","イ","ウ","エ"];function Ot(){let c=[];const i=document.getElementById("TBL");document.getElementById("question").addEventListener("click",()=>l());function l(){i.innerHTML="",c=[],s(),n(),t(),e(),$(c),p.currentTime=0,p.play()}function s(){const o=document.createElement("div");o.innerHTML="<h4>☆次の分数を真分数と仮分数に分けましょう。</h4>";const a=[],r=[],d=document.createElement("div");d.classList.add("fraction-container");for(let h=0;h<4;h++){const f=Math.floor(Math.random()*8+2),u=Math.floor(Math.random()*7+3),M=document.createElement("div");M.classList.add("d-flex","fraction");const v=zt(h);M.appendChild(v);const b=w(f,u);M.appendChild(b);const y=document.createElement("div");y.classList.add("improper_fraction"),y.textContent="，",M.appendChild(y),f<u?a.push(ye[h]):r.push(ye[h]),d.appendChild(M)}const m=document.createElement("div");m.innerHTML="<h4>①真分数は（　　　　）,　②仮分数は（　　　　）</h4><br/>",i.appendChild(o),i.appendChild(d),i.appendChild(m),c.push(a,r)}function n(){const o=document.createElement("div");o.innerHTML="<h4>☆次の帯分数を仮分数になおしましょう。</h4>";const a=document.createElement("div");a.classList.add("fraction-container");for(let r=4;r<8;r++){const d=Math.floor(Math.random()*7+3),m=Math.floor(Math.random()*(d-1)+1),h=Math.floor(Math.random()*3+1),f=h*d+m;c[r-2]=`
       <div  class="d-flex fraction">
         <div>
           <span class="numerator">${f}</span>
           <span class="denominator">${d}</span>
         </div>
       </div>`;const u=document.createElement("div");u.classList.add("d-flex","fraction");const M=B(r-2);u.appendChild(M);const v=S(h);u.appendChild(v);const b=w(m,d);u.appendChild(b);const y=document.createElement("div");y.classList.add("fraction-equal"),y.textContent="＝　　",u.appendChild(y),a.appendChild(u)}i.appendChild(o),i.appendChild(a)}function t(){const o=document.createElement("div");o.innerHTML="<br/><h4>☆次の数の大きさをくらべ、等号や不等号を使って<br/>　式に表しましょう。</h4>",i.appendChild(o);const a=document.createElement("div");a.classList.add("fraction-container");for(let r=8;r<11;r++){const d=Math.floor(Math.random()*8+2);let m;r===10?m=0:m=Math.floor(Math.random()*(d-1)+1);const h=Math.floor(Math.random()*3+1);let f;r!==10?f=h*d+m:f=h*d;const u=Math.floor(Math.random()*f+d);f>u?c[r-2]=">":f<u?c[r-2]="<":f===u&&(c[r-2]="=");const M=document.createElement("div");M.classList.add("d-flex","fraction");const v=B(r-2);M.appendChild(v);const b=S(h);if(M.appendChild(b),r!==10){const g=w(m,d);M.appendChild(g)}const y=document.createElement("div");y.classList.add("square"),y.textContent="　",M.appendChild(y);const _=w(u,d);M.appendChild(_);const L=document.createElement("div");L.classList.add("improper_fraction"),L.textContent="　　",M.appendChild(L),a.appendChild(M)}i.appendChild(o),i.appendChild(a)}function e(){const o=document.createElement("div");o.innerHTML="<br/><h4>☆次の計算をしましょう。</h4>",i.appendChild(o);const a=document.createElement("div");a.classList.add("fraction-container");for(let r=11;r<19;r++){let d,m,h,f,u;r<14?(h=Math.floor(Math.random()*7+3),d=Math.floor(Math.random()*(h-3)+2),m=Math.floor(Math.random()*(h-2)+1),u=Math.floor(d+m),f=Math.floor(Math.random()*3+1)):r>13&&r<17?(h=Math.floor(Math.random()*5+5),d=Math.floor(Math.random()*(h-4)+3),m=Math.floor(Math.random()*(d-2)+1),u=d-m):r>16&&(h=Math.floor(Math.random()*5+5),m=Math.floor(Math.random()*(h-4)+3),d=Math.floor(Math.random()*(m-2)+1),f=1,u=h*f+d-m),h!==u?c[r-2]=`
      <div  class="d-flex fraction">
       <div>
        <span class="numerator">${u}</span>
        <span class="denominator">${h}</span>
       </div>
       </div>`:c[r-2]=`
        <div  class="d-flex fraction">
        <div>
         <span class="numerator">${u}</span>
         <span class="denominator">${h}</span>
        </div>
       <div class="improper_fraction">(1)</div>
      </div>`;const M=document.createElement("div");M.classList.add("d-flex","fraction");const v=B(r-2);if(M.appendChild(v),r>15){const T=S(f);M.appendChild(T)}const b=w(d,h);M.appendChild(b);const y=["+","+","+","-","-","-","-","-"],_=document.createElement("div");_.classList.add("improper_fraction"),_.textContent=y[r-11],M.appendChild(_);const L=w(m,h);M.appendChild(L);const g=document.createElement("div");g.classList.add("fraction-equal"),r<17?g.textContent="＝　　　":g.textContent="＝　　　　　　　",M.appendChild(g),a.appendChild(M)}i.appendChild(a)}l()}function jt(){const c=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮","⑯","⑰","⑱","⑲","⑳"],i=document.getElementById("TBL");document.getElementById("question").addEventListener("click",()=>l());function l(){i.innerHTML="";const s=[];p.currentTime=0,p.play();let n,t,e,o;for(let a=0;a<8;a++){const r=document.createElement("div");switch(n=Math.floor(Math.random()*8+2),t=Math.floor(Math.random()*8+2),e=Math.floor(Math.random()*8+2),o=Math.floor(Math.random()*8+2),a){case 0:case 1:r.innerHTML=`
          <h5 style="width:18cm;">${c[a]}　1辺の長さが${n}cmの立方体の体積は何cm³ですか？</h5>
          `,s[a]=`${n*n*n}cm³`;break;case 2:case 3:r.innerHTML=`
          <h5 style="width:18cm;">${c[a]}　縦${n}cm、横${t}cm、高さ${e}cmの直方体の体積は何cm³ですか？</h5>
          `,s[a]=`${n*t*e}cm³`;break;case 4:r.innerHTML=`
          <h5 style="width:18cm;">${c[a]}　底辺${n}cm、高さ${t}cmの直角三角形が底面で、<br/>　　高さが${e}cmの立体の体積は何cm³ですか？</h5>`,s[a]=`${n*t*e/2}cm³`;break;case 5:r.innerHTML=`
          <h5 style="width:18cm;">${c[a]}　上底${n}cm、下底${t}cm、高さ${e}cmの台形が底面で、<br/>　　高さが${o}cmの立体の体積は何cm³ですか？</h5>`,s[a]=`${(n+t)*e/2*o}cm³`;break;case 6:r.innerHTML=`
          <h5 style="width:18cm;">${c[a]}　半径${n}cmの円が底面で、<br/>　　高さが${t}cmの円柱の体積は何cm³ですか？</h5>`,s[a]=`${Math.floor(n*n*t*314)/100}cm³`;break;case 7:r.innerHTML=`
          <h5 style="width:18cm;">${c[a]}　直方体の体積が${n*t*e}cm³で、縦${n}cm、横${t}cmのとき、<br/>　　高さは何cmですか？</h5>`,s[a]=`${e}cm`;break}r.innerHTML=`
      ${r.innerHTML}
      <h5>　式</h5>
      <h5 style="text-align:right">答え（　　　　　　　　）</h5>
      </div>`,i.appendChild(r)}$(s)}l()}const Rt=["整数×小数","小数×小数","小数×小数(2)"],X="×";function Xt(){let c="0";E(Rt),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a;for(;t.length<9;){switch(c){case"0":{e=Math.floor(Math.random()*90+10),o=Math.floor(Math.random()*70+10)/10,Number.isInteger(o)&&(o=Math.min(o+e/10,9.9));break}case"1":{e=Math.floor(Math.random()*90+10)/10,Number.isInteger(e)&&(e=Math.min(e+e/10,9.9)),o=Math.floor(Math.random()*90+10)/10,Number.isInteger(o)&&(o=Math.min(o+o/10,9.9));break}case"2":e=Math.floor(Math.random()*900+100)/100,(Number.isInteger(e)||Number.isInteger(e*10))&&(e=Math.min(e+.01,9.99)),o=Math.floor(Math.random()*90+10)/10,Number.isInteger(o)&&(o=Math.min(o+o/10,9.9))}a=e*o,a=Math.round(a*1e3)/1e3;const r=+(e*100+o);k(r,t)&&(t.push(r),l.push(e),s.push(o),n.push(a))}switch(c){case"0":G(l,X,s,3);break;case"1":G(l,X,s,3);break;case"2":Qe(l,X,s,3);break}$(n)}}const Vt=["割り切れるまで","四捨五入","商とあまり"];function Yt(){let c="0";E(Vt),i(),select.addEventListener("change",()=>{c=select.value,i()}),document.getElementById("question").addEventListener("click",()=>i());function i(){comment.innerHTML="数値がおかしい場合は、もう一度「もんだい」をおして、変えてください。";const l=[],s=[],n=[],t=[];p.currentTime=0,p.play();let e,o,a,r;for(;t.length<20;){switch(c){case"0":{document.getElementById("header-comment").innerHTML=`
          <h5>☆　割り切れるまで計算しましょう。</h5>`,o=Math.floor(Math.random()*99)/10,Number.isInteger(o)&&(o=o+.1),a=Math.floor(Math.random()*99)/10,e=Math.floor(o*a*100*1.0001)/100,r="÷";break}case"1":{document.getElementById("header-comment").innerHTML=`
          <h5>☆　商を四捨五入で「十分の一」の位までのがい数で表しましょう。</h5>`,e=Math.floor(Math.random()*899+100)/100,o=Math.floor(Math.random()*89+10)/10,Number.isInteger(o)&&(o=o+.1),a=Math.round(e/o*10)/10,Number.isInteger(o)&&(o=o+.1),console.log(o),r="÷";break}case"2":{document.getElementById("header-comment").innerHTML=`
          <h5>☆　整数の商とあまりを求めましょう。</h5>`,e=Math.floor(Math.random()*399+500)/10,o=Math.floor(Math.random()*(e-11)/2+11)/10,Number.isInteger(o)&&(o=o+.1);let h=e%o;Number.isInteger(h)||(h=h.toFixed(1)),h===0?a=Math.floor(e/o):a=`${Math.floor(e/o)}あまり${h}`,r="÷";break}}const d=+(e*100+o);k(d,t)&&(t.push(d),l.push(e),s.push(o),n.push(a))}O(l,r,s),n.splice(9,11),$(n)}}function Gt(){let c=[];const i=document.getElementById("TBL");document.getElementById("question").addEventListener("click",()=>l());function l(){i.innerHTML="",comment.innerHTML="数値がおかしい場合は、もう一度「もんだい」をおして、変えてください。",c=[],s(),n(),t(),$(c),p.currentTime=0,p.play()}function s(){const e=document.createElement("div");e.innerHTML="<h3>☆次の分数を約分しましょう。</h3>";const o=document.createElement("div");o.classList.add("fraction-container");for(let a=0;a<4;a++){const r=Math.floor(Math.random()*4+2);let d=Math.floor(Math.random()*7+2)*r;const m=Math.floor(Math.random()*7+2)*r;d===m&&(d=+r);const[h,f]=x(d,m);f!==1?c[a]=`
            <div  class="d-flex fraction">
             <div>
              <span class="numerator">${h}</span>
              <span class="denominator">${f}</span>
             </div>
            </div>`:c[a]=`
            <div  class="d-flex fraction">
             <div class="improper_fraction">${h}</div>
            </div>`;const u=document.createElement("div");u.classList.add("d-flex","fraction");const M=B(a);u.appendChild(M);const v=w(d,m);u.appendChild(v);const b=document.createElement("div");b.classList.add("fraction-equal"),b.textContent="＝　　　",u.appendChild(b),o.appendChild(u)}i.appendChild(e),i.appendChild(o)}function n(){const e=document.createElement("div");e.innerHTML="<br/><h3>☆次の分数を通分して比べ、等号や不等号を使って<br/>　表しましょう。</h3>";const o=document.createElement("div");o.classList.add("fraction-container");for(let a=0;a<6;a++){const r=Math.floor(Math.random()*2+2),d=Math.floor(Math.random()*14+2),m=Math.floor(Math.random()*14+2),h=Math.floor(Math.random()*7+2)*r;let f=Math.floor(Math.random()*7+2)*r;h===f&&(f=+r),d/h>m/f?c[a+4]=">":d/h<m/f?c[a+4]="<":d/h===m/f&&(c[a+4]="=");const u=document.createElement("div");u.classList.add("d-flex","fraction");const M=B(a+4);u.appendChild(M);const v=w(d,h);u.appendChild(v);const b=document.createElement("div");b.classList.add("square"),b.textContent="　",u.appendChild(b);const y=w(m,f);if(u.appendChild(y),a!==5){const _=document.createElement("div");_.classList.add("improper_fraction"),_.textContent="　　",u.appendChild(_)}o.appendChild(u)}i.appendChild(e),i.appendChild(o)}function t(){const e=document.createElement("div");e.innerHTML="<br/><h3>☆次の計算をしましょう。</h3>";const o=document.createElement("div");o.classList.add("fraction-container");for(let a=0;a<8;a++){let r,d,m,h,f,u,M;if(f=Math.floor(Math.random()*2+2),r=Math.floor(Math.random()*8+2),m=Math.floor(Math.random()*7+2)*f,d=Math.floor(Math.random()*8+2),h=Math.floor(Math.random()*7+2)*f,r===m&&(m=+f),d===h&&(h=+f),m===h&&(h=+f),[r,m]=x(r,m),[d,h]=x(d,h),m===1&&(m=4,r=7),h===1&&(h=8,d=3),r/m<d/h){const H=d;d=r,r=H;const I=h;h=m,m=I}a<4?[u,M]=St(r,m,d,h):a>3&&([u,M]=Wt(r,m,d,h)),[u,M]=x(u,M),M!==1?c[a+10]=`
      <div  class="d-flex fraction">
       <div>
        <span class="numerator">${u}</span>
        <span class="denominator">${M}</span>
       </div>
      </div>`:c[a+10]=`
      <div  class="d-flex fraction">
       <div class="improper_fraction">${u}</div>
      </div>`;const v=document.createElement("div");v.classList.add("d-flex","fraction");const b=B(a+10);v.appendChild(b);const y=w(r,m);v.appendChild(y);const _=["+","+","+","+","-","-","-","-"],L=document.createElement("div");L.classList.add("improper_fraction"),L.textContent=_[a],v.appendChild(L);const g=w(d,h);v.appendChild(g);const T=document.createElement("div");T.classList.add("fraction-equal"),T.textContent="＝　　　　　　　",v.appendChild(T),o.appendChild(v)}i.appendChild(e),i.appendChild(o)}l()}function Jt(){const c=document.getElementById("TBL");document.getElementById("question").addEventListener("click",()=>i());function i(){c.innerHTML="";const l=[];p.currentTime=0,p.play();let s,n,t,e,o,a,r,d,m,h,f,u;const M=document.createElement("div");s=Math.floor(Math.random()*4+5),n=Math.floor(Math.random()*4+4),s===n&&(n=n+1),t=Math.floor(Math.random()*4+5),e=Math.floor(Math.random()*4+4),t===e&&(e=e+1),o=Math.floor(Math.random()*20+11),a=Math.floor(Math.random()*20+11),r=Math.floor(Math.random()*20+11),d=`
    Aのみかんは${s}こで480円、Bのみかんは${n}こで360円です。</br>
    　１こあたりのねだんが高いのはどちらのみかんですか。</br>
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `;const v=240/s,b=200/n;v>b?l[0]="Aのみかん":v<b?l[0]="Bのみかん":l[0]="同じ",m=`
    Cさんは240ページの本を${s}日で読み、</br>
    　Dさんは200ページの本を${n}日で読みました。</br>
    　１日あたりの読んだページ数が多いのはどちらですか。</br>
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `;const y=240/t,_=200/e;y>_?l[1]="Cさん":y<_?l[1]="Dさん":l[1]="同じ",h=`
    E町の面積は 120 ㎢で、人口は ${o*1200}人います。</br>
    　この町の人口密度を（四捨五入して、整数で）求めなさい。 
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `;const L=Math.floor(o*1200/120);l[2]=L+"人",f=`
    花だんに、１㎡あたり12個の球根を植えます。</br>
    　${a}㎡の花だんでは、球根は何個植えられますか。
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `,l[3]=a*12+"個",u=`
    １Lのガソリンで18km走る車があります。</br>
    　この車が${18*r}km走るには、何Lのガソリンが必要ですか。
    <h5> しき</h5>
    </br>
    <h5 style="text-align:right;">こたえ（　　　　　　　　　　）</h5>
    `,l[4]=r+"L",M.innerHTML=`
    <h5 style="width:18cm;">①　${d}</h5>
    <br/>
    <h5 style="width:18cm;">②　${m}</h5>
    <br/>
    <h5 style="width:18cm;">③　${h}</h5>
    <br/>
    <h5 style="width:18cm;">④　${f}</h5>
    <br/>
    <h5 style="width:18cm;">⑤　${u}</h5>
    <br/>
    `,c.appendChild(M),$(l)}i()}function Kt(){let c=[];const i=document.getElementById("TBL");let l,s,n,t;document.getElementById("question").addEventListener("click",()=>e());function e(){i.innerHTML="",comment.innerHTML="数値がおかしい場合は、もう一度「もんだい」をおして、変えてください。",c=[],o(),a(),r(),$(c),p.currentTime=0,p.play()}function o(){const d=document.createElement("div");d.innerHTML="<h3>☆商を分数で表しましょう。</h3>",i.appendChild(d);const m=document.createElement("div");m.classList.add("fraction-container");for(let h=0;h<6;h++){l=Math.floor(Math.random()*7+2),s=Math.floor(Math.random()*7+2),[n,t]=x(l,s);const f=document.createElement("div");f.classList.add("d-flex","fraction");const u=B(h);f.appendChild(u);const M=document.createElement("div");M.classList.add("improper_fraction"),M.innerHTML=`
      ${l}÷${s}
      `,f.appendChild(M);const v=document.createElement("div");v.classList.add("fraction-equal"),v.textContent="＝　　　",f.appendChild(v),t!==1?c[h]=`
            <div  class="d-flex fraction">
             <div>
              <span class="numerator">${n}</span>
              <span class="denominator">${t}</span>
             </div>
            </div>`:c[h]=`
            <div  class="d-flex fraction">
             <div class="improper_fraction">${n}</div>
            </div>`,m.appendChild(f)}i.appendChild(m)}function a(){const d=document.createElement("div");d.innerHTML="<br/><h3>☆分数を小数で表しましょう。</h3>",i.appendChild(d);const m=document.createElement("div");m.classList.add("fraction-container");for(let h=0;h<8;h++){const f=[2,4,5],u=Math.floor(Math.random()*3);l=Math.floor(Math.random()*20+2),s=f[u],[n,t]=x(l,s),t===1&&(t=2),c[h+6]=n/t;const M=document.createElement("div");M.classList.add("d-flex","fraction");const v=B(h+6);M.appendChild(v);const b=w(n,t);M.appendChild(b);const y=document.createElement("div");y.classList.add("fraction-equal"),y.textContent="＝　　　　　　　　　",M.appendChild(y),m.appendChild(M)}i.appendChild(m)}function r(){const d=document.createElement("div");d.innerHTML="<br/><h3>☆小数を分数で表しましょう。</h3>",i.appendChild(d);const m=document.createElement("div");m.classList.add("fraction-container");for(let h=0;h<6;h++){l=Math.floor(Math.random()*99+2),s=100,[n,t]=x(l,s),c[h+14]=`
      <div  class="d-flex fraction">
        <div>
          <span class="numerator">${n}</span>
          <span class="denominator">${t}</span>
        </div>
      </div>`;const f=document.createElement("div");f.classList.add("d-flex","fraction"),f.style.width="30%";const u=B(h+14);f.appendChild(u);const M=document.createElement("div");M.classList.add("improper_fraction"),M.innerHTML=`
      ${l/100}
      `,f.appendChild(M);const v=document.createElement("div");v.classList.add("fraction-equal"),v.textContent="＝　　　",f.appendChild(v),m.appendChild(f)}i.appendChild(m)}e()}function Qt(){const c=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮","⑯","⑰","⑱","⑲","⑳"],i=document.getElementById("TBL");document.getElementById("question").addEventListener("click",()=>l());function l(){i.innerHTML="";const s=[];p.currentTime=0,p.play();let n,t,e;for(let o=0;o<8;o++){const a=document.createElement("div");switch(n=Math.floor(Math.random()*8+2),t=Math.floor(Math.random()*8+2),e=Math.floor(Math.random()*4+2),o){case 0:a.innerHTML=`
          <h5 style="width:18cm;">${c[o]}　自動車が時速${n*10}kmで${t}時間進んだとき、道のりは何kmですか。</h5>
          `,s[o]=`${n*t*10}km`;break;case 1:a.innerHTML=`
          <h5 style="width:18cm;">${c[o]}　${n*t}mの道のりを${n}秒で進んだとき、速さは秒速何mですか。</h5>
          `,s[o]=`秒速${t}m`;break;case 2:a.innerHTML=`
          <h5 style="width:18cm;">${c[o]}　${n*t*10}mの道のりを分速${n*10}mで進んだとき、かかった時間は何分ですか。</h5>
          `,s[o]=`${t}分`;break;case 3:a.innerHTML=`
          <h5 style="width:18cm;">${c[o]}　時速${e*12}kmは、分速何mですか。</h5>
          `,s[o]=`分速${e*200}m`;break;case 4:a.innerHTML=`
          <h5 style="width:18cm;">${c[o]}　秒速${n}mは、時速何kmですか。</h5>
          `,s[o]=`時速${n*3600/1e3}km`;break;case 5:a.innerHTML=`
          <h5 style="width:18cm;">${c[o]}　時速720kmの飛行機が${t}秒進んだとき、道のりは何kmですか。</h5>
          `,s[o]=`${t/5}km`;break;case 6:a.innerHTML=`
          <h5 style="width:18cm;">${c[o]}　${n*200}mの道のりを12分で進んだとき、速さは時速何kmですか。</h5>
          `,s[o]=`時速${n}km`;break;case 7:a.innerHTML=`
          <h5 style="width:18cm;">${c[o]}　${n*t}kmの道のりを時速${n*10}kmで進んだとき、かかった時間は何分ですか。</h5>
          `,s[o]=`${t*6}分`;break}a.innerHTML=`
      ${a.innerHTML}
      <h5>　式</h5>
      <h5 style="text-align:right">答え（　　　　　　　　）</h5>
      </div>`,i.appendChild(a)}$(s)}l()}function Ut(){const c=document.getElementById("TBL");c.style.lineHeight="1.7",c.style.fontSize="18px",document.getElementById("question").addEventListener("click",()=>i()),i();function i(){c.innerHTML="";const n=[];p.currentTime=0,p.play();const t=Math.floor(Math.random()*4+3),e=Math.floor(Math.random()*4+6),a=`(１)  １辺の長さが xcmの、${["正三角形","正方形","正五角形","正六角形"][t-3]}があります。`,r=document.createElement("div");r.innerHTML=`　①　周りの長さを ycm として、xとyの関係を式に表しましょう。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`,n[0]=`x×${t}＝y`;const d=document.createElement("div"),m=3;d.innerHTML=`　②　xの値を3,4,5,6,…としたとき、<br>
                         　　　それぞれに対応するyの値を求めて、表にかきましょう。`,n[1]=`${t*3},${t*4},${t*5},${t*6}`;const h=document.createElement("div");h.innerHTML=`　③　yの値が${t*e}となるxの値を求めましょう。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）<br><br>`,n[2]=`x=${e}`,l(a,m,A=>A*t,r,d,h);const f=Math.floor(Math.random()*4+2)*2,u=Math.floor(Math.random()*4+10),M=`(２)  底辺の長さが ${f}cmの三角形があります。`,v=document.createElement("div");v.innerHTML=`　④　高さを xcm 、面積をy㎠として、xとyの関係を式に表しましょう。<br>
                  　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`,n[3]=`${f}×x÷2＝y`;const b=document.createElement("div"),y=7;b.innerHTML=`　⑤　xの値を7,8,9,10,…としたとき、<br>
                     　　　それぞれに対応するyの値を求めて、表にかきましょう。`,n[4]=`${f*7/2},${f*8/2},${f*9/2},${f*10/2},`;const _=document.createElement("div");_.innerHTML=`　⑥　yの値が${f*u/2}となるxの値を求めましょう。<br>
                  　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）<br><br>`,n[5]=`x=${u}`,l(M,y,A=>A*f/2,v,b,_);const L=document.createElement("div"),g=Math.floor(Math.random()*4+4),T=Math.floor(Math.random()*4+2)*100,H=`水がxmL入った水そうに${T}mLの水を${g}回入れたときの全体の水の量<br>
                    　　　　　　　　　　　　　　　　　　　式（　　　　　　　　　　　　　）<br>`,I=`重さxgのボール${g}個を${T}gの箱に入れたときの全体の重さ<br>
                    　　　　　　　　　　　　　　　　　　　式（　　　　　　　　　　　　　）<br>`,j=`x円のクッキー１まいと、${T}円のケーキ１こを組にして${g}組買ったときの代金<br>
                    　　　　　　　　　　　　　　　　　　　式（　　　　　　　　　　　　　）<br>`,N=[H,I,j],z=[`x+${T}×${g}`,`x×${g}+${T}`,`(x+${T})×${g}`],q=s();L.innerHTML=`
    <div>(３)　次のことがらを式であらわしましょう。
    <div>　⑦ ${N[q[0]]}</div>
    <div>　⑧ ${N[q[1]]}</div>
    <div>　⑨ ${N[q[2]]}</div>
    `,n[6]=z[q[0]],n[7]=z[q[1]],n[8]=z[q[2]],c.appendChild(L),$(n)}function l(n,t,e,o,a,r){const d=document.createElement("div");d.innerHTML=n,c.appendChild(d),c.appendChild(o),c.appendChild(a);const m=document.createElement("table");m.style.marginLeft="50px";for(let h=0;h<2;h++){const f=document.createElement("tr");for(let u=0;u<6;u++){const M=document.createElement("td");M.classList="graphTd",h===0&&u===0&&(M.innerText="x(cm)",M.style.width="100px"),h===1&&u===0&&(M.innerText="y(cm)"),h===0&&u!==0&&(M.innerText=u+t-1),u===5&&(M.innerText="…"),f.appendChild(M)}m.appendChild(f)}c.appendChild(m),c.appendChild(r)}function s(){const n=[];let t=[0,1,2];for(let e=0;e<3;e++)n.push(...t.splice(Math.floor(Math.random()*t.length-1),1));return n}}const Zt=["分数×整数","分数×分数","帯分数×分数","帯分数×帯分数"];function en(){let c="0";E(Zt),select.addEventListener("change",()=>{c=select.value,l()});const i=document.getElementById("TBL");document.getElementById("question").addEventListener("click",()=>l());function l(){comment.innerHTML="数値がおかしい場合は、もう一度「もんだい」をおして、変えてください。",i.innerHTML="";const s=[];p.currentTime=0,p.play();let n,t,e,o,a,r;const d=document.createElement("div");for(let m=0;m<10;m++){let h,f;switch(n=Math.floor(Math.random()*2+1),e=Math.floor(Math.random()*7+3),t=Math.floor(Math.random()*(e-1)+1),o=Math.floor(Math.random()*2+1),r=Math.floor(Math.random()*7+3),a=Math.floor(Math.random()*(r-1)+1),c){case"0":{n=0,o=Math.floor(Math.random()*5+1),a=0,r=1;break}case"1":{n=0,o=0;break}case"2":{Math.floor(Math.random()*2)===0?(n=Math.floor(Math.random()*5+1),o=0):(n=0,o=Math.floor(Math.random()*3+1));break}}t===e&&(e=1),[t,e]=x(t,e),e===1&&(e=7),a===r&&(r=1),[a,r]=x(a,r),r===1&&(r=5),[h,f]=Dt(n,t,e,o,a,r),f!==1?s[m]=`
            <div  class="d-flex fraction">
             <div>
              <span class="numerator">${h}</span>
              <span class="denominator">${f}</span>
             </div>
            </div>`:s[m]=`
            <div  class="d-flex fraction">
             <div class="improper_fraction">${h}</div>
            </div>`;const u=$e(n,t,e,o,a,r,m,"×");d.appendChild(u),$(s),i.appendChild(d)}}l()}const tn=["分数÷整数","分数÷分数","帯分数÷分数","帯分数÷帯分数"];function nn(){let c="0";E(tn),select.addEventListener("change",()=>{c=select.value,l()});const i=document.getElementById("TBL");document.getElementById("question").addEventListener("click",()=>l());function l(){comment.innerHTML="数値がおかしい場合は、もう一度「もんだい」をおして、変えてください。",i.innerHTML="";const s=[];p.currentTime=0,p.play();let n,t,e,o,a,r;console.log(c);const d=document.createElement("div");for(let m=0;m<10;m++){let h,f;switch(n=Math.floor(Math.random()*2+1),e=Math.floor(Math.random()*7+3),t=Math.floor(Math.random()*(e-1)+1),o=Math.floor(Math.random()*2+1),r=Math.floor(Math.random()*7+3),a=Math.floor(Math.random()*(r-1)+1),c){case"0":{n=0,o=Math.floor(Math.random()*5+1),a=0,r=1;break}case"1":{n=0,o=0;break}case"2":{Math.floor(Math.random()*2)===0?(n=Math.floor(Math.random()*5+1),o=0):(n=0,o=Math.floor(Math.random()*3+1));break}}t===e&&(e=1),[t,e]=x(t,e),e===1&&(e=7),a===r&&(r=1),[a,r]=x(a,r),r===1&&(r=5),[h,f]=Ft(n,t,e,o,a,r),f!==1?s[m]=`
            <div  class="d-flex fraction">
             <div>
              <span class="numerator">${h}</span>
              <span class="denominator">${f}</span>
             </div>
            </div>`:s[m]=`
            <div  class="d-flex fraction">
             <div class="improper_fraction">${h}</div>
            </div>`;const u=$e(n,t,e,o,a,r,m,"÷");d.appendChild(u),$(s),i.appendChild(d)}}l()}function an(){const c=document.getElementById("TBL");c.style.lineHeight="1.6",c.style.fontSize="18px",document.getElementById("question").addEventListener("click",()=>i()),i();function i(){c.innerHTML="";const n=[];p.currentTime=0,p.play();const t=Math.floor(Math.random()*4+3),e=Math.floor(Math.random()*4+6),a=`(１)  次の表は、${["正三角形","正方形","正五角形","正六角形"][t-3]}で、１辺の長さをいろいろに変えたときの、<br>
                    1辺の長さ xcm と、周りの長さ y cm の関係を表したものです。`,r=document.createElement("div");r.innerHTML=`　①　1辺の長さ xcm と周りの長さ ycm は比例しますか、反比例しますか？<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`,n[0]="比例する";const d=document.createElement("div");d.innerHTML=`　②　x と y の関係を式に表しましょう。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`,n[1]=`y=${t}×x<br>　　(x×${t}＝y)`;const m=document.createElement("div");m.innerHTML=`　③　1辺の長さが${e}cmのとき、周りの長さは、何cmになりますか。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）<br><br>`,n[2]=`${t*e}cm`,l(a,R=>R*t,r,d,m);const h=Math.floor(Math.random()*4+1)*18,f=Math.floor(Math.random()*3+1)*6,u=`(2)  次の表は、面積が決まっている三角形で、底辺の長さをいろいろに<br>　　変えたときの
                    底辺の長さ xcm と、高さ y cm の関係を表したものです。`,M=document.createElement("div");M.innerHTML=`　④　底辺の長さ xcm と高さ ycm は比例しますか、反比例しますか？<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`,n[3]="反比例する";const v=document.createElement("div");v.innerHTML=`　⑤　x と y の関係を式に表しましょう。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）`,n[4]=`y=${h}÷x <br>　　(x×y=${h})`;const b=document.createElement("div");b.innerHTML=`　⑥　底辺の長さが${f}cmのとき、高さは、何cmになりますか。<br>
                      　　　　　　　　　　　　　　　　　　答え（　　　　　　　　　　　　　）<br><br>`,n[5]=`${h/f}cm`,l(u,R=>h/R,M,v,b);const y=document.createElement("div"),_=Math.floor(Math.random()*8+2),L=Math.floor(Math.random()*4+2),g=Math.floor(Math.random()*8+2),T=Math.floor(Math.random()*8+2),H=Math.floor(Math.random()*8+2),I=`底辺が ${_}cm の三角形の高さ x (cm)と面積 y (㎠)`,j=`面積が ${L*6}(㎠) の平行四辺形の底辺x(cm)と高さ y (cm)`,N=`1mあたり${g*20}円のリボンの長さ x (m)と代金 y (円)`,z=`${T*6}kmの道のりを移動するときの、時速 x (km)と y (時間)`,q=`${H*2}cm のろうそくに火をつけたときの、時間 x (分)と長さ y (cm)`,A=[I,j,N,z,q],F=["○","△","○","△","×"],P=s();y.innerHTML=`
    <div>(３)　比例…〇、反比例…△、どちらでもない…×の記号をつけましょう。</div>
    <div>　⑦（　　）${A[P[0]]}</div>
    <div>　⑧（　　）${A[P[1]]}</div>
    <div>　⑨（　　）${A[P[2]]}</div>
    <div>　⑩（　　）${A[P[3]]}</div>
    `,n[6]=F[P[0]],n[7]=F[P[1]],n[8]=F[P[2]],n[9]=F[P[3]],c.appendChild(y),$(n)}function l(n,t,e,o,a){const r=document.createElement("div");r.innerHTML=n,c.appendChild(r);const d=document.createElement("table");d.style.marginLeft="50px";for(let m=0;m<2;m++){const h=document.createElement("tr");for(let f=0;f<7;f++){const u=document.createElement("td");u.classList="graphTd",m===0&&f===0&&(u.innerText="x(cm)",u.style.width="100px"),m===1&&f===0&&(u.innerText="y(cm)"),m===0&&f!==0&&(u.innerText=f),m===1&&f!==0&&(u.innerText=t(f)),f===6&&(u.innerText="…"),h.appendChild(u)}d.appendChild(h)}c.appendChild(d),c.appendChild(e),c.appendChild(o),c.appendChild(a)}function s(){const n=[];let t=[0,1,2,3,4];for(let e=0;e<5;e++)n.push(...t.splice(Math.floor(Math.random()*t.length-1),1));return n}}const V=["なんばんめ","たしざん（１）","ひきざん（１）","なんじ　なんじはん","３つの　かずの　けいさん","たしざん（２）","ひきざん（２）","ものの　ひとと　かず","なんじ　なんぷん","たすのかな　ひくのかな","１００までのかずのけいさん","ひょう・グラフ","たし算とひき算のひっ算（１）","１０００までの数","たし算とひき算のひっ算（２）","かけ算（１）","かけ算（２）","１００００までの数","かさ・長さのたんい","わり算","時こくと時間","あまりのあるわり算","１けたをかけるかけ算の筆算","２けたをかけるかけ算の筆算","１けたでわるわり算の筆算","２けたでわるわり算の筆算","小数のかけ算やわり算","分数","体積","小数のかけ算","小数のわり算","分数（１）","単位量あたりの大きさ","分数（２）","速さ","文字と式","分数×分数","分数÷分数","比例と反比例"];function on(){document.getElementById("title-header").innerHTML=`<div id="mainTitle" class="h3 text-center">
      <i class="fas fa-cat"></i>
      じみぷり（地味に助かる学習プリント）
      <i class="fas fa-cat"></i>
   </div>`;for(let c=0;c<V.length;c++){const i=document.createElement("button"),l=document.getElementById("zoom").value;i.classList.add("btn","btn-outline-primary"),i.style.fontSize=`${l/100*16}px`,i.style.textAlign="left",i.innerHTML=`${c+1}　${V[c]}`,i.addEventListener("click",()=>{document.getElementById("mainTitle").innerHTML="",document.getElementById("contents-menu").innerHTML="",document.getElementById("comment").innerHTML="",document.getElementById("title-header").innerHTML=`
      <tr>
        <td id="title">${c+1}　${V[c]}</td>
        <td id="grade">
         <ruby>名前 <rp>(</rp><rt>なまえ</rt><rp>)</rp></ruby>
       </td>
      </tr>
     `,rn(c)}),document.getElementById("contents-menu").appendChild(i)}}function rn(c){switch(c){case 0:_e();break;case 1:Ce();break;case 2:qe();break;case 3:Ae();break;case 4:ze();break;case 5:De();break;case 6:Re();break;case 7:Xe();break;case 8:Ve();break;case 9:Ye();break;case 10:Je();break;case 11:Ke();break;case 12:Ze();break;case 13:et();break;case 14:nt();break;case 15:st();break;case 16:dt();break;case 17:ht();break;case 18:mt();break;case 19:pt();break;case 20:vt();break;case 21:$t();break;case 22:kt();break;case 23:Et();break;case 24:Ct();break;case 25:Ht();break;case 26:At();break;case 27:Ot();break;case 28:jt();break;case 29:Xt();break;case 30:Yt();break;case 31:Gt();break;case 32:Jt();break;case 33:Kt();break;case 34:Qt();break;case 35:Ut();break;case 36:en();break;case 37:nn();break;case 38:an();break}}const be=window.innerWidth;be<768&&(document.getElementById("zoom").value=parseInt(be/768*100));document.body.style.zoom=document.getElementById("zoom").value/125;document.getElementById("zoom").addEventListener("change",()=>{document.body.style.zoom=document.getElementById("zoom").value/125});document.getElementById("print").addEventListener("click",()=>{const c=document.getElementById("zoom").value;document.body.style.zoom=1/1.25,window.print(),document.getElementById("zoom").value=c,document.body.style.zoom=document.getElementById("zoom").value/125});on();sn();function Le(){try{const c=localStorage.getItem("jimipri-initial-alert");if(!c)alert("スマホで印刷するときは、印刷前に倍率を100％に設定するか、ブラウザメニューから「PC版サイト」にチェックを入れるとうまく印刷できます。"),localStorage.setItem("jimipri-initial-alert",JSON.stringify({shown:!0,timestamp:new Date().getTime()}));else{const i=JSON.parse(c),l=new Date().getTime(),s=24*60*60*1e3;l-i.timestamp>s&&(localStorage.removeItem("jimipri-initial-alert"),Le())}}catch(c){console.warn("Alert check failed:",c)}}Le();function sn(){const c=new Date,i=c.getYear()+1900,l=c.getMonth()+1,s=c.getDate();document.getElementById("dateArea").innerHTML=`${i}/${l}/${s}`}
