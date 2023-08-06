import { FC } from 'react';

import styles from './Panel.module.scss';

import { Filter } from 'components/Filter/Filter';
import { Search } from 'components/Search/Search';

export const Panel: FC = () => {
	return (
		<div className={styles.panel}>
			<Search />
			<Filter />
		</div>
	);
};
