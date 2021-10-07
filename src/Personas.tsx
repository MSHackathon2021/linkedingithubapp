import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: '#2e99e5',
        color: 'white',
        p: 5,
        m: 15,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '700',
        maxWidth:'30',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function Personas() {
  return (
    <div>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Item><img width={250} height={250} src="./Developerimage.png"></img><br/><p>Developer</p></Item>
        <Item><img width={250} height={250} src="./Organisation.png"></img><br/><p>Organization</p></Item>
      </Box>
    </div>
  );
}