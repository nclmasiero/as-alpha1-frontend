import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'

const Message = (props) => {
  return (
    <div className="w-full px-4 py-6 border-b-[1px] border-b-slate-100/5 text-justify font-thin tracking-tight text-[1.2rem] scale-[97%] mx-auto hover:scale-[100%] transition-all duration-200">
      <p className="cursor-default">{props.content}</p>
    </div>
  );
}

const Play = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef(null);

  const sendMessage = (msg) => {
    if (msg.length <= 0) return;

    setMessages(messages => [...messages, msg]);
    setIsLoading(true);

    fetch("http://localhost:3000/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({message: msg}),
      credentials: "include",
    }).then(
      (res) => res.json()
    ).then(
      (res) => {
        if (res.result != "allow") {
          setMessages(messages => [...messages, "You are not logged, I can't reply to this message."]);
          return;
        }

        setMessages(messages => [...messages, res.message]);
        setIsLoading(false);
      }
    );
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  useEffect(() => { // event listener for enter key
    const listener = event => {
      if (event.code === "Enter") {
        event.preventDefault();
        sendMessage(message);
        setMessage("");
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  useEffect(() => { // get history
    fetch("http://localhost:3000/get-history", {
      method: "POST",
      credentials: "include",
    }).then(
      (res) => res.json()
    ).then(
      (res) => {
        if (res.result != "allow") {
          setMessages(["Unable to retreive messages history. You are probably not logged in."]);
          return;
        }

        if (res.history.length > 0) setMessages(res.history);
        else setMessages(["Tell me when you're ready to start."]);
      }
    );
  }, []);

  useEffect(() => { // bottom scroller
    messageEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="text-slate-100 bg-gradient-to-br from-[#1B1F20] to-[#181610] w-screen h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col w-[50%] max-h-[90%] mx-auto py-4">
        <div className="flex-1 flex flex-col py-5 overflow-y-scroll overflow-x-hidden">
          {messages.map((msg) => (
            <Message key={msg} content={msg} />
          ))}
          <div ref={messageEndRef}></div>
        </div>

        <div className="h-[12%] flex items-center">
          {
            isLoading == false ?
              <input type="text" value={message} onChange={handleChange} placeholder="What's your action?" className="mx-auto w-[100%] bg-slate-100/5 ring-slate-100/50 ring-[2px] rounded-lg text-[1.5rem] p-1 placeholder:text-transparent hover:placeholder:text-slate-100 focus:placeholder:text-slate-100 focus:p-2 transition-all duration-300 focus:scale-[102%]"></input>
            :
              <input type="text" value={message} onChange={handleChange} disabled placeholder="AI is thinking..." className="mx-auto w-[100%] bg-slate-100/30 ring-slate-100/50 ring-[2px] rounded-lg text-[1.5rem] p-1 animate-pulse"></input>
          }
        </div>
      </div>
    </div>
  )
}

export default Play