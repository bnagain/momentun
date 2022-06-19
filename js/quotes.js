const quotes = [
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    quote: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    quote: "Success usually comes to those who are too busy looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie",
  },
  {
    quote: "Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race.",
    author: "Calvin Coolidge",
  },
  {
    quote: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
    author: "Mister Rogers",
  },
  {
    quote: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
    author: "John Wooden",
  },
  {
    quote: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder",
  },
  {
    quote: "Success is getting what you want, happiness is wanting what you get.",
    author: "W. P. Kinsella",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
