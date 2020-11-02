import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { IconButton, Avatar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_headerRight">
          <Avatar className="sidebar_icons_avatar" src="https://media-exp1.licdn.com/dms/image/C5603AQEyl7jeS76t7Q/profile-displayphoto-shrink_100_100/0?e=1609977600&v=beta&t=NSrcqAac2-3wf2_eoSLw5pycWKm8ouzVcNIY5QS5LW0" />
          <IconButton>
            <DonutLargeIcon className="sidebar_icons"/>
          </IconButton>
          <IconButton>
            <ChatIcon className="sidebar_icons"/>
          </IconButton>
          <IconButton>
            <MoreVertIcon className="sidebar_icons"/>
          </IconButton>
        </div>
        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchOutline/>
                <input placeholder="Search or start new chat" type="text"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
