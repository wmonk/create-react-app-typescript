import * as React from 'react';
import styled from 'styled-components';
import { FieldInput, Input, MultipleInput, Addon, TextArea } from '@gssfed/vital-ui-kit-react';

const FormWrapper = styled.div`
  max-width: 500px;
  padding: 40px;
  margin: auto;
  text-align: left;
`;

const Form = () => (
  <FormWrapper>
    <FieldInput required label="Username">
      <Input placeholder="Enter your username" />
    </FieldInput>
    <FieldInput required label="Fullname">
      <MultipleInput>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </MultipleInput>
    </FieldInput>
    <FieldInput required label="Birthday">
      <MultipleInput>
        <Input placeholder="Month" />
        <Input placeholder="Day" />
        <Input placeholder="Year" />
      </MultipleInput>
    </FieldInput>
    <FieldInput label="Website">
      <MultipleInput>
        <Addon>http://</Addon>
        <Input placeholder="LabelAddon on the left" />
      </MultipleInput>
    </FieldInput>
    <FieldInput label="Comment" inline>
      <TextArea placeholder="Comment here" minRows={3} />
    </FieldInput>
  </FormWrapper>
)

export default Form;
