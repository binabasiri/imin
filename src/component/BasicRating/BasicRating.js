import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function BasicRating({ value, number }) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">
        {value}({number})
      </Typography>
      <Rating name="read-only" value={value} precision={0.1} readOnly />
    </Box>
  );
}

export default BasicRating;
