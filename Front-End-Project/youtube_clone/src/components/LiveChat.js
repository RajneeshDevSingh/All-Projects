import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Allcss/LiveChat.css";
import { addMessage } from "../Utils/chatSlice";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="ChatMessage">
      <img
        className="ChatIconIcon"
        alt="User"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="chatInfo">
        <p className="chatMessage">
          <span className="chatName">{name}</span> -: {message}
        </p>
      </div>
    </div>
  );
};

const LiveChat = () => {
  const [myChat, setMyChat] = useState("")
  const dispatch = useDispatch();
  const chatFromStore = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: "Rajneesh",
          message: "gjhg khgh hgklk",
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  });
  return (
    <form onSubmit={(e)=>
    {
      e.preventDefault();
      dispatch(addMessage({
        name:"Rajneesh",
        message:myChat,
      }))
    }}>
    <div className="LiveChatCont">
      {chatFromStore.map((chat, index) => (
        <ChatMessage key={index} name={chat.name} message={chat.message} />
      ))}
    </div>
    <input className="MyChat" type="text" value={myChat} onChange={(e)=>{setMyChat(e.target.value)}}/> <button className="sendChat" type="submit">Send</button>
    </form>
  );
};

export default LiveChat;
