import '../css/Button.css'

function Button(props)
{
     if((!props.gitHubIntegrated || !props.LinkedinIntegrated) && props.Heading==null)
     {
      return (   
<div className="wrap">
  <a href="https://github.com/login/oauth/authorize?client_id=4390b5874ad74b454dc0" className="button" style={{marginRight:'10px' }} className="button">GitHub</a>
  <a href="http://localhost:3000/auth/linkedin" className="button">Linkedin</a>
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
       return(<div><h1>Allset</h1></div>)
     }
}

export default Button