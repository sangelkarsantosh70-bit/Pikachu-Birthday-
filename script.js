document.addEventListener("DOMContentLoaded",()=>{

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

const music = document.getElementById("bgMusic");

music.volume = 0.6;

music.play()
.then(()=>{

openEnvelope();

})
.catch(()=>{

openEnvelope();

});

});

createStars();

});

function openEnvelope(){

document.getElementById("screen1")
.classList.remove("active");

setTimeout(()=>{

document.getElementById("screen2")
.classList.add("active");

},700);

}

function openLetter(){

document.getElementById("screen2")
.classList.remove("active");

setTimeout(()=>{

document.getElementById("screen3")
.classList.add("active");

startTyping();

},700);

}

const message = `

But for me...
you'll always be Pikachu ⚡

Today I just felt like writing something,
almost like those old school letters again.

And honestly...
whenever I think about you,
one memory always comes first.

Those house dress evenings 🌆

That was the only time
I could see your hair open
and slightly styled.

And there was always
that tiny pink heart-shaped clip 💗

I still don't know why,
but that small detail stayed in my memory.

Running everywhere...
climbing trees...
laughing loudly...
bringing chaos everywhere 😭✨

You always felt like
a tiny Pikachu
with unlimited sparks ⚡

And honestly...

your smile had this strange way
of making ordinary days feel lighter.

Some people don't realize
how much comfort they bring
into someone's life
just by existing naturally.

You became one of those people for me.

Thank you for caring.

For worrying when I drove too fast 🛵

For staying beside me
during moments I couldn't explain properly.

For making me feel
less alone.

Maybe some people quietly become
a beautiful part of our life...

without even trying to.

And I think
you became that for me 💛

So on your birthday...

I just wanted to preserve
these memories somewhere ✨

Because honestly...

the world became warmer
the day you were born.

Happy Birthday once again,
Pikachu ⚡💛

`;

let i = 0;

function startTyping(){

const typing = document.getElementById("typing");

function write(){

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

if(message.charAt(i) === "."){
setTimeout(write,120);
}else{
setTimeout(write,35);
}

}else{

setTimeout(showFinalQuestion,3000);

}

}

write();

}

function showFinalQuestion(){

document.getElementById("screen3")
.classList.remove("active");

setTimeout(()=>{

document.getElementById("screen4")
.classList.add("active");

},1200);

}

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "💖";

heart.style.left =
Math.random()*100 + "vw";

heart.style.bottom = "-20px";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.animationDuration =
(Math.random()*3+4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},7000);

}

setInterval(createHeart,350);

function createSpark(){

const spark = document.createElement("div");

spark.classList.add("spark");

spark.innerHTML = "⚡";

spark.style.left =
Math.random()*100 + "vw";

spark.style.top =
Math.random()*100 + "vh";

spark.style.fontSize =
(Math.random()*15+10)+"px";

document.body.appendChild(spark);

setTimeout(()=>{
spark.remove();
},2000);

}

setInterval(createSpark,2500);

function createStars(){

for(let i=0;i<80;i++){

const star = document.createElement("div");

star.classList.add("star");

star.style.left =
Math.random()*100 + "vw";

star.style.top =
Math.random()*100 + "vh";

star.style.animationDuration =
(Math.random()*3+2)+"s";

document.body.appendChild(star);

}

}