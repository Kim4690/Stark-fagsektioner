(function(){

var landingpage = "https://bygtek.dk";

var words = [
"Tag",
"Vinduer & Døre",
"Facader",
"Energi",
"Installationer",
"Indeklima",
"Bæredygtighed",
"Materialer",
"Maskiner",
"Byggeplads",
"Sikkerhed",
"Projektering",
"Renovering",
"Gulve",
"Værktøj"
];

var banner = document.createElement("div");

banner.style.width = "100%";
banner.style.maxWidth = "1920px";
banner.style.aspectRatio = "1920/600";
banner.style.position = "relative";
banner.style.overflow = "hidden";
banner.style.cursor = "pointer";
banner.style.fontFamily = "Arial, sans-serif";

banner.innerHTML = `

<style>

.stark-bg{
position:absolute;
width:110%;
height:110%;
top:-5%;
left:-5%;
object-fit:cover;
animation:starkMove 80s ease-in-out infinite alternate;
}

@keyframes starkMove{
0%{transform:translate(0,0) scale(1);}
100%{transform:translate(-2%, -2%) scale(1.04);}
}

.word{
position:absolute;
color:#d9d9d9;
font-weight:bold;
font-size:clamp(18px,3vw,36px);
opacity:0;
transition:opacity 1s;
}

.word.show{
opacity:1;
}

.stark-cta{
position:absolute;
bottom:6%;
left:50%;
transform:translateX(-50%);
background:#f58220;
color:white;
font-weight:bold;
padding:14px 30px;
font-size:clamp(14px,2vw,22px);
animation:starkBlink 3s infinite;
}

@keyframes starkBlink{
0%,100%{opacity:1;}
50%{opacity:0.4;}
}

.stark-overlay{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:#f58220;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:clamp(18px,3vw,30px);
opacity:0;
transition:0.4s;
}

.stark-overlay.show{
opacity:1;
}

</style>

<img class="stark-bg" src="https://kim4690.github.io/STARK-fagsektioner/banner.jpg">

<div id="wordContainer"></div>

<div class="stark-cta">SE MERE</div>

<div class="stark-overlay">
Tak for at du klikkede på banneret
</div>

`;

document.body.appendChild(banner);

var container = banner.querySelector("#wordContainer");

var activeWords = [];

function addWord(){

var word = document.createElement("div");
word.className = "word";
word.innerText = words[Math.floor(Math.random()*words.length)];

word.style.left = (30 + Math.random()*40) + "%";
word.style.top = (25 + Math.random()*40) + "%";

container.appendChild(word);

setTimeout(()=>word.classList.add("show"),50);

activeWords.push(word);

if(activeWords.length > 5){

var oldWord = activeWords.shift();

oldWord.style.opacity = 0;

setTimeout(()=>oldWord.remove(),1000);

}

}

setInterval(addWord,1200);

banner.onclick = function(){

var overlay = banner.querySelector(".stark-overlay");

overlay.classList.add("show");

setTimeout(function(){
window.open(landingpage,"_blank");
},1800);

setTimeout(function(){
overlay.classList.remove("show");
},2200);

};

})();
