import { FC } from 'react';
import { Card, Button, Row, Image, Container } from 'react-bootstrap';

import './home.css';
import typescriptLogo from '../../files/logos/typescriptlang-icon.svg';
import reactLogo from '../../files/logos/reactjs-icon.svg';
import html5Logo from '../../files/logos/html5-icon.svg';
import css3Logo from '../../files/logos/css-icon.svg';

export const Home: FC = () => {
  return (
    <div className="home-page-div">
      <h1>The Paogrammers</h1>
      <h3>Kenneth Cole, Kwentin Ransom, Reece Bourgeois, and Timothy McReynolds</h3>

      {/* Card Container for Languages Used */}
      <Container className="mt-1">
        <Row className="justify-content-center">
          {/* TypeScript */}
          <Card className="card-styling p-1 m-1">
            <Image src={typescriptLogo} />
            <Card.Body>
              <Card.Title>TypeScript</Card.Title>
              <Card.Text>
                TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It
                adds static type checking and advanced language features.
              </Card.Text>
              <Button>
                <a
                  className="link-styling"
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer">
                  TypeScript Homepage
                </a>
              </Button>
            </Card.Body>
          </Card>

          {/* React */}
          <Card className="card-styling p-1 m-1">
            <Image src={reactLogo} />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
                React is a JavaScript library for building user interfaces. It is maintained by
                Facebook and a community of individual developers and companies. React can be used
                as a base in the development of single-page or mobile applications.
              </Card.Text>
              <Button>
                <a
                  className="link-styling"
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer">
                  React Homepage
                </a>
              </Button>
            </Card.Body>
          </Card>

          {/* HTML5 */}
          <Card className="card-styling p-1 m-1">
            <Image src={html5Logo} />
            <Card.Body>
              <Card.Title>HTML5</Card.Title>
              <Card.Text>
                HTML5 is the fifth and current version of the HTML standard. HTML5 is a markup
                language used for structuring and presenting content on the World Wide Web.
              </Card.Text>
              <Button>
                <a
                  className="link-styling"
                  href="https://www.w3.org/TR/html5/"
                  target="_blank"
                  rel="noopener noreferrer">
                  HTML5 Homepage
                </a>
              </Button>
            </Card.Body>
          </Card>

          {/* CSS3 */}
          <Card className="card-styling p-1 m-1">
            <Image src={css3Logo} />
            <Card.Body>
              <Card.Title>CSS3</Card.Title>
              <Card.Text>
                CSS3 is the latest evolution of the Cascading Style Sheets language and aims to
                standardize and expand the CSS language.
              </Card.Text>
              <Button>
                <a
                  className="link-styling"
                  href="https://www.w3.org/Style/CSS/"
                  target="_blank"
                  rel="noopener noreferrer">
                  CSS3 Homepage
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};
