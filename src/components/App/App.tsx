import { FC, useEffect } from 'react';

import styles from './App.module.scss';

import Country from 'pages/Country/Country';
import Home from 'pages/Home/Home';

import { Header } from 'components/Header/Header';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { Route, Routes } from 'react-router-dom';
import { fetchCountries } from 'store/country/countryAction';

export const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCountries());
	}, [dispatch]);

	return (
		<div className={styles.application}>
			<Header />

			<Routes>
				<Route path='*' element={<Home />} />
				<Route path='/country/:name' element={<Country />} />
			</Routes>
		</div>
	);
};
