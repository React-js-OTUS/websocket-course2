import MessageContainer from '../../components/messageContainer/MessageContainer.js'
import Sidebar from '../../components/sidebar/Sidebar.js'
import styles from './Home.module.scss'
const Home = () => {
	return (
		<div className={styles.home}>
			<Sidebar />
			<MessageContainer />
		</div>
	)
}
export default Home
