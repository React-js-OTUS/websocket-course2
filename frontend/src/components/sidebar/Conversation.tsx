import { useSocketContext } from "../../context/SocketContext";
import type { Conversation } from "../../types";
import useConversation from "../../zustand/useConversation";
import styles from "./Sidebar.module.scss";

type ConversationProps = {
  conversation: Conversation;
  lastIdx: boolean;
  emoji: string;
};

const Conversation = ({ conversation, lastIdx, emoji }: ConversationProps) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext() || { onlineUsers: [] }
  // @ts-ignore
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`${styles.conversation} ${
          isSelected ? styles.selected : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={styles.avatar}>
          {isOnline && <div className={styles.online} />}
          <img
            src={conversation.profilePic}
            alt="user avatar"
            className={styles.avatarImage}
          />
        </div>

        <div className={styles.conversationDetails}>
          <div className={styles.conversationHeader}>
            <p className={styles.conversationName}>{conversation.fullName}</p>
            <span className={styles.conversationEmoji}>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className={styles.conversationDivider} />}
    </>
  );
};
export default Conversation;
