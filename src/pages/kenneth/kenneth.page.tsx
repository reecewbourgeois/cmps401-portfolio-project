import { FC, useState } from 'react';
import {Grid, Card, CardMedia, Typography} from "@mui/material"

import { Modal } from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import "./kenneth.css";
import KennethImage from "../../files/photos/kenneth/kenneth.jpg"
import KennethResume from '../../files/resumes/Kenneth-Cole-Resume_1.pdf';
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { KennethFooter } from "./components/KennethFooter";

export const KennethsPage: FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleSetShowResumeModal = () => {
    setShowResumeModal(!showResumeModal);
  }
  
  return (
    <div className="kennethBody">
      <Grid container>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 300 }} className="kennethPhoto">
            <CardMedia
                component="img"
                height="400"
                image={KennethImage}
                alt="green iguana"
            />
          </Card>
        </Grid>
        <Grid xs={8} className="kennethTitleContainer">
          <Grid>
            <Grid item xs={12}>
              <Typography variant="h1" className="kennethTitle">Kenneth Cole</Typography>
            </Grid>
            <br />
            <Grid item xs={12}>
              <Typography variant="h5">
                Comp Sci Student &#8226; Cyber Sec Enthusiast &#8226; Entergy Intern
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Skills />
      <Projects />
      <KennethFooter handleSetShowResume={handleSetShowResumeModal} />
      <Modal show={showResumeModal} onHide={handleSetShowResumeModal}>
        <Document file={KennethResume}>
          <Page pageNumber={1}></Page>
        </Document>
      </Modal>
    </div>
  );
};
