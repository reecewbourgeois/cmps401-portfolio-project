import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./kwentin.css";
import { Image, Row } from "react-bootstrap";

/* Tutorial */
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import useStyles from "./kwentin-styles";

/* Icons */
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";

/* Photos */
import kwenPortPic from "../../files/photos/kwentin/kwenPortPic.jpeg";
import kwenPortPicCropped from "../../files/photos/kwentin/kwenPortPicCropped.jpeg";
import LIGOlogo from "../../files/photos/kwentin/LIGOlogo.jpg";
import geekSquad from "../../files/photos/kwentin/geekSquad.png";
import verapro from "../../files/photos/kwentin/verapro.png";
import homeDepot from "../../files/photos/kwentin/homeDepot.png";
import southeastern from "../../files/photos/kwentin/southeastern.jpg";
import nodeHardware from "../../files/photos/kwentin/nodeHardware.jpg";
import { ClassNames } from "@emotion/react";

export const KwentinsPage: FC = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4];
  return (
    /* Main Page */
    <div className="kwentins-page">
      {/* Right Section */}
      <div className="kwentins-right-col">
        <>
          <CssBaseline />
          {/* Right Section Heading */}
          <div className={classes.container}>
            <Container maxWidth="sm" style={{ marginTop: "15px" }}>
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Work Experience
              </Typography>
              <hr />
              <Grid container spacing={2} justify="center"></Grid>
            </Container>
            {/* Card in the right section under the heading */}
            <Container className={classes.cardGrid} maxWidth="sm">
              <Grid container spacing={1}>
                {cards.map(() => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={LIGOlogo}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6">
                          General Computing Intern
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
            <Container maxWidth="sm" style={{ marginTop: "15px" }}>
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Education
              </Typography>
              <hr />
              <Grid container spacing={2} justify="center"></Grid>
            </Container>
            <Container maxWidth="sm" style={{ marginTop: "15px" }}>
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Languages & OS
              </Typography>
              <hr />
              <Grid container spacing={2} justify="center"></Grid>
            </Container>
            <Container maxWidth="sm" style={{ marginTop: "15px" }}>
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Certifications
              </Typography>
              <hr />
              <Grid container spacing={2} justify="center"></Grid>
            </Container>
            <Container maxWidth="sm" style={{ marginTop: "15px" }}>
              <Typography
                variant="h6"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Skills
              </Typography>
              <hr />
              <Grid container spacing={2} justify="center"></Grid>
            </Container>
          </div>
        </>

        {/* <Image src={LIGOlogo} className="kwentins-scroll-img" />
        <br />
        <Image src={geekSquad} className="kwentins-scroll-img" />
        <br />
        <Image src={verapro} className="kwentins-scroll-img" />
        <br />
        <Image src={homeDepot} className="kwentins-scroll-img" />
        <br />
        <Image src={southeastern} className="kwentins-scroll-img" /> */}
      </div>

      {/* Left Section */}
      <div className="kwentins-left-col">
        <div className="kwentins-top-left">
          <Image src={kwenPortPicCropped} className="kwen-img" />
          <h3 className="kwen-text">I am Kwentin Ransom</h3>
          <p className="kwen-text2">
            A computer science major with a scientific concentration attending
            Southeastern Louisiana University. I am currently a junior awaiting
            to graduate in Spring 2023.
          </p>
          <p>{/* <Image src={nodeHardware} /> */}</p>
          <p className="kwen-text2">
            I created this webpage to depict my academic and career
            achievements. This section details a small biography while the
            section to the right displays my resume. Below this section are
            links to my socials.
          </p>
        </div>
        <div className="kwentins-bottom-left">
          <span title="GitHub">
            <a href="https://github.com/Kwentin-Ransom" target="_blank">
              <GitHubIcon color="primary" fontSize="large" />
            </a>
          </span>

          <span title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/kwentin-ransom-b07b931a9/"
              target="_blank"
            >
              <LinkedIn className="kwen-logo" fontSize="large" />
            </a>
          </span>

          <span title="Instagram">
            <a href="https://www.instagram.com/qnkphotos/" target="_blank">
              <Instagram
                color="secondary"
                className="kwen-logo"
                fontSize="large"
              />
            </a>
          </span>
        </div>
      </div>
    </div> //main: kwentins-page div
  ); //return
}; //KwentinsPage
