import * as React from 'react';
import {
  Persona,
  PersonaSize,
  PersonaPresence,
} from '@fluentui/react/lib/Persona';
import { Icon, IIconStyles } from '@fluentui/react/lib/Icon';
import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultPalette } from '@fluentui/react';
import { TestImages } from '@fluentui/example-data';
import icon from '../IntegratedIcon.png';
const axios = require('axios')

const personaStyles = { root: { margin: '0 0 10px 0' } };
const iconStyles={ root: { marginRight: 5 } };

  // const examplePersona = {
  //   imageUrl: TestImages.personaFemale,
  //   imageInitials: 'AL',
  //   text: 'Annie Lindqvist',
  //   secondaryText: 'Software Engineer',
  // };

  const itemStyles = {
    alignItems: 'center',
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    width: 50,
  };

  function ContactCard(props)
  {
    const githubPersona = {
      imageUrl:  props.gitHubUserPic,
      text: props.gitHubUserName,
    };
    const linkedinPersona = {
      imageUrl:  props.linkedinUserPic,
      text: props.linkedinUserName,
    };
  return (
    <Stack  horizontal horizontalAlign="space-evenly"  tokens={{ childrenGap: 1 }}>
         <span style={itemStyles}>
      <Persona
        {...githubPersona}
        size={PersonaSize.size72}
        presence={PersonaPresence.online}
        onRenderSecondaryText={_onRenderSecondaryText}
        styles={personaStyles}
        imageAlt={props.gitHubUserName}
      />
      </span>
      <span style={itemStyles}><img src={icon} /></span>
      <span style={itemStyles}>
      <Persona
        {...linkedinPersona}
        size={PersonaSize.size72}
        presence={PersonaPresence.online}
        onRenderSecondaryText={_onRenderSecondaryText}
        styles={personaStyles}
        imageAlt={props.linkedinUserName}
      />
      </span>
    </Stack>
    
  );
  }

function _onRenderSecondaryText(props) {
  return (
    <div>
      <Icon iconName="Suitcase" styles={iconStyles} />
    </div>
  );
}
export default ContactCard
