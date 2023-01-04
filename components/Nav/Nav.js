import Link from 'next/link';
import styles from './nav.module.css';
const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/user'>User</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
