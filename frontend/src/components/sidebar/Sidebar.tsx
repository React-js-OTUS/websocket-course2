import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<SearchInput />
			<div className={styles.divider}></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;

