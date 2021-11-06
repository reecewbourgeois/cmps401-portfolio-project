import { FC, useState } from 'react';
import { Image, ListGroup, Modal } from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import {
  Timeline,
  Events,
  ImageEvent,
  TextEvent,
  // @ts-ignore
} from '@merc/react-timeline';

import './reece.css';
import ReecesResume from '../../files/resumes/Resume - Reece Bourgeois.pdf';
import GitHubLogo from '../../files/logos/GitHub-Mark-Light-32px.png';
import LinkedInLogo from '../../files/logos/In-White-34.png';
import ResumeIcon from '../../files/logos/icons8-resume-40.png';
import roliThemeJSON from './timeline-theme.json';
import Robotics2016Team from '../../files/photos/reece/2016 Robotics Team.jpg';
import Robotics2017Team from '../../files/photos/reece/2017 Robotics Team.jpg';
import Robotics2018Team from '../../files/photos/reece/2018 Robotics Team.jpg';

const roliTheme = roliThemeJSON;

export const ReecesPage: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="page">
      {/* Left Column */}
      <div className="left-column">
        {/* Content */}
        <div className="intro">
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
            <button className="image-button" onClick={handleShow}>
              <Image src={ResumeIcon} alt="Resume Modal" />
            </button>
          </div>
        </div>
        {/* Credit to the author of the resume icon */}
        <div className="resume-icon-credit">
          <a href="https://icons8.com/icon/61016/resume">Resume</a> icon by{' '}
          <a href="https://icons8.com">Icons8</a>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <Timeline
          theme={roliTheme}
          opts={{
            layout: 'alt-evts-inline-date',
          }}>
          <Events>
            {/* Full Stack Developer Project #2 */}
            <TextEvent date="2021 - Present" text="">
              <h3>Full Stack Developer -- Project #2</h3>
              <hr />
              <ListGroup horizontal className="code-list align-self-center">
                <ListGroup.Item className="code-list-item">Node.js</ListGroup.Item>
                <ListGroup.Item className="code-list-item">Express.js</ListGroup.Item>
                <ListGroup.Item className="code-list-item">TypeScript</ListGroup.Item>
                <ListGroup.Item className="code-list-item">React</ListGroup.Item>
                <ListGroup.Item className="code-list-item">SQL</ListGroup.Item>
              </ListGroup>
              <h6 className="mt-2 align-self-center">
                A web app for a client to track project cost estimation and payroll.
              </h6>
            </TextEvent>

            {/* Full Stack Developer Project #1 */}
            <TextEvent date="2020" text="">
              <h3>Full Stack Developer -- Project #1</h3>
              <hr />
              <ListGroup horizontal className="align-self-center">
                <ListGroup.Item className="code-list-item">Node.js</ListGroup.Item>
                <ListGroup.Item className="code-list-item">Express.js</ListGroup.Item>
                <ListGroup.Item className="code-list-item">React</ListGroup.Item>
                <ListGroup.Item className="code-list-item">MongoDB</ListGroup.Item>
              </ListGroup>
              <h6 className="mt-2 align-self-center">
                An internal web app for inventory management and repair tracking with a ticketing
                system.
              </h6>
            </TextEvent>

            {/* Became a Full Stack Developer */}
            <TextEvent date="Jan 2020 - Present" text="">
              <h3>
                Full Stack Developer for{' '}
                <a href="https://www.verapro.net/" className="fst-italic">
                  VeraPro
                </a>
              </h3>
            </TextEvent>

            {/* Imaging Technician */}
            <TextEvent date="Mar 2019 - Mar 2021" text="">
              <h3>
                Imaging Technician for{' '}
                <a href="https://www.verapro.net/" className="fst-italic">
                  VeraPro
                </a>
              </h3>
              <hr />
              <h6>
                • Imaged DELL Windows computers & Chromebooks
                <br />• Managed device inventory and quality control
              </h6>
            </TextEvent>

            {/* Student Tech */}
            <TextEvent date="Aug 2018 - Mar 2019" text="">
              <h3>
                Student Technician for{' '}
                <a href="https://www.apsb.org/" className="fst-italic">
                  Ascension Parish School Board
                </a>
              </h3>
              <hr />
              <h6>• Assisted the head tech for East Ascension High School</h6>
            </TextEvent>

            {/* Imaging Technician */}
            <TextEvent date="May 2018 - Aug 2018" text="">
              <h3>
                Imaging Technician for{' '}
                <a href="https://www.verapro.net/" className="fst-italic">
                  VeraPro
                </a>
              </h3>
              <hr />
              <h6>
                • Imaged DELL Windows computers & Chromebooks
                <br />• Managed device inventory and quality control
              </h6>
            </TextEvent>

            {/* Robotics Junior Year */}
            <ImageEvent
              date="2018"
              text="###FIRST Power Up Competition"
              src={Robotics2018Team}
              alt="Team Photo"
              credit="">
              <h4 className="align-self-center">
                <a href="https://www.firstinspires.org/robotics/frc" className="fst-italic">
                  FRC
                </a>{' '}
                Team 4053
              </h4>
              <ListGroup horizontal className="align-self-center">
                <ListGroup.Item className="code-list-item">Java</ListGroup.Item>
              </ListGroup>
              <h5 className="align-self-center">Captain, Programmer</h5>
            </ImageEvent>

            {/* Robotics Sophomore Year */}
            <ImageEvent
              date="2017"
              text="###FIRST Steamworks Competition"
              src={Robotics2017Team}
              alt="Team Photo"
              credit="">
              <h4 className="align-self-center">
                <a href="https://www.firstinspires.org/robotics/frc" className="fst-italic">
                  FRC
                </a>{' '}
                Team 4053
              </h4>
              <ListGroup horizontal className="align-self-center">
                <ListGroup.Item className="code-list-item">Java</ListGroup.Item>
              </ListGroup>
              <h5 className="align-self-center">Co-Captain, Programmer</h5>
            </ImageEvent>

            {/* Robotics Freshman Year */}
            <ImageEvent
              date="2016"
              text="###FIRST Stronghold Competition "
              src={Robotics2016Team}
              alt="Team Photo"
              credit="">
              <h4 className="align-self-center">
                <a href="https://www.firstinspires.org/robotics/frc" className="fst-italic">
                  FRC
                </a>{' '}
                Team 4053
              </h4>
              <ListGroup horizontal className="align-self-center">
                <ListGroup.Item className="code-list-item">Java</ListGroup.Item>
              </ListGroup>
              <h5 className="align-self-center">Programmer</h5>
            </ImageEvent>
          </Events>
        </Timeline>
      </div>

      {/* Resume Modal */}
      <Modal centered show={show} onHide={handleClose}>
        <Document file={ReecesResume}>
          <Page pageNumber={1} />
        </Document>
      </Modal>
    </div>
  );
};
