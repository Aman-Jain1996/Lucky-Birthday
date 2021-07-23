import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [mistake, setMistake] = useState("");
  const [color, setColor] = useState("");

  const outputPass = `<div class="output-div">Hurray!! You are a lucky person !<img width="100%" height="200px" src="/pass.svg" alt="image"></div>`;
  const outputFail = `<div class="output-div">Oops!! Number is not lucky for you , chill !<img width="100%" height="200px" src="/fail.svg" alt="image"></div>`;

  function spanHandler(e) {
    document.querySelector(".flex-privacy").style.display = "none";
    document.querySelector(".App").style.marginTop = "0";
  }

  function onClickHandler() {
    document.querySelector(".output-div").style.display = "block";
    let date1 = new Date();
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    date1.setMilliseconds(0);
    let dateInput = date.split("-").map((item) => Number(item));

    if (number === "" || date === "") {
      setMistake("Date and Number fields can't be empty");
      setColor("red");
    } else if (isNaN(Number(number))) {
      setMistake("Lucky number can only be integer");
      setColor("red");
    } else if (
      date1.getTime() <
      new Date(dateInput[0], dateInput[1] - 1, dateInput[2]).getTime()
    ) {
      setMistake("Date can't be future date");
      setColor("red");
    } else {
      setColor("");
      let inputDate = date
        .split("")
        .filter((item) => !isNaN(Number(item)))
        .reduce((a, b) => {
          return Number(a) + Number(b);
        }, 0);

      let outputDiv = document.querySelector(".output-div");
      if (inputDate % Number(number) === 0) outputDiv.innerHTML = outputPass;
      else outputDiv.innerHTML = outputFail;
    }
  }

  function resetHandler() {
    let fields = document.querySelectorAll("input");
    Array.from(fields).map((item) => (item.value = ""));
    setDate("");
    setNumber("");
    document.querySelector(".output-div").style.display = "none";
  }

  function onChangeHandler(e) {
    if (e.target.name === "number-input") setNumber(e.target.value);
    else setDate(e.target.value);
  }

  return (
    <div className="App">
      <h1>Lucky Birthday</h1>
      <div className="flex-container">
        <p>
          <br />A birthday is lucky if sum of all the digits of your birth-date
          is divisible by your lucky number. Check it out here...
        </p>
        <label>Put in your DOB here: </label>
        <input type="date" name="date-input" onChange={onChangeHandler} />
        <label>Please provide your lucky number:</label>
        <input
          type="number"
          name="number-input"
          min="0"
          onChange={onChangeHandler}
        />
      </div>
      <div className="flex-privacy">
        <p>
          <strong style={{ color: "red" }}>Privacy Notice!</strong> We are not
          storing your personal data.
        </p>
        <span onClick={spanHandler}>X</span>
      </div>
      <button onClick={onClickHandler}>Check</button>
      <button onClick={resetHandler}>Reset</button>
      <div className="output-div" style={{ color }}>
        {mistake}
      </div>
      <footer>
        <span className="footer-span">Connect me at :</span>
        <div className="flex">
          <a
            href="https://www.instagram.com/ajain8479"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram" title="Instagram"></i>
          </a>
          <a
            href="https://twitter.com/ajain84791"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter" title="Twitter"></i>
          </a>
          <a
            href="https://github.com/Aman-Jain1996"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" title="Github"></i>
          </a>
          <a
            href="https://portfolio-amanjain.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-briefcase" title="Portfolio"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aman-jain-8082b510a/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" title="LinkedIn"></i>
          </a>
        </div>
        <p>
          Made with{" "}
          <span role="img" aria-label="">
            💛
          </span>{" "}
          by @AJ-Creations
        </p>
      </footer>
    </div>
  );
}
