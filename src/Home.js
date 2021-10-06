import logo from './IntegrationIcon1.PNG';
import developerLogo from './developer.png'
import bloggerLogo from './blogger.jpg'
import orgLogo from './Organisation.jpg'
import './css/Home.css';
import * as React from 'react';
import Button from './components/Button';
import { ContextualMenu, IContextualMenuProps, IIconProps } from '@fluentui/react';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
const axios = require('axios');

const dropdownStyles = {
  dropdown: { width: 300 },
};

const options = [
  { key: 'Avatar', text: 'Avatar', itemType: DropdownMenuItemType.Header },
  { key: 'Developer', text: 'Developer' },
  { key: 'Organisation', text: 'Organisation' },
  { key: 'Blogger', text: 'Blogger'},
];

const stackTokens = { childrenGap: 20 };

const clientID = '4390b5874ad74b454dc0'
const clientSecret = 'e241aa404bcec128197cb9cecf0e13c395535ed0'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      avatar:null,
      gitHubIntegrated:false,
      LinkedinIntegrated:false,
      gitToken:null,
      linkedinUserProfile:null
    }
  }

  getAvatar()
  {
    if(this.state.avatar =="Developer")
    {
      return(
    <div className="section-wrap">
    <div className="medic-icons">
    <img src={developerLogo} />
    </div>
    <h2>Manage your {this.state.avatar} integrations </h2>
    <p>Integrate your github org's and repo's with linkedin to continously update your peers in ledin about the different events happening within your account . Make use of our additional support to promote your projects among Linkedin and find Sponsors and enjoy the deep and full profile integration of profile integration.</p>
    </div>);
    }
    else if (this.state.avatar =="Organisation")
    {
      return(
        <div className="section-wrap">
        <div className="medic-icons">
        <img src={orgLogo} />
        </div>
        <h2>Manage your {this.state.avatar} integrations </h2>
        <p>Integrate your Github organisation with Linkedin company page. The integration can take full use of notifying any major updates to your existing github code base to linkedin community and can help your organisation to fnd the right candidates for recruting.</p>
        </div>);
    }
    else if (this.state.avatar =="Blogger")
    {
      return(
        <div className="section-wrap">
        <div className="medic-icons">
        <img src={bloggerLogo} />
        </div>
        <h2>Manage your {this.state.avatar} integrations </h2>
        <p>Promote your Github blogs and content among your linkdein family and viceversa.Make use of the deep meanigfull profile integration and find new peers from github and linkedin more easily</p>
        </div>);
    }
    else{
      return(<></>)
    }
  }
   componentDidMount()
  {
    var temporaryUserId=this.getParameterByName("userdId");
    var accessToken=this.getParameterByName("gitaccessToken");
    var user = this.fetchLinkedinUser(temporaryUserId);
    if(temporaryUserId!=null && accessToken!=null )
    {
      this.setState({gitToken:accessToken,gitHubIntegrated:true,LinkedinIntegrated:true});

    }
  }

  fetchLinkedinUser(temporaryUserId)
  {
    axios.get('https://cors-anywhere.herokuapp.com/http://localhost:3000/user', {
      params: {
        user: temporaryUserId
      }
    })
    .then(function (response) {
      console.log(response);
    })
  }


   getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

  render() {
    return (
      <div>
      <section className="intro">
        <div className="logo"><img src={logo}  style={{width:'300px'}}/></div>
        <h1>GitHub Linkedin<span>Integrate your GitHub with Linkedin .</span></h1>
        <div className="see-community"><a href="/"><Button gitHubIntegrated={this.state.gitHubIntegrated} LinkedinIntegrated ={this.state.LinkedinIntegrated}></Button></a></div>
      </section>
      <section className="medical-community">
      <div className=".section-head">
      <Stack style={{paddingTop:'20px'}} horizontalAlign="center" verticalAlign="center" tokens={stackTokens}>
        <Dropdown
          placeholder="I am a "
          options={options}
          styles={dropdownStyles}  onChange={(e, selectedOption) => {
            this.setState({avatar:selectedOption.text})
        }}
        />
       </Stack>
      </div>
      {this.getAvatar()}
      </section>
      <section className="section-wrap">
        { this.state.avatar !=null &&
      <Button Heading = "Lets get started" gitHubIntegrated={this.state.gitHubIntegrated} LinkedinIntegrated ={this.state.LinkedinIntegrated}></Button>
        }
        <div className="community-members">
          <div className="medium-title">Medici in evidenza<span /></div>
          <div className="users">
            <div className="user"><a className="user__avatar" href="#"><img className="avatar" src="https://cdn0.iconfinder.com/data/icons/customicondesign-office6-shadow/128/#{type}.png" /></a>
              <div className="user__content">
                <div className="user__name"><a href="#">Dott. Alessandra Trezzo</a></div>
                <div className="user__hospital">Policlinico di Modena</div>
                <div className="user__city">Modena</div>
              </div>
              <div className="user__cv"><a href="#"><i className="fa fa-graduation-cap" /> <br /> c.v.</a></div>
            </div>
            <div className="user"><a className="user__avatar" href="#"><img className="avatar" src="https://cdn0.iconfinder.com/data/icons/customicondesign-office6-shadow/128/#{type}.png" /></a>
              <div className="user__content">
                <div className="user__name"><a href="#">Dott. Andrea Conti</a></div>
                <div className="user__hospital">Policlinico di Modena</div>
                <div className="user__city">Modena</div>
              </div>
              <div className="user__cv"><a href="#"><i className="fa fa-graduation-cap" /> <br /> c.v.</a></div>
            </div>
            <div className="user"><a className="user__avatar" href="#"><img className="avatar" src="https://cdn0.iconfinder.com/data/icons/customicondesign-office6-shadow/128/#{type}.png" /></a>
              <div className="user__content">
                <div className="user__name"><a href="#">Dott. Anna Maria Carrozzo</a></div>
                <div className="user__hospital">Università Tor Vergata</div>
                <div className="user__city">Roma</div>
              </div>
              <div className="user__cv"><a href="#"><i className="fa fa-graduation-cap" /> <br /> c.v.</a></div>
            </div>
            <div className="user"><a className="user__avatar" href="#"><img className="avatar" src="https://cdn0.iconfinder.com/data/icons/customicondesign-office6-shadow/128/#{type}.png" /></a>
              <div className="user__content">
                <div className="user__name"><a href="#">Dott. Cristina Mordenti</a></div>
                <div className="user__hospital">Policlinico Tor Vergata</div>
                <div className="user__city">Roma</div>
              </div>
              <div className="user__cv"><a href="#"><i className="fa fa-graduation-cap" /> <br /> c.v.</a></div>
            </div>
            <div className="user"><a className="user__avatar" href="#"><img className="avatar" src="https://cdn0.iconfinder.com/data/icons/customicondesign-office6-shadow/128/#{type}.png" /></a>
              <div className="user__content">
                <div className="user__name"><a href="#">Dott. Enrico Colosso</a></div>
                <div className="user__hospital">Ospedale Misericordia</div>
                <div className="user__city">Grosset</div>
              </div>
              <div className="user__cv"><a href="#"><i className="fa fa-graduation-cap" /> <br /> c.v.</a></div>
            </div>
            <div className="user"><a className="user__avatar" href="#"><img className="avatar" src="https://cdn0.iconfinder.com/data/icons/customicondesign-office6-shadow/128/#{type}.png" /></a>
              <div className="user__content">
                <div className="user__name"><a href="#">Dott. Flavia Salassu</a></div>
                <div className="user__hospital">Clinica S.Carlo</div>
                <div className="user__city">Paderno Dugnano</div>
              </div>
              <div className="user__cv"><a href="#"><i className="fa fa-graduation-cap" /> <br /> c.v.</a></div>
            </div>
          </div>
          <div className="see-more"><a href="/">Gurada tutti i medici della Community →</a></div>
        </div>
      </section>
      <section className="adv">
        <div className="banner"> <a href="/">Metti la tua pubblicità su mediexpert.it</a></div>
      </section>
      <section className="section-wrap">
        <div className="medical-news">
          <div className="medium-title">Medicina News<span /></div>
          <div className="posts">
            <div className="post">
              <div className="circle-icon red">H</div>
              <h3 className="post__title"><a href="#">Humira, approvato in Europa per i bambini e gli adolescenti da 4 anni di età con forma grave di psoriasi a placche cronica</a></h3>
            </div>
            <div className="post">
              <div className="circle-icon">A</div>
              <h3 className="post__title"><a href="#">Approvato in Europa Xadago nel trattamento della malattia di Parkinson moderata-grave con fluttuazioni motorie</a></h3>
            </div>
            <div className="post">
              <div className="circle-icon violet">P</div>
              <h3 className="post__title"><a href="#">Psoriasi a placche moderata-grave: BI 655066, un inibitore Il-23, superiore a Ustekinumab, un inibitore IL-12/23</a></h3>
            </div>
            <div className="post">
              <div className="circle-icon blue">A</div>
              <h3 className="post__title"><a href="#">Aducanumab riduce le placche amiloidi e rallenta la compromissione clinica nei pazienti con malattia di Alzheimer prodromica o lieve</a></h3>
            </div>
            <div className="post">
              <div className="circle-icon">E</div>
              <h3 className="post__title"><a href="#">Enalapril associato a Acido Folico riduce il rischio di ictus nei pazienti con ipertensione</a></h3>
            </div>
          </div>
          <div className="see-more"><a href="/">Gurada tutte le news Xagena →</a></div>
        </div>
      </section>
    </div>
    );

  }
}


// function Home() {
  
// }

export default Home;
