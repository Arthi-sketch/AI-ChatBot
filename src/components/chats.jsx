import React from "react";
import "./chats.css";
function Chats(props) {
  console.log(props.human);
  console.log(props.bot);
  return (
    <div className="chat-window">
      <div style={{ flexDirection: "column-reverse" }}>
        {props.human.map((msg, i) => (
          <>
            <div className="user-chat">{msg}</div>
            <div className="bot-chat"> {props.bot[i]} </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Chats;
