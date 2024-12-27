export type User = {
	_id: string;
	fullName: string;
	username: string;
	password: string;
	profilePic: string;
	gender: string;
}
export type Message = {
	_id: string;
	senderId: string;
	receiverId: string;
	message: string;
	createdAt: Date;
}
export type Conversation = User & {
	_id: string;
	participants: User[];
	messages: Message[];
	createdAt: Date;
}
