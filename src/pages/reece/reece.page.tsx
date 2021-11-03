import { FC } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import './reece.css';
import ReecesResume from '../../resumes/Resume - Reece Bourgeois.pdf';
import GitHubLogo from '../../logos/GitHub-Mark-Light-32px.png';
import LinkedInLogo from '../../logos/In-White-34.png';

export const ReecesPage: FC = () => {
  return (
    <div className="page">
      {/* Left Column */}
      <div className="left-column">
        {/* Content */}
        <div className="intro">
          <h1>
            Hi, I'm <h1 className="reece-b">Reece Bourgeois</h1>
          </h1>
          <h4 className="full-stack-dev">Full Stack Developer</h4>
          <p className="mad-scientist">Aspiring Mad Scientist</p>
          <div className="mt-2">
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
        <h1>THis is a test</h1>
      </div>
      {/* <Document file={ReecesResume}>
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
};
