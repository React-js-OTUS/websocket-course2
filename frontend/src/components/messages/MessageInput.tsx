import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import styles from "./MessageInput.module.scss";
const MessageInput = () => {
	const [message, setMessage] = useState('');
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!message) return
		await sendMessage(message)
		setMessage('')
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.inputContainer}>
				<input
					type='text'
					className={styles.input}
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className={styles.button}>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend color='white'/>}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;


