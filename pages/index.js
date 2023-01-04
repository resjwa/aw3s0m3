import ContactForm from '../components/Contact';
import styles from './index.module.css';

function HomePage() {
  const formTitle = 'Awesome form stuff';

	return (
		<section>
			<h1 className={styles.homeTitle}>Home</h1>
			<p>home page stuff</p>
      <ContactForm title={formTitle} />
		</section>
	);
}

export default HomePage;
