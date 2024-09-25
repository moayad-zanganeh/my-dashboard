import {
  IoMenuOutline,
  IoSearchOutline,
  IoChevronDownOutline,
} from 'react-icons/io5';
import {
  Box,
  InputBase,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@mui/material';
import { useState } from 'react';

function Filter() {
  const [selectedValue, setSelectedValue] = useState('text1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'white',
        borderBottom: '1px solid #ccc',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IoMenuOutline size={24} />

        <RadioGroup
          row
          value={selectedValue}
          onChange={handleChange}
          sx={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControlLabel
              value="text1"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box
                  sx={{
                    backgroundColor:
                      selectedValue === 'text1' ? '#5B5FC7' : 'transparent',
                    color: selectedValue === 'text1' ? '#fff' : '#000',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    justifyContent: 'space-around',
                  }}
                >
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#fff',
                      },
                      '&.MuiRadio-root': {
                        color: '#fff',
                      },
                      '&:hover': {
                        bgcolor: 'transparent',
                      },
                      width: '20%',
                    }}
                  />
                  Text
                  <IoChevronDownOutline style={{ marginLeft: '5px' }} />
                </Box>
              }
            />
            <FormControlLabel
              value="text"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box
                  sx={{
                    color: '#000',
                    cursor: 'pointer',
                    padding: '5px 10px',
                  }}
                >
                  Text
                </Box>
              }
            />
            <FormControlLabel
              value="text"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box
                  sx={{
                    color: '#000',
                    cursor: 'pointer',
                    padding: '5px 10px',
                  }}
                >
                  Text
                </Box>
              }
            />
            <Box sx={{ margin: '0 10px', color: '#000' }}>|</Box>

            <FormControlLabel
              value="text"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box
                  sx={{
                    color: '#000',
                    cursor: 'pointer',
                    padding: '5px 10px',
                  }}
                >
                  Text
                </Box>
              }
            />
            <FormControlLabel
              value="text"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box
                  sx={{
                    color: '#000',
                    cursor: 'pointer',
                    padding: '5px 10px',
                  }}
                >
                  Text
                </Box>
              }
            />
            <FormControlLabel
              value="text"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box
                  sx={{
                    color: '#000',
                    cursor: 'pointer',
                    padding: '5px 10px',
                  }}
                >
                  Text
                </Box>
              }
            />

            <Box sx={{ margin: '0 10px', color: '#000' }}>|</Box>

            <FormControlLabel
              value="text"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box
                  sx={{
                    color: '#000',
                    cursor: 'pointer',
                    padding: '5px 10px',
                  }}
                >
                  Text
                </Box>
              }
            />
            <FormControlLabel
              value="text"
              control={<Radio sx={{ display: 'none' }} />}
              label={
                <Box
                  sx={{
                    color: '#000',
                    cursor: 'pointer',
                    padding: '5px 10px',
                  }}
                >
                  Text
                </Box>
              }
            />
          </Box>
        </RadioGroup>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography style={{ marginRight: '20px', fontSize: '16px' }}>
          Filter
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '5px 10px',
            borderRadius: '5px',
            boxShadow: '0 0 5px rgba(0,0,0,0.1)',
          }}
        >
          <IoSearchOutline size={18} />
          <InputBase
            placeholder="Find"
            sx={{ marginLeft: '10px', color: '#000' }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Filter;
