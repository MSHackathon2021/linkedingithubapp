import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckBox from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankSharp from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import Minimize from '@mui/icons-material/Minimize';
import DoneIcon from '@mui/icons-material/Done'

export default function DeveloperFeatures() {
    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };
    const styles = () => ({
        dropdownOpen: {
          transform: "rotate(-180deg)"
        },
        dropdownClosed: {
          transform: "rotate(0)"
        }
      });

    const classes = styles();
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? < CheckBox style={classes.dropdownOpen}/> : <CheckBoxOutlineBlankSharp/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><img height={30} width={30} src="./GithubIcon.png"></img>&#10140; <img height={30} width={30} src="./LinkedIn.png"></img> Update LinkedIn Profile using Github</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Update the Readme file of your repo and see how your linkedin profile is automagically updated.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? < CheckBox style={classes.dropdownOpen}/> : <CheckBoxOutlineBlankSharp/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><img height={30} width={30} src="./GithubIcon.png"></img>&#10140; <img height={30} width={30} src="./LinkedIn.png"></img> Show Achievements from LinkedIn to Github</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ?< CheckBox style={classes.dropdownOpen}/> : <CheckBoxOutlineBlankSharp/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography><img height={30} width={30} src="./GithubIcon.png"></img>&#10140; <img height={30} width={30} src="./LinkedIn.png"></img> Show LinkedIn Articles in Github Profile</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    );

}
