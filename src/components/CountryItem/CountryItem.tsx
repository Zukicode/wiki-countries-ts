import { FC } from 'react';

import styles from './CountryItem.module.scss';

import { useAppSelector } from 'hooks/useAppSelector';
import { ICountry } from 'models/ICountry';
import { useNavigate } from 'react-router-dom';
import { formatPopulation } from 'utils/formatPopultaion';

export const CountryItem: FC<ICountry> = ({
	name,
	capital,
	population,
	region,
	flags,
}) => {
	const navigate = useNavigate();
	const { status } = useAppSelector(state => state.country);

	const toPage = () => navigate(`country/${name.common}`);

	if (status === 'loading') {
		return <div>loading</div>;
	}

	return (
		<div onClick={toPage} className={styles.country}>
			<div
				style={{ backgroundImage: `url(${flags.png})` }}
				className={styles.image}
			></div>

			<div className={styles.details}>
				<div className={styles.title}>
					<h1>{name.common}</h1>
				</div>

				<div className={styles.description}>
					<p>
						Population:{' '}
						<span>{population ? formatPopulation(population) : 'No info'}</span>
					</p>
					<p>
						Region: <span>{region ? region : 'No info'}</span>
					</p>
					<p>
						Capital: <span>{capital ? capital[0] : 'No info'}</span>
					</p>
				</div>
			</div>
		</div>
	);
};
