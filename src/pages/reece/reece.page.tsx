import { FC } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import './reece.css';
import ReecesResume from '../../files/resumes/Resume - Reece Bourgeois.pdf';
import GitHubLogo from '../../files/logos/GitHub-Mark-Light-32px.png';
import LinkedInLogo from '../../files/logos/In-White-34.png';
import ProgLangLogos from '../../files/photos/reece/programming_lang_badges.svg';

export const ReecesPage: FC = () => {
  return (
    <div className="page">
      {/* Left Column */}
      <div className="left-column">
        {/* Content */}
        <div className="intro">
          {/* <h1 className="reece-b">Reece Bourgeois</h1> */}
          <h1>
            Hi, I'm <p className="reece-b m-0">Reece Bourgeois</p>
          </h1>
          <hr />
          <h3 className="full-stack-dev">Full Stack Developer</h3>
          <h5>Computer Science Major</h5>
          <div className="mt-3">
            <a href="https://github.com/Rupersman">
              <Image src={GitHubLogo} alt="GitHub Link" />
            </a>
            <a href="https://www.linkedin.com/in/reecewaynebourgeois/">
              <Image className="ms-3" src={LinkedInLogo} alt="LinkedIn Link" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* Try out popovers */}
      </div>
      {/* <Document file={ReecesResume}>
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
};
