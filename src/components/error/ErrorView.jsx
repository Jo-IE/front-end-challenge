import React, { Component } from 'react';
import {
  Header,
  Segment,
  Button,
  Container,
  Grid,
  Image,
  Accordion,
  Icon
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import OOPSIN from 'images/OOPSIN.png';

class ErrorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
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
              <Image src={OOPSIN} size="tiny" centered />
              <Header as="h1" style={{ textAlign: 'center' }}>
                Something went wrong
              </Header>

              <Header
                as="h2"
                style={{
                  textAlign: 'center',
                  paddingTop: '5px',
                  color: '#AEB2BA'
                }}
              >
                ... And it's probably our fault.
              </Header>
              <Accordion
                style={{
                  textAlign: 'center',
                  paddingTop: '10vh',
                  color: '#AEB2BA',
                  fontSize: '1rem'
                }}
              >
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  View Error
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>{this.props.error.toString()}</p>
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
                  <p>{this.props.info.componentStack}</p>
                </Accordion.Content>
              </Accordion>
            </Segment>
          ) : (
            <Segment clearing style={{ height: '80vh', paddingTop: '20vh' }}>
              <Grid columns={2} padded>
                <Grid.Column>
                  <Header
                    as="h1"
                    floated="left"
                    style={{ fontSize: '9rem', marginLeft: '10vw' }}
                  >
                    404
                  </Header>
                </Grid.Column>
                <Grid.Column>
                  <Header
                    as="h2"
                    floated="right"
                    style={{
                      fontSize: '3rem',
                      marginRight: '10vw',
                      marginTop: '5vh',
                      color: '#AEB2BA'
                    }}
                  >
                    We couldn't find <br /> that page.
                  </Header>
                </Grid.Column>
              </Grid>
            </Segment>
          )}

          <Segment style={{ backgroundColor: '#900E2C', marginTop: '0em' }}>
            <Button
              centered
              className="backbutton"
              size="massive"
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
