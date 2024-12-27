import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import styles from "./Sidebar.module.scss";
const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className={styles.logoutContainer}>
			{!loading ? (
				<BiLogOut className={styles.logoutIcon} onClick={logout} />
			) : (
				<span className={styles.loadingSpinner}></span>
			)}
		</div>
	);
};
export default LogoutButton;
