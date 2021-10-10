import {
  Persona,
  PersonaSize,
  PersonaPresence,
} from '@fluentui/react/lib/Persona';
import { Icon } from '@fluentui/react/lib/Icon';
import { Stack } from '@fluentui/react/lib/Stack';
import Logo from '../media/IntegratedIcon.png';


const personaStyles = { root: { margin: '0 0 10px 0' } };
const iconStyles = { root: { marginRight: 5 } };

const itemStyles = {
  alignItems: 'center',
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: 50,

};

export interface IContactCardProps {
  gitHubUserPic?: string;
  gitHubUserName?: string;
  linkedinUserPic?: string;
  linkedinUserName?: string;
}

function _onRenderSecondaryText() {
  return (
    <div>
      <Icon iconName="Suitcase" styles={iconStyles} />
    </div>
  );
}

const ContactCard = (props: IContactCardProps) => {

  const githubPersona = {
    imageUrl: props.gitHubUserPic,
    text: props.gitHubUserName,
  };
  const linkedinPersona = {
    imageUrl: props.linkedinUserPic,
    text: props.linkedinUserName,
  };

  return (
    <div className='persona'>
      <Stack horizontal horizontalAlign="center" tokens={{ childrenGap: 50 }}>
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
        <span style={itemStyles}><img src={Logo} /></span>
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
    </div>
  );
}

export default ContactCard;