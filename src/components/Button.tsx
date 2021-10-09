import '../css/Button.scss';
import ContactCard from '../components/ContactCard';

export interface IButtonProps {
  gitHubIntegrated?: boolean;
  LinkedinIntegrated?: boolean;
  Heading?: string | null;
  selected?: boolean;
  gitHubUserPic:string ;
  gitHubUserName:string ;
  linkedinUserPic:string ;
  linkedinUserName:string;
}

const Button = (props: IButtonProps) => {
  if (
    (!props.gitHubIntegrated || !props.LinkedinIntegrated) &&
    props.Heading == null
  ) {
    return (
      <div className='see-community'>
        <span>Bring GitHub and Linkedin closer.</span>
      <div className='wrap'>
        <a href="https://github.com/login/oauth/authorize?client_id=4390b5874ad74b454dc0" className='button'>
          Lets get started
        </a>
        {/* <a href='http://localhost:3000/auth/linkedin' className='button'>
          Linkedin
        </a> */}
      </div>
      </div>
    );
  } else if (props.Heading != null) {
    return (
      <div className='wrap'>
        <button
          className={props.selected ? 'button button-selected' : 'button'}
        >
          {props.Heading}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1><ContactCard gitHubUserPic={props.gitHubUserPic} gitHubUserName={props.gitHubUserName} linkedinUserPic={props.linkedinUserPic} linkedinUserName={props.linkedinUserName}></ContactCard></h1>
      </div>
    );
  }
};

export default Button;
