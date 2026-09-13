const SITE = {
  herName: "HER NAME",
  yourName: "YOUR NAME",
  secretPassword: "bubu",
  letter: `I don't know exactly when you became such an important part of my life.

Maybe it was one of our random conversations. Maybe it was one of those silly little moments we almost forgot.

But somewhere between all those moments, you became someone I never want to lose.

Thank you for every smile, every conversation, every laugh and every memory.

If life is a story, I hope we get to write many more chapters together.

And if I had to choose my favorite chapter...

It would always be the one with you. ❤️`
};

const $ = s => document.querySelector(s);

window.addEventListener("load", () => {
  setTimeout(() => { $("#loader").style.opacity="0"; setTimeout(()=>$("#loader").remove(),800); }, 650);
  $("#herNameDisplay").textContent = SITE.herName;
  $("#yourNameDisplay").textContent = SITE.yourName;
  typeLetter();
});

function typeLetter(){
  const el=$("#letterText"), text=SITE.letter;
  let i=0;
  const tick=()=>{ if(i<text.length){el.textContent+=text[i++]; setTimeout(tick,12)} };
  setTimeout(tick,700);
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

$("#unlockBtn").addEventListener("click",()=>{
  const value=$("#password").value.trim().toLowerCase();
  const msg=$("#secretMessage");
  if(value===SITE.secretPassword.toLowerCase()){
    msg.style.display="block";
    msg.textContent="You unlocked it! You are my favorite notification, my favorite conversation, and my favorite person. Always. ❤️";
    burst(35);
  }else{
    msg.style.display="block";
    msg.textContent="Hmm... not quite. Try the secret word again 😌";
  }
});

$("#password").addEventListener("keydown",e=>{if(e.key==="Enter")$("#unlockBtn").click()});
$("#themeBtn").addEventListener("click",()=>document.body.classList.toggle("light"));
$("#musicBtn").addEventListener("click",()=>{
  alert("Music is ready for your own song. Add an audio file and connect it here in script.js 🎵");
});
$("#surpriseBtn").addEventListener("click",()=>{burst(55); location.hash="forever"});
$("#celebrateBtn").addEventListener("click",()=>burst(100));

function burst(n){
  for(let i=0;i<n;i++){
    const h=document.createElement("span");
    h.className="heart-particle";
    h.textContent=["♥","♡","✦","❤"][Math.floor(Math.random()*4)];
    h.style.left=(Math.random()*100)+"vw";
    h.style.bottom="-30px";
    h.style.fontSize=(12+Math.random()*24)+"px";
    h.style.animationDuration=(1.7+Math.random()*1.8)+"s";
    h.style.opacity=.7+Math.random()*.3;
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),4000);
  }
}

document.addEventListener("mousemove",e=>{
  if(Math.random()>.94){
    const h=document.createElement("span");
    h.className="heart-particle";
    h.textContent="·";
    h.style.left=e.clientX+"px"; h.style.top=e.clientY+"px";
    h.style.animationDuration="1s";
    document.body.appendChild(h); setTimeout(()=>h.remove(),1100);
  }
});