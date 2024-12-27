import { useEffect, useRef } from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages.ts'
import Message from '../message/Message.tsx'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import styles from './Messages.module.scss'
const Messages = () => {
	const { messages, loading } = useGetMessages()
	useListenMessages()
	const lastMessageRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
		}, 100)
	}, [messages])

	return (
		<div className={styles.container}>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className={styles.text}>Send a message to start the conversation</p>
			)}
		</div>
	)
}
export default Messages
