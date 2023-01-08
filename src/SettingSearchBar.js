import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const autocompleteStyle = {
  minWidth: '50vw',
  backgroundColor: 'white',
  position: "sticky",
};

const completeOptions = [
  {
    category: 'Comics',
    filterName: ['Argentina', 'Australia', 'Austria']
  },
  {
    category: 'Movie',
    filterName: ['Belgium', 'Brazil']
  },
  {
    category: 'Sci-fi',
    filterName: ['Canada', 'China']
  },
  {
    category: 'NFT',
    filterName: ['France']
  },
  {
    category: 'UFO',
    filterName: ['United Kingdom', 'United States']
  }
].flatMap(({ category, filterName }) =>
  filterName.map((name) => ({
    label: name,
    category
  }))
);

function SettingSearchBar() {
  const [value, setValue] = React.useState([]);

  return (
      <Autocomplete
        filterSelectedOptions
        freeSolo
        multiple
        limitTags={2}
        options={completeOptions}
        groupBy={(option) => option.category}
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            variant="outlined"
            fullWidth
          />
        )}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={autocompleteStyle}
      />
  );
}

export default SettingSearchBar;
