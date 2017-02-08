var quotes = [

  {
    quote: "Programming is a one way of giving life, to your Imaginations.",
    source: "A.J. Bulanadi"
    
  },
  {
    quote: "Try not to become a man of success but a man of value.",
    source: "Albert Einstein"
    
  },
  {
    quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
    source: "Mahatma Ghandi"
    
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt"
    
  },
  {
   quote: "Enthusiasm is followed by disappoinment and even depression, and then by renewed enthusiam.",
    source: "Murray Gell-Mann"
    
  },
  {
    quote: "Its not stress that kills us, it is our reacton to it.",
    source: "Hans Selye"
   
  },
  {
    quote: "There is only one person who could ever make you happy, and that person is you.",
    source: "David Burns"
    
  },
  {
    quote: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    source: "Dale Carnegi"
    
  },{
    quote: "Even if you on the right track, you'll get run over if you just sit there.",
    source: "Will Rogers"
    
  },{
    quote: "Experience tells you what to do; confidence allows you to do it.",
    source: "Stan Smith"
    
  },{
    quote: "'Taking responsibility' is not hard; it is the 'deciding to' take responsibility that is hard.",
    source: "Thomas D. Willhite"
    
  },
  {
    quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    source: "Eddie Robinson"
  },
  {
    quote: "Expect nothing and accept everything and you will never be disappointed.",
    source: "Laurence Overmine"
    
  },
  {
    quote: "A word of encouragement during a failure is worth more than an hour of praise after success.",
    source: "Anonymous"
    
  },
  {
    quote: "Enthusiasm is nothing more or les than faith in action.",
    source: "Henry Chester"
    
  },
  {
    quote: "We don't see things as they are, we see them as we are.",
    source: "Anais Nin"
    
  },
  {
    quote: "Failure is not a single, cataclysmic event. You don't fail overnight. Instead, failure is a few errors in judgement, repeated every day.",
    source: "Jim Rohn"
    
  },
  {
    quote: "Don't wish it were easier, wish you were better.",
    source: "Jim Rohn"
    
  },
  {
    quote: "There is only one person who could ever make you happy, and that person is you.",
    source: "David Burns"
    
  },
  {
    quote: "You cannot expect to achieve new goals or move beyond your present circumtances unless you change.",
    source: "Les Brown"
    
  },
  {
    quote: "Life's challenges are not supposed to paralyze you, they are supposed to help you discover who you are.",
    source: "Bernice Johnson Reagon"
    
  }
];

//generate a randomQuote from array

function getRandomQuote(){
	var randomQuote = Math.floor(Math.random() * (quotes.length));
	return quotes[randomQuote];
}
function printQuote(){
	var displayQuote = getRandomQuote();
	var html ='<p class ="quote">' + displayQuote.quote + '</p>'
	+ '<p class ="source">' + displayQuote.source + '</p>';
	document.getElementById('quote-box').innerHTML = html;
	document.body.style.background= randomColor();
}


function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}
var intervalID = window.setInterval(printQuote, 20000);


	// event listener to respond to "Show another quote" button clicks
	// when user clicks anywhere on the button, the "printQuote" function is called
	document.getElementById('loadQuote').addEventListener("click", printQuote, false);
	







