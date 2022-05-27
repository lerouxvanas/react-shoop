import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    occupationInterface,
    fetchOfoByCode,
    selectOfoOccupations,
    selectOfoStatus,
} from '../../features/ofo/ofoSlice';
import Button from '../Button/Button';
import Autocomplete from '../Autocomplete/Autocomplete';

import styles from './Ofo.module.scss';
import OfoItem from '../OfoItem/OfoItem';

interface OfoProps {}

const Ofo: FC<OfoProps> = (props: OfoProps) => {
    const occupations = useSelector(selectOfoOccupations);
    const ofoStatus = useSelector(selectOfoStatus);
    const dispatch = useDispatch();

    const onLoadOccupations = async (code: string = '') => {
        dispatch(fetchOfoByCode(code));
    };

    useEffect(() => {
        if (ofoStatus === 'idle') {
            console.log('start');
            onLoadOccupations('');
        }
    }, [ofoStatus, dispatch]);

    return (
        <div
            className={styles.Ofo}
            style={{ opacity: `${ofoStatus === 'pending' ? '0.3' : '1'}` }}
            data-testid="Ofo">
            <Autocomplete
                disablePortal={true}
                id="combo-box-demo"
                options={occupations.map((item: any) => ({
                    label: `${item.code} - ${item.title}`,
                    code: item.code,
                }))}
                label="Occupations"
            />
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
