import { FC, useState } from 'react';

import styles from './Search.module.scss';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { setFilteredCountries } from 'store/country/countrySlice';

export const Search: FC = () => {
	const dispatch = useAppDispatch();

	const { countries } = useAppSelector(state => state.country);

	const [searchValue, setSearchValue] = useState<string>('');

	const searchByOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		dispatch(
			setFilteredCountries(
				countries.filter(c =>
					c.name.common.toLowerCase().includes(searchValue.toLowerCase())
				)
			)
		);
	};

	return (
		<div className={styles.search}>
			<span className={styles.icon}>
				<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
					<title />
					<path d='M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z' />
					<line x1='338.29' x2='448' y1='338.29' y2='448' />
				</svg>
			</span>
			<input
				type='text'
				value={searchValue}
				onChange={searchByOnChange}
				placeholder='Search for a country...'
			/>
		</div>
	);
};
