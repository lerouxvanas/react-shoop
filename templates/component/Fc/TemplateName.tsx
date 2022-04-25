import React, { FC } from 'react';
import styles from './TemplateName.module.scss';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = (props: TemplateNameProps) => {
    return (
        <div className={styles.TemplateName} data-testid="TemplateName">
            TemplateName Component
        </div>
    );
};

export default TemplateName;
