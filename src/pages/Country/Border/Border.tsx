import { FC, useEffect, useState } from 'react';

import styles from './Border.module.scss';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { filterByCode } from 'config/api';
import { useAppSelector } from 'hooks/useAppSelector';

export const Border: FC = () => {
	const navigate = useNavigate();

	const { nation } = useAppSelector(state => state.nation);

	const [neighbors, setNeighbors] = useState<any>();

	useEffect(() => {
		if (nation !== null)
			axios
				.get(filterByCode(nation.borders))
				.then(res => setNeighbors(res.data.map((c: any) => c.name.common)));
	}, [nation]);

	if (nation === null) {
		return <div>Error</div>;
	}

	return (
		<div className={styles.border}>
			<p>Border Countries:</p>
			<div className={styles.listBorder}>
				{neighbors &&
					neighbors.map((c: any) => (
						<span
							key={c}
							onClick={() => navigate(`/country/${c}`)}
							className={styles.borderCountry}
						>
							{c}
						</span>
					))}
			</div>
		</div>
	);
};
