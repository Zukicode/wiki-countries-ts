import { FC } from 'react';

import styles from './Home.module.scss';

import { Container } from 'components/Container/Container';
import { CountryList } from 'components/CountryList/CountryList';
import { Panel } from 'components/Panel/Panel';

const Home: FC = () => {
	return (
		<Container>
			<div className={styles.home}>
				<Panel />

				<CountryList />
			</div>
		</Container>
	);
};

export default Home;
