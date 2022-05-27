import React, { FC } from 'react';
import styles from './Autocomplete.module.scss';
import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface autocompleteContent {
    label: string;
    [key: string]: any;
}

interface AutocompleteProps {
    disablePortal?: boolean;
    id: string;
    options: autocompleteContent[];
    sx?: any;
    inputParams?: any;
    label?: string;
}

const Autocomplete: FC<AutocompleteProps> = ({
    disablePortal,
    id,
    options,
    sx,
    inputParams,
    label,
}: AutocompleteProps) => {
    return (
        <div className={styles.Autocomplete} data-testid="Autocomplete">
            <MuiAutocomplete
                disablePortal={disablePortal}
                id={id}
                options={options}
                sx={sx}
                renderInput={(params) => (
                    <TextField {...params} label={label} />
                )}
            />
        </div>
    );
};

export default Autocomplete;
