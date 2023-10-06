import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { auth } from "../firebase";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        // Delete the current user's account
        await auth.currentUser.delete();
      } catch (error) {
        console.error("Error deleting account:", error);
      }
    }
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
          <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;