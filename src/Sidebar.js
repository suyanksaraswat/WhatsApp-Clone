import React from 'react';
//import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { DonutLarge as DonutLargeIcon, Chat as ChatIcon, MoreVert as MoreVertIcon } from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
    	<div className="sidebar__header">
			<Avatar />
		</div>
    	<div className="sidebar__headerRight">
			<DonutLargeIcon />
			<ChatIcon />
			<MoreVertIcon />
		</div>
    	<div className="sidebar__search">
		</div>
    	<div className="sidebar__chats">
		</div>
	</div>
  );
}

export default Sidebar;