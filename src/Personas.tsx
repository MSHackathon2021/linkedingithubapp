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
        maxWidth: '30',
        ...sx,
      }}
      {...other}
    />
  );
}

interface PersonasProps {
  setCurrentPersona: (val: string) => void;
}

const Personas: React.FC<PersonasProps> = ({ setCurrentPersona }) => {
  return (
    <div>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <Item onClick={() => setCurrentPersona('Developer')}>
          <img width={250} height={250} src="./Developerimage.png" />
          <br />
          <Box sx={{ fontWeight: '700' }}>Developer</Box>
        </Item>
        <Item onClick={() => setCurrentPersona('Organization')}>
          <img width={250} height={250} src="./Organisation.png" />
          <br />
          <Box sx={{ fontWeight: '700' }}>Organisation</Box>
        </Item>
      </Box>
    </div>
  );
}

export default Personas;