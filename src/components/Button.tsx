import { useId } from '@fluentui/react-hooks';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import { IStackProps, Stack } from '@fluentui/react/lib/Stack';
import { ITooltipHostStyles, TooltipHost } from '@fluentui/react/lib/Tooltip';
import ContactCard from '../components/ContactCard';
import '../css/Button.scss';

export interface IButtonProps {
  Heading?: string | null;
  selected?: boolean;
  gitHubUserPic?: string;
  gitHubUserName?: string;
  linkedinUserPic?: string;
  linkedinUserName?: string;
  isAuthenticated: boolean;
  isAwaiting: boolean;
}

const rowProps: IStackProps = { horizontal: true, horizontalAlign: 'center' };

const tokens = {
  sectionStack: {
    childrenGap: 10,
  },
  spinnerStack: {
    childrenGap: 20,
  },
};

const calloutProps = { gapSpace: 0 };
const hostStyles: Partial<ITooltipHostStyles> = {
  root: { display: 'inline-block' },
};

const Button = (props: IButtonProps) => {
  const tooltipId = useId('tooltip');
  if (!props.isAuthenticated && !props.isAwaiting) {
    return (
      <Stack {...rowProps} tokens={tokens.spinnerStack}>
        <div className='see-community'>
          <TooltipHost
            content='Click here to sync your GitHub and LinkedIn profile'
            id={tooltipId}
            calloutProps={calloutProps}
            styles={hostStyles}
          >
            <span>Bring GitHub and LinkedIn closer.</span>
            <span>
              <div className='wrap'>
                <a
                  href='https://github.com/login/oauth/authorize?client_id=4390b5874ad74b454dc0'
                  className='button'
                >
                  {props.Heading}
                </a>
              </div>
            </span>
          </TooltipHost>
        </div>
      </Stack>
    );
  } else if (!props.isAuthenticated && props.isAwaiting) {
    return (
      <div className='loader'>
        <Stack {...rowProps} tokens={tokens.spinnerStack}>
          <Spinner
            label='Please wait .. while we set things for you!'
            ariaLive='assertive'
            labelPosition='right'
            size={SpinnerSize.large}
          />
        </Stack>
      </div>
    );
  } else if (props.isAuthenticated) {
    return (
      <div>
        <h1>
          <ContactCard
            gitHubUserPic={props.gitHubUserPic}
            gitHubUserName={props.gitHubUserName}
            linkedinUserPic={props.linkedinUserPic}
            linkedinUserName={props.linkedinUserName}
          ></ContactCard>
        </h1>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Button;
