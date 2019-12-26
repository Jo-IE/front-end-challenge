import React, { Component } from 'react';
import {
  Header,
  Segment,
  Button,
  Container,
  Image,
  Accordion,
  Icon,
  Input,
  Message
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import OOPSIN from 'images/OOPSIN.png';

class ErrorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Container>
        <Segment.Group piled>
          {this.props.error != null ? (
            <Segment clearing>
              <Image
                src={OOPSIN}
                size="small"
                centered={true}
                alt="OSPIN logo that reads 500 OOPSIN"
              />
              <Header
                as="h1"
                style={{
                  textAlign: 'center',
                  color: '#900E2C',
                  paddingTop: '5vh'
                }}
              >
                Something went wrong
              </Header>

              <Header
                as="h3"
                style={{
                  textAlign: 'center',
                  color: '#AEB2BA'
                }}
              >
                ... And it's probably our fault.
              </Header>

              <Accordion
                style={{
                  textAlign: 'center',
                  paddingTop: '10vh',
                  color: '#AEB2BA'
                }}
              >
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  View error
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <Message negative content={this.props.error.toString()} />
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  View stack trace
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <Message negative content={this.props.info.componentStack} />
                </Accordion.Content>
              </Accordion>
            </Segment>
          ) : (
            <Segment
              clearing
              style={{
                paddingTop: '10vh',
                backgroundColor: '#900E2C',
                textAlign: 'center'
              }}
            >
              <Header
                as="h1"
                size="huge"
                style={{ color: 'white', fontSize: '4rem' }}
              >
                404
              </Header>

              <Header
                as="h2"
                style={{
                  color: '#AEB2BA'
                }}
              >
                Page Not Found
              </Header>

              <Header
                as="h3"
                style={{
                  color: '#AEB2BA'
                }}
              >
                Couldn't find what you were looking for? <br />
                Try searching our website.
              </Header>
              <Input
                icon="search"
                placeholder='e.g "bioprocessor"'
                aria-label="Search"
              />
            </Segment>
          )}

          <Segment style={{ backgroundColor: '#900E2C', padding: '5vh' }}>
            <Button
              centered="true"
              className="backbutton"
              onClick={() => this.props.history.push('/')}
              style={{ backgroundColor: '#ffff' }}
            >
              Go Back Home
            </Button>
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

export default withRouter(ErrorView);
