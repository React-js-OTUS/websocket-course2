import { useAuthContext } from "../../context/AuthContext";
import type { Message } from "../../types";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import styles from "./Message.module.scss";

type MessageProps = {
  message: Message;
};

const Message = ({ message }: MessageProps) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser?._id;
  const formattedTime = extractTime(message.createdAt.toString());
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  return (
    <div className={`${styles.chat} ${styles[chatClassName]}`}>
      <div className={styles.chatImage}>
        <img src={profilePic} className={styles.avatar} />
      </div>
      <div className={styles.messageContainer}>
        <div className={styles.message}>{message.message}</div>
        <div className={styles.time}>{formattedTime}</div>
      </div>
    </div>
  );
};
export default Message;
