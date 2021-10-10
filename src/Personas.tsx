import Box, { BoxProps } from '@mui/material/Box';
import * as React from 'react';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        // bgcolor: '#2e99e5',
        bgcolor: 'darkcyan',
        color: 'white',
        p: 2,
        m: 2,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '700',
        maxWidth: '30',
        cursor: 'pointer',
        ':hover': {
          opacity: 0.8,
        },
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
          <img
            width={250}
            alt='Developer'
            height={250}
            src='./images/developer.png'
          />
          <br />
          <Box sx={{ fontWeight: '700' }}>Developer</Box>
        </Item>
        <Item onClick={() => setCurrentPersona('Organization')}>
          <img
            width={250}
            alt='Organisation'
            height={250}
            src='./images/organisation.png'
          />
          <br />
          <Box sx={{ fontWeight: '700' }}>Organisation</Box>
        </Item>
      </Box>
    </div>
  );
};

export default Personas;
