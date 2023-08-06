import { FC, useEffect, useRef, useState } from 'react';

import styles from './Filter.module.scss';

import { useAppDispatch } from 'hooks/useAppDispatch';

import { useAppSelector } from 'hooks/useAppSelector';
import { fetchCountriesByRegion } from 'store/country/countryAction';
import { setFilter } from 'store/filter/filterSlice';

type PopupClick = MouseEvent & {
	path: Node[];
};

export const Filter: FC = () => {
	const dispatch = useAppDispatch();

	const { filter } = useAppSelector(state => state.filter);

	const [isVisible, setVisible] = useState<boolean>(false);

	const filterRef = useRef<HTMLDivElement>(null);

	const toggleList = () => setVisible(!isVisible);
	const closeList = () => setVisible(false);

	const handleFetchFilter = (region: string) => {
		closeList();
		dispatch(setFilter(region));
		dispatch(fetchCountriesByRegion(region.toLowerCase()));
	};

	useEffect(() => {
		const handleClickOutside = (event: PopupClick | MouseEvent) => {
			if (
				filterRef.current &&
				!event.composedPath().includes(filterRef.current)
			) {
				setVisible(false);
			}
		};

		window.addEventListener('click', handleClickOutside);

		return () => window.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<div ref={filterRef} className={styles.filter}>
			<div onClick={toggleList} className={styles.selected}>
				<p>{filter ? `Selected: ${filter}` : 'Filter by Region'}</p>

				<button>
					<svg
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<polyline points='6 9 12 15 18 9' />
					</svg>
				</button>
			</div>
			<div
				className={
					isVisible ? `${styles.dropdown} ${styles.show}` : styles.dropdown
				}
			>
				<ul>
					{['Africa', 'America', 'Asia', 'Europe', 'Oceania'].map(filter => (
						<li key={filter} onClick={() => handleFetchFilter(filter)}>
							{filter}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
