import '../css/Button.scss';
import ContactCard from '../components/ContactCard';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import { IStackProps, Stack } from '@fluentui/react/lib/Stack';


export interface IButtonProps {
  Heading?: string | null;
  selected?: boolean;
  gitHubUserPic?:string ;
  gitHubUserName?:string ;
  linkedinUserPic?:string ;
  linkedinUserName?:string;
  isAuthenticated:boolean;
  isAwaiting:boolean
}

const rowProps: IStackProps = { horizontal: true, horizontalAlign: 'center' };

  const tokens = {
    sectionStack: {
      childrenGap: 10,
    },
    spinnerStack: {
      childrenGap: 20,
    },
  };

const Button = (props: IButtonProps) => {
  if (!props.isAuthenticated && !props.isAwaiting) {
    return (
      <div className='see-community'>
        <span>Bring GitHub and Linkedin closer.</span>
      <div className='wrap'>
        <a href="https://github.com/login/oauth/authorize?client_id=4390b5874ad74b454dc0" className='button'>
        {props.Heading}
        </a>
      </div>
      </div>
    );
  } 
  else if(!props.isAuthenticated && props.isAwaiting)
  {
    return (<div className='loader'>
    <Stack {...rowProps} tokens={tokens.spinnerStack}> 
    <Spinner label="Please wait .. while we set things for you!" ariaLive="assertive" labelPosition="right" size={SpinnerSize.large} />
  </Stack>
  </div>
  )
  }
   else if(props.isAuthenticated) {
    return (
      <div>
        <h1><ContactCard gitHubUserPic={props.gitHubUserPic} gitHubUserName={props.gitHubUserName} linkedinUserPic={props.linkedinUserPic} linkedinUserName={props.linkedinUserName}></ContactCard></h1>
      </div>
    );
  }
  else{
    return(<></>)
  }
};

export default Button;
