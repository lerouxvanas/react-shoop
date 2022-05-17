import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { occupationInterface, setOfo } from '../../features/ofo/ofoSlice';
import { postAdded } from '../../features/posts/postsSlice';
import { fetchOfo } from '../../features/ofo/ofoApi';
import styles from './OfoItem.module.scss';
import Button from '../Button/Button';

interface OfoItemProps {
    occupation?: occupationInterface;
}

const OfoItem: FC<OfoItemProps> = ({ occupation }: OfoItemProps) => {
    const dispatch = useDispatch();

    const onLoadOccupations = async (code: string = '') => {
        const fetchedData = await fetchOfo(code);
        dispatch(setOfo({ occupations: fetchedData.data }));
    };

    const onAddPost = () => {
        if (occupation) {
            dispatch(postAdded(occupation));
        }
    };

    return (
        <div className={styles.OfoItem} data-testid="OfoItem">
            <div
                onClick={() => {
                    onLoadOccupations(occupation?.code);
                }}>
                <h2>
                    {occupation?.code} - {occupation?.title}
                </h2>
                <p>{occupation?.descriptor}</p>
            </div>
            <div>
                <Button onClick={onAddPost}>Add</Button>
            </div>
        </div>
    );
};

export default OfoItem;
