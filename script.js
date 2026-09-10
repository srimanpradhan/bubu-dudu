const $=s=>document.querySelector(s);

document.querySelectorAll(".reveal").forEach(el=>{
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}})
  },{threshold:.12}); io.observe(el);
});

function burst(count=18){
  const box=document.getElementById("hearts");
  for(let i=0;i<count;i++){
    const h=document.createElement("span"); h.className="floating-heart";
    h.textContent=["♥","♡","❤","✦"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"%"; h.style.fontSize=(12+Math.random()*25)+"px";
    h.style.animationDelay=Math.random()*.7+"s"; box.appendChild(h);
    setTimeout(()=>h.remove(),5500);
  }
}
$("#surpriseBtn").onclick=()=>{
  burst(28);
  document.getElementById("surpriseBtn").innerHTML="You found it ♡";
  setTimeout(()=>location.hash="letter",900);
};
$("#letterBtn").onclick=()=>{
  $("#hiddenLetter").style.display="block"; burst(12);
  $("#letterBtn").textContent="Keep this forever ♡";
};
$("#secretBtn").onclick=()=>{
  $("#secretBox").style.display="block"; burst(25);
  $("#secretBtn").textContent="Unlocked ❤️";
};
$("#yesBtn").onclick=()=>{
  $("#answer").textContent="Then it's a promise. Always us. ❤️";
  burst(45);
};
$("#loveBtn").onclick=()=>{
  $("#answer").textContent="And I love you more than this little website can say. 🥹";
  burst(30);
};
$("#galleryBtn").onclick=()=>{
  alert("Replace the four gallery backgrounds in style.css with your favourite photos. ❤️");
};

let playing=false;
$("#musicBtn").onclick=()=>{
  playing=!playing;
  $("#musicBtn").innerHTML=playing?"♫ Playing…":"♫ Music";
  // Browser-safe demo: add your own audio file later as music.mp3.
  if(playing) burst(8);
};
