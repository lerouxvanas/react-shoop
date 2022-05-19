import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import {
    occupationInterface,
    setOfo,
    fetchOfoByCode,
} from '../../features/ofo/ofoSlice';
import { postAdded } from '../../features/posts/postsSlice';
import styles from './OfoItem.module.scss';
import Button from '../Button/Button';

interface OfoItemProps {
    occupation?: occupationInterface;
}

const OfoItem: FC<OfoItemProps> = ({ occupation }: OfoItemProps) => {
    const dispatch = useDispatch();

    const onLoadOccupations = (code: string = '') => {
        dispatch(fetchOfoByCode(code));
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
