import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckBox from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankSharp from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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
}

export interface IFeatureProps {
  isAuthenticated: boolean;
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
  },
  {
    title: 'Share New Repository Created in LinkedIn Company Post.',
    description:
      'Share a LinkedIn Company Post every time a new repository is created in the Organization.',
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    showLinkedInPostTemplate: true,
  },
  {
    title: 'Share New Release for a repository in LinkedIn Company Post',
    description:
      'Share a LinkedIn Company Post every time there is a new release for any repository in the Organization. The release notes can also be added along with tagging the contributors.',
    isChecked: false,
    sourceImgUrl: './GithubIcon.png',
    targetImageUrl: './LinkedIn.png',
    showLinkedInPostTemplate: true,
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
      {features.map((feature, i) => {
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
                    <img height={30} width={30} src={feature.targetImageUrl} />
                  </div>
                  <div className='featureTitle'>{feature.title}</div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div>{feature.description}</div>
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
            <Button variant='contained'>Save</Button>
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
