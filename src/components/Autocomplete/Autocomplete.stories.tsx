/* eslint-disable */
import Autocomplete from './Autocomplete';

export default {
    title: 'Autocomplete',
};

export const Default = () => (
    <Autocomplete
        disablePortal={true}
        id="combo-box-demo"
        options={[]}
        sx={{ width: 300 }}
    />
);

Default.story = {
    name: 'default',
};
