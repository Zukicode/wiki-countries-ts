import styles from './ImageCountry.module.scss';

import { useAppSelector } from 'hooks/useAppSelector';

export const ImageCountry = () => {
	const { nation } = useAppSelector(state => state.nation);

	return (
		<div className={styles.image}>
			<img src={nation?.flags.svg} alt={nation?.flags.alt} />
		</div>
	);
};
