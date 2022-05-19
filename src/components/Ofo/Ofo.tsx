import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    occupationInterface,
    fetchOfoByCode,
    selectOfoOccupations,
} from '../../features/ofo/ofoSlice';
import Button from '../Button/Button';

import styles from './Ofo.module.scss';
import OfoItem from '../OfoItem/OfoItem';

interface OfoProps {}

const Ofo: FC<OfoProps> = (props: OfoProps) => {
    const occupations = useSelector(selectOfoOccupations);
    const dispatch = useDispatch();

    const onLoadOccupations = async (code: string = '') => {
        dispatch(fetchOfoByCode(code));
    };

    useEffect(() => {
        console.log('ofo start');
        onLoadOccupations('');
    }, []);

    return (
        <div className={styles.Ofo} data-testid="Ofo">
            <section>
                {occupations.map((occupation: occupationInterface) => (
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
