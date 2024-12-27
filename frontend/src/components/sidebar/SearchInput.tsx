import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import styles from "./Sidebar.module.scss";
const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<form onSubmit={handleSubmit} className={styles.searchForm}>
			<input
				type='text'
				placeholder='Search…'
				className={styles.searchInput}
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className={styles.searchButton}>
				<IoSearchSharp className={styles.searchIcon} />
			</button>
		</form>
	);
};
export default SearchInput;
