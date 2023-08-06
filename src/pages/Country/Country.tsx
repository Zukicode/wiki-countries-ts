import { FC, useEffect } from 'react';

import styles from './Country.module.scss';

import { Container } from 'components/Container/Container';

import { useAppDispatch } from 'hooks/useAppDispatch';
import { fetchCountryByName } from 'store/nation/nationAction';

import { useAppSelector } from 'hooks/useAppSelector';
import { useParams } from 'react-router-dom';

import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { BackHeader } from './BackHeader/BackHeader';
import { Border } from './Border/Border';
import { Details } from './Details/Details';
import { ImageCountry } from './Image/ImageCountry';
import { Title } from './Title/Title';

const Country: FC = () => {
	const { name } = useParams();

	const dispatch = useAppDispatch();
	const { nation, status } = useAppSelector(state => state.nation);

	useEffect(() => {
		if (name) dispatch(fetchCountryByName(name));
	}, [name, dispatch]);

	if (status === 'loading') {
		return <Loader />;
	}

	if (nation === null) {
		return <Error />;
	}

	return (
		<Container>
			<div className={styles.country}>
				<BackHeader />

				<div className={styles.content}>
					<ImageCountry />

					<div className={styles.descripiton}>
						<Title />
						<Details />
						{nation.borders && <Border />}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Country;
