import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from './components/Button';
import './css/Home.css';
import './css/Card.css';
import logo from './media/IntegrationIcon1.png';
import DeveloperFeatures from './DeveloperFeatures';
import OrganizationFeatures from './OrganizationFeatures';
import Personas from './Personas';
const axios = require('axios');

export interface IHome {
  avatar: string | null;
  isAuthenticated: boolean
  linkedinUserProfile: object | null;
  gitHubUserPic: string;
  gitHubUserName: string;
  linkedinUserPic: string;
  linkedinUserName: string;
  repos: string[];
  isAwaiting: boolean;
}


const Home: React.FunctionComponent = () => {
  const [userData, setUserData] = useState<IHome>({
    avatar: null,
    isAuthenticated: false,
    linkedinUserProfile: null,
    gitHubUserPic: "",
    gitHubUserName: "",
    linkedinUserPic: "",
    linkedinUserName: "",
    repos: [""],
    isAwaiting: true
  });

  const [features, setFeatures] = useState({
    autoPost: false,
    achievementSync: false,
    bioUpdate: false,
  });

  const [currentPersona, setCurrentPersona] = useState('Developer');

  const fetchLinkedinUser = (temporaryUserId: string) => {

    if (temporaryUserId != null) {
      setUserData({ ...userData, isAwaiting: true });
      axios.get('https://githublinkedinservice.azurewebsites.net/user', {
        params: {
          userId: temporaryUserId
        }
      }).then(function (response: any) {
        console.log(response);
        setUserData({
          ...userData,
          isAuthenticated: true,
          gitHubUserPic: response.data.Git.avatar_url,
          gitHubUserName: response.data.Git.name,
          linkedinUserPic: response.data.Linkedin.Photo,
          linkedinUserName: response.data.Linkedin.Displayname,
          repos: response.data.Git.repos,
          isAwaiting: false
        });
      })

    }
  };

  const saveToSessionStorage = (key: string, temporaryUserId: string) => {
    try {
      localStorage.removeItem(key);
      window.localStorage.setItem(key, temporaryUserId);
    }
    catch (err) {
      console.log(err)
    }
  };

  const FetchFromSessionStorage = (key: string) => {
    try {
      return window.localStorage.getItem(key);
    }
    catch (err) {
      return "";
    }
  };

  const getParameterByName = (
    name: string,
    url: string = window.location.href
  ) => {

    var val = FetchFromSessionStorage(name);
    console.log(`tempid :${val}`)
    if (val == null || val == "") {
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return 'null';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    else {
      return val;
    }
  };

  //Initial render
  useEffect(() => {
    var temporaryUserId = getParameterByName('userdId');
    if (temporaryUserId != null) {
      saveToSessionStorage("userdId", temporaryUserId);
      fetchLinkedinUser(temporaryUserId);
    }
    else {
      setUserData({ ...userData, isAwaiting: false });
    }
  }, []);

  return (
    <div>
      <section className='intro'>
        <div className='logo'>
          <img src={logo} style={{ width: '300px' }} />
        </div>
        <h1>
          GitLinked
        </h1>
        <Button
          isAuthenticated={userData.isAuthenticated}
          gitHubUserPic={userData.gitHubUserPic}
          gitHubUserName={userData.gitHubUserName}
          linkedinUserPic={userData.linkedinUserPic}
          linkedinUserName={userData.linkedinUserName}
          Heading="Lets get started"
          isAwaiting={userData.isAwaiting}
        ></Button>
      </section>
      <section className='medical-community'>
        <div className='.section-head'>
          <Personas setCurrentPersona={(val: string) => setCurrentPersona(val)} />
        </div>
      </section>

      <section className='section-wrap'>
        {/*<DeveloperFeatures />*/}
        {userData.avatar && (
          <div className='features-list'>

          </div>
        )}
        <div className='community-members'>
          <div className='medium-title'>
            Features
            <span />
          </div>
          <div className='users'>
            {currentPersona === 'Developer' &&
              <DeveloperFeatures isAuthenticated={userData.isAuthenticated} repos={userData.repos} />
            }
            {currentPersona === 'Organization' &&
              <OrganizationFeatures isAuthenticated={userData.isAuthenticated} />
            }
          </div>
          <div className='see-more'>
            <a href='https://garagehackbox.azurewebsites.net/hackathons/2356/projects/104280'>GitLinked →</a>
          </div>
        </div>
      </section>
      <section className='adv'>
        <div className='banner'>
          {' '}
          <a href='https://garagehackbox.azurewebsites.net/hackathons/oneweek/2021/main'>Micosoft Global Hackathon</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
