import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import styles from "./MessageContainer.module.scss";

import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import MessageInput from "../messages/MessageInput";
import Messages from "../messages/Messages";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className={styles.container}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className={styles.header}>
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className={styles.noChatSelected}>
      <div className={styles.noChatText}>
        <p>Welcome 👋 {authUser?.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className={styles.icon} />
      </div>
    </div>
  );
};
