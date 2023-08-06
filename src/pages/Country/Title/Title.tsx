import styles from './Title.module.scss';

import { useAppSelector } from 'hooks/useAppSelector';

export const Title = () => {
	const { nation } = useAppSelector(state => state.nation);

	return (
		<div className={styles.title}>
			<h1>{nation?.name.official}</h1>
		</div>
	);
};
