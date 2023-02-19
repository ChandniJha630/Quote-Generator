const quotes=[{quote:"Be yourself; everyone else is already taken.",writer:"Oscar Wilde"
},{quote:'“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',writer:'Marilyn Monroe'
},{quote:'“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',writer:'Albert Einstein'
},{quote:'“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',writer:'Bernard M. Baruch'
},{quote:'“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.',writer:'JK Rowling'
},{quote:'A friend is someone who knows all about you and still loves you.',writer:'Elbert Hubbard'
},{quote:'To live is the rarest thing in the world. Most people exist, that is all.',writer:'Oscar Wilde'
},{quote:'Live as if you were to die tomorrow. Learn as if you were to live forever.',writer:' Mahatma Gandhi'
},{quote:'In a conflict between the heart and the brain, follow your heart.',writer:'Swami Vivekananda'
},{quote:'The greatest religion is to be true to your own nature. Have faith in yourselves.',writer:'Swami Vivekananda'
},{quote:'“The greatest sin is to think yourself weak”',writer:'Swami Vivekananda'
},];
const quote=document.querySelector('.q');
const writer=document.querySelector('#person');
const butn=document.querySelector('#btn');

//function quotegenerator(e){}
butn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    writer.innerText=quotes[random].writer;
    butn.innerText="Change Quote";  
});

