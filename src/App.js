import React, { useState } from "react";
import ChatBot from "./components/chatBot.jsx";
import ChatFooter from "./components/chatFooter.jsx";
import Chats from "./components/chats.jsx";

function App() {
  const [userQue, askQue] = useState([]);
  const [botReply, tellReply] = useState(["..."]);

  function AI_Process(humanQue) {
    console.log(humanQue);
    askQue((prevQue) => {
      return [...prevQue, humanQue];
    });
    console.log("userQue : " + userQue[userQue.length - 1]);

    const encodedParams = new URLSearchParams();
    encodedParams.append("in", humanQue);
    encodedParams.append("op", "in");
    encodedParams.append("cbot", "1");
    encodedParams.append("SessionID", "RapidAPI1");
    encodedParams.append("cbid", "1");
    encodedParams.append("key", "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP");
    encodedParams.append("ChatSource", "RapidAPI");
    encodedParams.append("duration", "1");

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "ae9f7bc949msh9e34b9ae718feb5p1f8692jsn2bee86e8b51f",
        "X-RapidAPI-Host": "robomatic-ai.p.rapidapi.com"
      },
      body: encodedParams
    };

    fetch("https://robomatic-ai.p.rapidapi.com/api", options)
      .then((response) => response.json())
      .then((response) => {
        tellReply((prevReply) => {
          return [...prevReply.slice(0, -1), response.out, "..."];
        });
        console.log(response.out);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <ChatBot>
        <Chats human={userQue} bot={botReply} />
        <ChatFooter userInput={AI_Process} />
      </ChatBot>
    </div>
  );
}

export default App;
