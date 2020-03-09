import React from "react";

import "./Input.css";

function Input({ message, sendMessage, setMessage }) {
  return (
    <div>
      <form className="form">
        <input
          type="text"
          className="input"
          placeholder="Type a message..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyPress={e => e.key === "Enter" && sendMessage(e)}
        />
        <button className="sendButton" onClick={e => sendMessage(e)}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Input;
