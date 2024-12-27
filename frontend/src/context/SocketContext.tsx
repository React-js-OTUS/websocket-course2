import { createContext, useContext, useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import { User } from '../types'
import { useAuthContext } from './AuthContext'

const SocketContext = createContext<
	{ socket: Socket | null; onlineUsers: User[] } | undefined
>(undefined)

export const useSocketContext = () => {
	return useContext(SocketContext)
}

export const SocketContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [socket, setSocket] = useState<Socket | null>(null) 
	const [onlineUsers, setOnlineUsers] = useState<User[]>([])
	const { authUser } = useAuthContext()

	useEffect(() => {
		if (authUser) {
			const socket = io('http://localhost:8000', {
				query: {
					userId: authUser._id,
				},
			})

			setSocket(socket)

			socket.on('getOnlineUsers', (users) => {
				setOnlineUsers(users)
			})

			return () => {
				socket.close()
			}
		} else {
			if (socket) {
				socket.close()
				setSocket(null)
			}
		}
	}, [authUser])

	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	)
}
