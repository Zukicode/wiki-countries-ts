import { useAppSelector } from 'hooks/useAppSelector';
import styles from './Details.module.scss';

import { formatLanguages } from 'utils/formatLanguages';
import { formatNativeName } from 'utils/formatNativeName';
import { formatPopulation } from 'utils/formatPopultaion';

export const Details = () => {
	const { nation } = useAppSelector(state => state.nation);

	if (nation === null) {
		return <div>Country details not found!</div>;
	}

	return (
		<div className={styles.details}>
			<div className={styles.box}>
				<p>
					Native name:{' '}
					<span>
						{nation.name.nativeName
							? formatNativeName(nation.name.nativeName)
							: 'No info'}
					</span>
				</p>
				<p>
					Population:{' '}
					<span>
						{nation.population
							? formatPopulation(nation.population)
							: 'No info'}
					</span>
				</p>
				<p>
					Region: <span>{nation.region ? nation.region : 'No info'}</span>
				</p>
				<p>
					Sub region:{' '}
					<span>{nation.subregion ? nation.subregion : 'No info'}</span>
				</p>
				<p>
					Capital: <span>{nation.capital ? nation.capital[0] : 'No info'}</span>
				</p>
			</div>

			<div className={styles.box}>
				<p>
					Top level Domain:{' '}
					<span>
						{nation.tld
							? nation.tld.map(tld => <span key={tld}>{tld} </span>)
							: 'No info'}
					</span>
				</p>
				<p>
					Currencies:{' '}
					<span>
						{nation.currencies ? Object.keys(nation.currencies) : 'No info'}
					</span>
				</p>
				<p>
					Language:{' '}
					<span>
						{nation.languages ? formatLanguages(nation.languages) : 'No info'}
					</span>
				</p>
			</div>
		</div>
	);
};
