import { FC, useEffect } from 'react';

import styles from './CountryList.module.scss';

import { CountryItem } from 'components/CountryItem/CountryItem';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { setFilteredCountries } from 'store/country/countrySlice';

export const CountryList: FC = () => {
	const dispatch = useAppDispatch();

	const { filteredCountries, countries, status } = useAppSelector(
		state => state.country
	);

	useEffect(() => {
		dispatch(setFilteredCountries(countries));
	}, []);

	if (status === 'loading') {
		return <Loader />;
	}

	if (status === 'rejected') {
		return <Error />;
	}

	return (
		<div className={styles.content}>
			{filteredCountries.length === 0 ? (
				<h1 style={{ fontWeight: '300' }}>
					Nothing was found for this request!
				</h1>
			) : (
				filteredCountries.map(country => (
					<CountryItem key={country.name.common} {...country} />
				))
			)}
		</div>
	);
};
