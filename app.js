// Lightweight homepage interactions.

const footerQuotes = [
  {
    quote: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien"
  },
  {
    quote: "An organized pantry is the secret weapon of every great camp chef.",
    author: "Unknown"
  },
  {
    quote: "The stars seem brighter when you are sleeping under them.",
    author: "Unknown"
  },
  {
    quote: "The only time to eat diet food is while you're waiting for the steak to cook.",
    author: "Julia Child"
  },
  {
    quote: "The road goes on forever and the party never ends.",
    author: "Robert Earl Keen"
  },
  {
    quote: "I haven't been everywhere, but it's on my list.",
    author: "Susan Sontag"
  },
  {
    quote: "Sometimes the destination is just where we stopped for dinner.",
    author: "La Última Excursión"
  },
  {
    quote: "Take the long way. Dinner can wait.",
    author: "La Última Excursión"
  },
  {
    quote: "People don't take trips, trips take people.",
    author: "John Steinbeck"
  },
  {
    quote: "There was nowhere to go but everywhere, so just keep on rolling under the stars.",
    author: "Jack Kerouac"
  },
  {
    quote: "The journey is the destination.",
    author: "Dan Eldon"
  },
  {
    quote: "There are no mistakes on the road. Something happens, and then you're on a different journey.",
    author: "Unknown"
  },
  {
    quote: "An adventure is only an inconvenience rightly considered.",
    author: "G.K. Chesterton"
  },
  {
    quote: "When you come to a fork in the road, take it.",
    author: "Yogi Berra"
  },
  {
    quote: "No beer = out of here.",
    author: "Unknown"
  },
    {
    quote: "I cook with wine. Sometimes I even add it to the food.",
    author: "W.C. Fields"
  },
  {
    quote: "My mom made me two dishes: take it or leave it.",
    author: "Steven Wright"
  },
  {
    quote: "If you combine wine and dinner, the new word is winner.",
    author: "Unknown"
  },
  {
    quote: "When the waitress asked if I wanted my pizza cut into four or eight slices, I said, 'Four. I don't think I can eat eight.'",
    author: "Yogi Berra"
  },
  {
    quote: "My grocery list is basically just a piece of paper where I write down all the things I'm going to forget to buy.",
    author: "Unknown"
  },
  {
    quote: "I always look at my grocery receipt and think, 'What did I buy, a small island?'",
    author: "Unknown"
  },
  {
    quote: "Going to the grocery store with a plan is the ultimate adult extreme sport.",
    author: "Unknown"
  },
  {
    quote: "The most dangerous game you can play is going grocery shopping while hungry.",
    author: "Unknown"
  }
];

function showRandomFooterQuote() {
  const quoteElement = document.getElementById("footer-quote");
  const authorElement = document.getElementById("footer-quote-author");

  if (!quoteElement || !authorElement || footerQuotes.length === 0) {
    return;
  }

  const storageKey = "ultimaFooterQuoteIndex";
  const previousIndex = Number.parseInt(localStorage.getItem(storageKey), 10);

  let nextIndex;

  if (footerQuotes.length === 1) {
    nextIndex = 0;
  } else {
    do {
      nextIndex = Math.floor(Math.random() * footerQuotes.length);
    } while (nextIndex === previousIndex);
  }

  const selectedQuote = footerQuotes[nextIndex];

  quoteElement.textContent = `“${selectedQuote.quote}”`;
  authorElement.textContent = selectedQuote.author
    ? `— ${selectedQuote.author}`
    : "";

  localStorage.setItem(storageKey, String(nextIndex));
}

showRandomFooterQuote();
