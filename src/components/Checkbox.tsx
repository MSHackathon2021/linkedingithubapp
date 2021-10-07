import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { Stack } from '@fluentui/react/lib/Stack';
import * as React from 'react';

export interface IMyCheckBoxProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

// Optional extra props to pass through to the input element
// const inputProps: ICheckboxProps['inputProps'] = {
//   onFocus: () => console.log('Checkbox is focused'),
//   onBlur: () => console.log('Checkbox is blurred'),
//   // Passing data-* props is supported but currently requires casting
//   ...({ 'data-foo': 'bar' } as any),
// };

// Used to add spacing between example checkboxes
const stackTokens = { childrenGap: 10 };

export const MyCheckbox = (props: IMyCheckBoxProps) => {
  return (
    <Stack tokens={stackTokens}>
      <Checkbox
        label={props.label}
        checked={props.isChecked}
        onChange={props.onChange}
        boxSide='start'
      />
    </Stack>
  );
};
