import { useEffect, useState } from 'react'
import JoinGroup from './Components/JoinGroup.jsx'
import ChatRoom from "./Components/ChatRoom.jsx";
import './App.css'
import {io} from "socket.io-client"


const SOCKET_URL = "https://socket-chatapp-backend-production.up.railway.app/";

let socket;


function App() {
  const [joined , setJoined] = useState("false")
  const [userInfo , setUserinfo] = useState({username: "" , room: ""});

  useEffect(() => {
    socket = io(SOCKET_URL)

    socket.on("connect" , () => {
      console.log("server is connected")
    });

    socket.on("disconnect" , () => {
      console.log("server is disconnected")
    });

    return () => {
      socket.disconnect();
    };
  }, [] );

  const handleJoin = ({username , room }) => {
    setUserinfo({username , room });
    if(socket) {
      socket.emit("join" , room );
    }

    setJoined(true);
  };


  const handleLeave = () => {
    setUserinfo({username: "" , room: ""});
    setJoined(false);
  };

  return (
    <>
       {!joined ? (
        <JoinGroup onJoin={handleJoin} />
      ) : (
        <ChatRoom
          username={userInfo.username}
          room={userInfo.room}
          socket={socket}
          onLeave={handleLeave}
        />
      )}
    </>
  )
}

export default App
