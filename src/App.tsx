import './App.css';
import { FC } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/home/home.page';
import { KennethsPage } from './components/kenneth/kenneth.page';
import { KwentinsPage } from './components/kwentin/kwentin.page';
import { ReecesPage } from './components/reece/reece.page';
import { TimothysPage } from './components/timothy/timothy.page';

export const App: FC = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className="height-of-navbar">
        <Container fluid>
          <Navbar.Brand href="/">The Team</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/kenneth">Kenneth</Nav.Link>
            <Nav.Link href="/kwentin">Kwentin</Nav.Link>
            <Nav.Link href="/reece">Reece</Nav.Link>
            <Nav.Link href="/timothy">Timothy</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Pages Switch */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/kenneth" component={KennethsPage} />
        <Route path="/kwentin" component={KwentinsPage} />
        <Route path="/reece" component={ReecesPage} />
        <Route path="/timothy" component={TimothysPage} />
      </Switch>
    </div>
  );
};
