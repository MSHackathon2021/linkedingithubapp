import '../css/Button.css';

export interface IButtonProps {
  gitHubIntegrated: boolean;
  LinkedinIntegrated: boolean;
  Heading?: string;
}

const Button = (props: IButtonProps) => {
  if (
    (!props.gitHubIntegrated || !props.LinkedinIntegrated) &&
    props.Heading == null
  ) {
    return (
      <div className='wrap'>
        <a href='https://github.com' className='button'>
          GitHub
        </a>
        <a href='http://localhost:3000/auth/linkedin' className='button'>
          Linkedin
        </a>
      </div>
    );
  } else if (props.Heading != null) {
    return (
      <div className='wrap'>
        <button className='button'>{props.Heading}</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Allset</h1>
      </div>
    );
  }
};

export default Button;
