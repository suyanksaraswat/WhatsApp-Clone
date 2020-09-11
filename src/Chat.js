import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { Mic as MicIcon, InsertEmoticon as InsertEmoticonIcon, AttachFile, SearchOutlined, MoreVert as MoreVertIcon } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';

function Chat() {
	const [seed, setSeed] = useState('');
	const [input, setInput] = useState('');
	const { roomId } = useParams();
	const [roomName, setRoomName] = useState('');
	const [messages, setMessages] = useState([]);
	const [{user}, dispatch] = useStateValue();

	useEffect(() => {
		if (roomId) {
			db.collection('rooms').doc(roomId).
				onSnapshot(snapshot => (
					setRoomName(snapshot.data().name)	
				))
			db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => (
				setMessages(snapshot.docs.map(doc => doc.data()))
			))
		}	
	}, [roomId])

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000))	
	}, [roomId])

	const sendMessage = (e) => {
		e.preventDefault();
		console.log(user.displayName);
		db.collection('rooms').doc(roomId).collection('messages').add({
			message: input,
			name: user.displayName,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})

		setInput('');
	};

	return (
		<div className='chat'>
			<div className='chat__header'>
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className='chat__headerInfo'>
					<h3>{roomName}</h3>
					<p>Last seen at ...</p>

				</div>
				<div className='chat__headerRight'>
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
			<div className='chat__body'>
				{messages.map(message => (
				<p className={`chat__message ${true && "chat__reciever"}`}>
					<span className='chat__name'>{message.name}</span>
					{message.message}
				</p>
				))}
			</div>
			<div className='chat__footer'>
				<InsertEmoticonIcon />
				<form>
					<input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
					<button onClick={sendMessage} type="submit">Send a message</button>
				</form>
				<MicIcon />
			</div>

		</div>
		)
}

export default Chat;
