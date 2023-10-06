import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [timeString, setTimeString] = useState("just now");

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  useEffect(() => {
    const messageDate = new Date(message.date.seconds * 1000);
    const currentDate = new Date();
    const timeDifferenceInSeconds = Math.floor((currentDate - messageDate) / 1000);
    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;

    if (timeDifferenceInSeconds < secondsInMinute) {
      setTimeString("just now");
    } else if (timeDifferenceInSeconds < secondsInHour) {
      const minutesAgo = Math.floor(timeDifferenceInSeconds / secondsInMinute);
      setTimeString(`${minutesAgo} min ago`);
    } else if (timeDifferenceInSeconds < secondsInDay) {
      const hoursAgo = Math.floor(timeDifferenceInSeconds / secondsInHour);
      setTimeString(`${hoursAgo} hours ago`);
    } else {
      setTimeString(messageDate.toLocaleString());
    }
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
        <span>{timeString}</span>
      </div>
    </div>
  );
};

export default Message;