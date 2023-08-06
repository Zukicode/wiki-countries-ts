import { FC } from 'react';

import styles from './Error.module.scss';

import owl from 'assets/images/owl.png';

export const Error: FC = () => {
	return (
		<div className={styles.error}>
			<img src={owl} alt='owl' />
			<h1>Something went wrong!</h1>
			<p>Check the correctness of your request or simply refresh the page!</p>
		</div>
	);
};
