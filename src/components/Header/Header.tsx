import { FC, useState } from 'react';

import styles from './Header.module.scss';

import { Container } from 'components/Container/Container';

import moonIcon from 'assets/images/moon.svg';
import sunIcon from 'assets/images/sun.svg';

import { useNavigate } from 'react-router-dom';

export const Header: FC = () => {
	const navigate = useNavigate();

	const toHomePage = () => navigate('/');

	const [activeTheme, setActiveTheme] = useState<boolean>(false);

	const changeThemeOnClick = () => {
		const body = document.querySelector('body') as HTMLBodyElement;

		if (activeTheme) body.setAttribute('data-theme', 'light');
		else body.setAttribute('data-theme', 'dark');

		setActiveTheme(!activeTheme);
	};

	return (
		<div className={styles.header}>
			<Container>
				<div onClick={toHomePage} className={styles.logo}>
					<h1>Where in the world?</h1>
				</div>
				<div onClick={changeThemeOnClick} className={styles.theme}>
					<span className={styles.icon}>
						<img src={activeTheme ? moonIcon : sunIcon} alt='icon' />
					</span>
					{activeTheme ? <p>Dark Mode</p> : <p>Light Mode</p>}
				</div>
			</Container>
		</div>
	);
};
