import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "I don't Know You",
  "😳": "OoHOoo Ho What have you done?",
  "😔": "Sad But Mad",
  "🥡": "Wanna Take Me out on Lunch?",
  "❤️": "Intagram likes Are stupid",
  "😑": "I care but you won't know",
  "🍇": "Grapes are sour",
  "🍈": "Melon is sweet",
  "🍉": "Watermelon keeps you hydrated",
  "🍊": "Tangerine is healthy",
  "🍋": "Lemons make your teeth white",
  "🍚": "Cooked Rice is nice",
  "🍩": "Doughnut has HOLES",
  "🍨": "Ice Cream is my favourite dessert",
  "🍷 ": "Red Wine is my Wife",
  "🍸": "Cocktail is my life",
  "🥕": "Carrot are rabbit's favourite",
  "🌽": "Corn is my fav pizza topping",
  "🍹": "Tiki Drink is for beaches",
  "🍺": "Beer is for my bithces",
  "🥤": "Soft Drink is for my homies",
  "🥛": "Milk is for my grannies",
  "☕": "Coffee is my soul drink",
  "🍵": "Green Tea makes you look fit",
  "🌶️": "Hot Pepper are chilly ",
  "🥒": "Cucumber are filly",
  "🥬": "Leafy Greens are better"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>Emojilator</h1>
      <h2>Click on Emoji to Reveal the meaning!</h2>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h4> Click Click Click! </h4>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              display: "inline",
              fontSize: "2rem",
              padding: "1rem 1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
