import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckBox from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankSharp from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './css/Features.css';

export interface IOrgFeature {
  title: string;
  description: string;
  isChecked: boolean;
  sourceImgUrl: string;
  targetImageUrl: string;
  showLinkedInPostTemplate: boolean;
  gitHubRepo?: string;
  linkedInCompany?: string;
  linkedInPlaceholder?: string;
  chooseGitHubRepo: boolean;
  chooseLinkedInCompany: boolean;
}

export interface IFeatureProps {
  isAuthenticated: boolean;
  repos: string[];
  linkedInCompanies: string[];
  modal: {
    show: (title: string, description?: string) => void;
    hide: () => void;
  };
}

const featuresInitialState: IOrgFeature[] = [
  {
    title: 'Highlight newly added sponsees in LinkedIn Company Post.',
    description:
      "Share a LinkedIn Company Post every time a new developer is sponsored by the Organization. The sponsee can be tagged in the post highlighting the sponsee's work.",
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    showLinkedInPostTemplate: true,
    chooseGitHubRepo: false,
    chooseLinkedInCompany: true,
    linkedInCompany: '',
    linkedInPlaceholder: `📣 We are now sponsoring {{peronName}}
    
🙏 We are thankful for the contributions you have made so far to the open-source community and hope to support you in your future initiatives too.

#Microsoft365Dev`
  },
  {
    title: 'Share New Repository Created in LinkedIn Company Post.',
    description:
      'Share a LinkedIn Company Post every time a new repository is created in the Organization.',
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    showLinkedInPostTemplate: true,
    chooseGitHubRepo: false,
    chooseLinkedInCompany: true,
    linkedInCompany: '',
    linkedInPlaceholder: `📣 New Repository {{repoName}} Created

🤖 Try: git clone {{repoUrl}}

#Microsoft365Dev`
  },
  {
    title: 'Share New Release for a repository in LinkedIn Company Post',
    description:
      'Share a LinkedIn Company Post every time there is a new release for any repository in the Organization. The release notes can also be added along with tagging the contributors.',
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    showLinkedInPostTemplate: true,
    chooseGitHubRepo: true,
    gitHubRepo: '',
    chooseLinkedInCompany: true,
    linkedInCompany: '',
    linkedInPlaceholder: `📣 New Release Created for {{packageName}}

🤖 Try: npm i -g @{{packageName}}

Release notes: https://repo-release-notes

#Microsoft365Dev`
  },
  {
    title:
      'Share New Package added to an organization in LinkedIn Company Post',
    description:
      'Share a LinkedIn Company Post every time a new package is added or updated in the Organization.',
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    showLinkedInPostTemplate: true,
    chooseGitHubRepo: false,
    chooseLinkedInCompany: true,
    linkedInCompany: '',
    linkedInPlaceholder: `📣 New Package Version Released for {{packageName}}

🤖 Try: npm i -g @{{packageName}}@next

Release notes: https://repo-release-notes

#Microsoft365Dev`
  },
];

export default function OrganizationFeatures(props: IFeatureProps) {
  const [features, setFeatures] =
    React.useState<IOrgFeature[]>(featuresInitialState);

  const handleChange = (featureId: number) => (event: any, isExpanded: any) => {
    const allFeatures = [...features];
    allFeatures[featureId].isChecked = isExpanded;
    setFeatures(allFeatures);
  };

  const setGitHubRepo = (featureId: number, ev: SelectChangeEvent) => {
    const allFeatures = [...features];
    allFeatures[featureId].gitHubRepo = ev.target.value;
    setFeatures(allFeatures);
  };

  const setLinkedInCompany = (featureId: number, ev: SelectChangeEvent) => {
    const allFeatures = [...features];
    allFeatures[featureId].linkedInCompany = ev.target.value;
    setFeatures(allFeatures);
  };

  const styles = () => ({
    dropdownOpen: {
      transform: 'rotate(-180deg)',
    },
    dropdownClosed: {
      transform: 'rotate(0)',
    },
  });

  const classes = styles();
  return (
    <div>
      {props.isAuthenticated &&
        features.map((feature, i) => {
          return (
            <Accordion expanded={feature.isChecked} onChange={handleChange(i)}>
              <AccordionSummary
                expandIcon={
                  feature.isChecked ? (
                    <CheckBox style={classes.dropdownOpen} />
                  ) : (
                    <CheckBoxOutlineBlankSharp />
                  )
                }
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>
                  <div className='featureHeader'>
                    <div className='featureImageContainer'>
                      <img height={30} width={30} src={feature.sourceImgUrl} />
                      <ArrowRightAltIcon />
                      <img
                        height={30}
                        width={30}
                        src={feature.targetImageUrl}
                      />
                    </div>
                    <div className='featureTitle'>{feature.title}</div>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>{feature.description}</div>
                  <br />
                  {feature.chooseGitHubRepo && (
                    <div>
                      <FormControl sx={{ width: 400 }} required>
                        <InputLabel id='demo-simple-select-label'>
                          Choose a Repository
                        </InputLabel>
                        <Select
                          labelId='demo-simple-select-label'
                          id='demo-simple-select'
                          value={feature.gitHubRepo}
                          label='Choose GitHub Repository'
                          onChange={(ev) => setGitHubRepo(i, ev)}
                        >
                          {props.repos.map((e, keyIndex) => {
                            return (
                              <MenuItem key={keyIndex} value={e}>
                                {e}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  )}
                  <br />
                  {feature.chooseLinkedInCompany && (
                    <div>
                      <FormControl sx={{ width: 400 }} required>
                        <InputLabel id='demo-simple-select-label'>
                          Choose a LinkedIn Company
                        </InputLabel>
                        <Select
                          labelId='demo-simple-select-label'
                          id='demo-simple-select'
                          value={feature.linkedInCompany}
                          label='Choose LinkedIn Company'
                          onChange={(ev) => setLinkedInCompany(i, ev)}
                        >
                          {props.linkedInCompanies.map((e, keyIndex) => {
                            return (
                              <MenuItem key={keyIndex} value={e}>
                                {e}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  )}
                  <br />
                  {feature.showLinkedInPostTemplate && (
                    <div>
                      <TextField
                        required
                        sx={{ width: 400 }}
                        id='filled-multiline-static'
                        label='LinkedIn Post Description'
                        multiline
                        rows={4}
                        defaultValue={feature.linkedInPlaceholder ? feature.linkedInPlaceholder : 'LinkedIn Post Description'}
                      />
                    </div>
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      {props.isAuthenticated ? (
        <div className='formFooter'>
          <Stack spacing={2} direction='row'>
            <Button
              variant='contained'
              onClick={() =>
                props.modal.show('GitLinked', 'Preferences Updated')
              }
            >
              Save
            </Button>
            <Button variant='outlined'>Cancel</Button>
          </Stack>
        </div>
      ) : (
        <div className='formFooter'>
          <Stack spacing={2} direction='row'>
            <Button variant='contained'>
              <a
                style={{ color: 'white', textDecoration: 'none' }}
                href='https://github.com/login/oauth/authorize?client_id=4390b5874ad74b454dc0'
              >
                Link your accounts
              </a>
            </Button>
          </Stack>
        </div>
      )}
    </div>
  );
}
