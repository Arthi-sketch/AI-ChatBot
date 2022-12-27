import React, { useState } from "react";
import Jump from "react-reveal/Jump";
import "./chatBot.css";
import botImg from "../images/chatbot.png";

function ChatBot(props) {
  const [displayBot, setBot] = useState(true);

  function botSetDown() {
    setBot(false);
  }
  function botSetUp() {
    setBot(true);
  }

  return (
    <div className="container">
      <Jump>
        <div
          className="chatScreen"
          onMouseOver={botSetDown}
          onMouseLeave={botSetUp}
        >
          {displayBot && (
            <span className="chatbot">
              <img src={botImg} alt="" />
            </span>
          )}
          {!displayBot && props.children}
        </div>
      </Jump>
    </div>
  );
}

export default ChatBot;
