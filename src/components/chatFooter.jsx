import React, { useState } from "react";
import "./chatFooter.css";
import ButtonFeature from "./button";

function ChatFooter(props) {
  const [askQuestion, setQuestion] = useState("");

  console.log(askQuestion);
  function captureQuestion(e) {
    setQuestion(e.target.value);
  }

  function sendMessage() {
    console.log("clicked");
    if (askQuestion !== "") props.userInput(askQuestion);
    setQuestion("");
  }

  return (
    <div className="Message">
      <ButtonFeature emoji="fa-solid fa-face-smile" />
      <textarea rows="2" onChange={captureQuestion} value={askQuestion} />
      <ButtonFeature emoji="fa-solid fa-paper-plane" clickProp={sendMessage} />
    </div>
  );
}

export default ChatFooter;
