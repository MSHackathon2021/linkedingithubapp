import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckBox from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankSharp from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './css/Features.css';

export interface IDevFeature {
  title: string;
  description: string;
  isChecked: boolean;
  sourceImgUrl: string;
  targetImageUrl: string;
  chooseGitHubRepo: boolean;
  showLinkedInPostTemplate: boolean;
  gitHubRepo?: string;
}

export interface IFeatureProps {
  isAuthenticated: boolean;
  repos: string[];
  modal: {
    show: (title: string, description?: string) => void;
    hide: () => void;
  };
}

const featuresInitialState: IDevFeature[] = [
  {
    title: 'Share GitHub PR merge on LinkedIn',
    description:
      'Share a LinkedIn post every time your PR gets merged in an open-source repository',
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    chooseGitHubRepo: true,
    gitHubRepo: '',
    showLinkedInPostTemplate: true,
  },
  {
    title: 'Share GitHub Release on LinkedIn',
    description:
      'Share a LinkedIn post every time your open-source repository gets a new release',
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    chooseGitHubRepo: true,
    gitHubRepo: '',
    showLinkedInPostTemplate: true,
  },
  {
    title: 'Update LinkedIn Profile using Github',
    description:
      'Update the README file of your repo and see how your LinkedIn profile bio is automagically updated.',
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    chooseGitHubRepo: false,
    showLinkedInPostTemplate: false,
  },
  {
    title: 'Show GitHub Badges on LinkedIn',
    description: 'Highlight badges received on GitHub as honors on LinkedIn.',
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    chooseGitHubRepo: false,
    showLinkedInPostTemplate: false,
  },
  {
    title: 'Show LinkedIn Certifications on Github',
    description:
      'Highlight certifications added on LinkedIn in the Achievements section on GitHub.',
    isChecked: false,
    sourceImgUrl: './LinkedIn.png',
    targetImageUrl: './GithubIcon.png',
    chooseGitHubRepo: false,
    showLinkedInPostTemplate: false,
  },
  {
    title: 'Show LinkedIn Articles in Github Profile',
    description: 'Show LinkedIn Articles in Github Profile',
    isChecked: false,
    sourceImgUrl: './LinkedIn.png',
    targetImageUrl: './GithubIcon.png',
    chooseGitHubRepo: false,
    showLinkedInPostTemplate: false,
  },
];

export default function DeveloperFeatures(props: IFeatureProps) {
  const [features, setFeatures] =
    React.useState<IDevFeature[]>(featuresInitialState);

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
                  {feature.showLinkedInPostTemplate && (
                    <div>
                      <TextField
                        required
                        sx={{ width: 400 }}
                        id='filled-multiline-static'
                        label='LinkedIn Post Description'
                        multiline
                        rows={4}
                        placeholder='Enter LinkedIn Post Description'
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
