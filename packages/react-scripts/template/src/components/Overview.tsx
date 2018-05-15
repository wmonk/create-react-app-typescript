import * as React from 'react';
import styled from 'styled-components';
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  Icon,
  Modal,
} from '@gssfed/vital-ui-kit-react';

import CardCommon from './CardCommon';

const SectionWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
`;

const SectionTitle = styled.div`
  font-size: 32px;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  margin-right: 5px;
  display: inline-block;
`;

const Vertical = styled.div`
  margin-bottom: 10px;
`;

interface ISection {
  title: string,
  children: React.ReactNode,
}

const Section = ({ title, children }: ISection) => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionWrapper>
);

// interface State {
//   showModal: boolean,
// }

class Overview extends React.PureComponent {
  public state = {
    showModal: false
  };
  public render() {
    return (
      <div>
        <Section title="Avatar">
          {AVATAR.map((avatar, i) => (
            <Wrapper key={i}>
              <Avatar {...avatar} />
            </Wrapper>
          ))}
        </Section>
        <Section title="Button">
          <ButtonGroup
            marginHorizontal="10px"
            style={{ paddingBottom: '20px' }}
          >
            <Button link>Link</Button>
            <Button dark link>
              Dark Link
            </Button>
            <Button link underline>
              Underline Link
            </Button>
            <Button link underline dark>
              Dark Underline Link
            </Button>
          </ButtonGroup>
          {BUTTON_STYLE.map((button, i) => (
            <ButtonGroup
              key={i}
              marginHorizontal="10px"
              style={{ paddingBottom: '20px' }}
            >
              {NATRUE.map((nature, index) => (
                <Button
                  nature={nature}
                  key={`next${index}`}
                  flat={button === 'flat'}
                  subtle={button === 'subtle'}
                  light={button === 'light'}
                >
                  {nature === 'default' ? button : nature}
                </Button>
              ))}
            </ButtonGroup>
          ))}
          <ButtonGroup>
            {SIZE.map((size, i) => (
              <Button size={size} key={i} flat nature="primary">
                {size}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup>
            {SIZE.reverse().map((size, i) => (
              <Button key={i} size={size} flat>
                {size}
              </Button>
            ))}
          </ButtonGroup>
        </Section>
        <Section title="Card">
          <Vertical>
            <CardCommon />
          </Vertical>
          <Vertical>
            <Card width="300px" style={{ margin: 'auto' }}>
              <Card.Container style={{ textAlign: 'center' }}>
                <Icon name="thumbs-up" size="90" color="#0e86fe" />
                <div
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.5rem',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    paddingTop: '1.25rem',
                    width: '100%',
                    color: '#456297'
                  }}
                >
                  Congrats
                </div>
                <div
                  style={{
                    fontSize: '0.93333rem',
                    lineHeight: '1.25rem',
                    paddingTop: '10px'
                  }}
                >
                  Let’s Get Started
                </div>
              </Card.Container>
              <Card.Footer>
                <Card.FooterButton primary>Confirm</Card.FooterButton>
              </Card.Footer>
            </Card>
          </Vertical>
        </Section>
        <Section title="Modal">
          <Button
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >
            Click here!
          </Button>
          <Modal show={this.state.showModal}>
            <CardCommon content="Modal is controlled by state" onConfirm={() => {this.setState({showModal: false})}} />
          </Modal>
        </Section>
      </div>
    );
  }
}

export default Overview;

const AVATAR = [
  { size: 'xsmall', round: true, outline: true },
  { gender: 'male', size: 'small', round: true, outline: true },
  { gender: 'female', size: 'medium', round: true, badge: 10 },
  { gender: 'male', size: 'large', round: true },
  { gender: 'female', size: 'xlarge', round: true, badge: 100 }
];

const BUTTON_STYLE = ['default', 'flat', 'subtle', 'light'];

const NATRUE = ['default', 'primary', 'success', 'info', 'alarm', 'warning'];

const SIZE = ['xlarge', 'large', 'medium', 'small', 'xsmall'];
