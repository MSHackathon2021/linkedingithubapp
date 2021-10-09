import '../css/Button.css'
import ContactCard from './ContactCard';

function Button(props)
{
     if((!props.gitHubIntegrated || !props.LinkedinIntegrated) && props.Heading==null)
     {
      return (   
<div className="wrap">
  <a href="https://github.com/login/oauth/authorize?client_id=4390b5874ad74b454dc0" className="button" style={{marginRight:'10px' }} className="button">GitHub</a>
  <a href="https://githublinkedinservice.azurewebsites.net/auth/linkedin" className="button">Linkedin</a>
</div>    
    )
     }
     else if(props.Heading !=null)
     {
      return (   
        <div className="wrap">
          <button className="button">{props.Heading}</button>
        </div>    
            )
     }
     else{
       return(<ContactCard gitHubUserPic={props.gitHubUserPic} gitHubUserName={props.gitHubUserName} linkedinUserPic={props.linkedinUserPic} linkedinUserName={props.linkedinUserName}></ContactCard>)
     }
}

export default Button