import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    occupationInterface,
    setOfo,
    selectOfo,
} from '../../features/ofo/ofoSlice';
import { fetchOfo } from '../../features/ofo/ofoApi';
import Button from '../Button/Button';

import styles from './Ofo.module.scss';
import OfoItem from '../OfoItem/OfoItem';

interface OfoProps {}

const Ofo: FC<OfoProps> = (props: OfoProps) => {
    const ofo = useSelector(selectOfo);
    const dispatch = useDispatch();

    const onLoadOccupations = async (code: string = '') => {
        const fetchedData = await fetchOfo(code);
        console.log(fetchedData);
        dispatch(setOfo({ occupations: fetchedData.data }));
    };

    return (
        <div className={styles.Ofo} data-testid="Ofo">
            <section>
                {ofo.occupations.map((occupation: occupationInterface) => (
                    <OfoItem key={occupation?.code} occupation={occupation} />
                ))}
            </section>
            <Button
                onClick={() => {
                    onLoadOccupations('');
                }}>
                Load Occupations
            </Button>
        </div>
    );
};

export default Ofo;
