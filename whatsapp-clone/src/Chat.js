import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import SendIcon from "@material-ui/icons/Send";
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>last seen at .. </p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Amrit</span>
          Hello
          <span className="chat_timeStamp">
            {new Date().toTimeString().substring(0, 8)} pm
          </span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">Amrit</span>
          Kuch to Bolo
          <span className="chat_timeStamp">23:99 pm</span>
        </p>
      </div>

      <div className="chat_footer">
        
        <form>
      
        <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <input type="text" placeholder="Type your message here.." />
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default Chat;
