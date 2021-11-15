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
import IT from "../../files/photos/kwentin/IT.png";
import java from "../../files/photos/kwentin/java.png";
import cLang from "../../files/photos/kwentin/cLang.png";
import bashIcon from "../../files/photos/kwentin/bashIcon.png";
import { ClassNames } from "@emotion/react";

export const KwentinsPage: FC = () => {
  const classes = useStyles();
  interface Cards {
    cardPhoto: string;
    cardText: string;
  }

  let cards: Cards[] = [
    {
      cardPhoto: LIGOlogo,
      cardText: "General Computing Intern",
    },
    {
      cardPhoto: geekSquad,
      cardText: "OS Consulting Agent",
    },
    {
      cardPhoto: verapro,
      cardText: "Repair Technician",
    },
    {
      cardPhoto: homeDepot,
      cardText: "Hardware & Lot Associate",
    },
  ];

  let cards2: Cards[] = [
    {
      cardPhoto: southeastern,
      cardText: "Computer Science",
    },
    {
      cardPhoto: IT,
      cardText: "IT Fundamentals",
    },
  ];

  let cards3: Cards[] = [
    {
      cardPhoto: java,
      cardText: "Java",
    },
    {
      cardPhoto: cLang,
      cardText: "C",
    },
    {
      cardPhoto: bashIcon,
      cardText: "Bash",
    },
  ];

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
                {cards.map((card, index) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.cardPhoto}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6">
                          {card.cardText}
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
                Education & Certifications
              </Typography>
              <hr />
              <Grid container spacing={2} justify="center"></Grid>
            </Container>
            <Container className={classes.cardGrid} maxWidth="sm">
              <Grid container spacing={1}>
                {cards2.map((card, index) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.cardPhoto}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6">
                          {card.cardText}
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
                Languages & OS
              </Typography>
              <hr />
              <Grid container spacing={2} justify="center"></Grid>
            </Container>
            <Container className={classes.cardGrid} maxWidth="sm">
              <Grid container spacing={1}>
                {cards3.map((card, index) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.cardPhoto}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6">
                          {card.cardText}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
        </>
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
          <p className="kwen-text2">
            Over the years I have been able to work on personal and educational
            projects. As well as being able to devote myself in my accredited
            studies. I want to pursue a career working for myself using the
            knowledge I gain from working in the industry.
          </p>
          <p className="kwen-text2">
            <Image src={nodeHardware} className="kwen-project-img" />
          </p>
          <p className="kwen-text3">
            Pictured above is the most recent semester project I completed with
            my peers. It is the hardware aspect of an automated watering system
            for a herb garden. It is a system of sensors that reads enviromental
            conditions that sets off sprinklers when said conditions are not
            met.
          </p>
          <p className="kwen-text3">
            I created this webpage to depict my academic and career
            achievements. This section details a small biography while the
            section to the right displays my resume. To the left of the section
            are the links to my socials.
          </p>
        </div>
        <div className="kwentins-bottom-left">
          <span title="GitHub">
            <a href="https://github.com/Kwentin-Ransom" target="_blank">
              <GitHubIcon
                color="primary"
                fontSize="large"
                className="kwen-logo1"
              />
            </a>
          </span>

          <span title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/kwentin-ransom-b07b931a9/"
              target="_blank"
            >
              <LinkedIn className="kwen-logo2" fontSize="large" />
            </a>
          </span>
          <span title="Instagram">
            <a href="https://www.instagram.com/qnkphotos/" target="_blank">
              <Instagram
                color="secondary"
                className="kwen-logo2"
                fontSize="large"
              />
            </a>
          </span>
        </div>
      </div>
    </div> //main: kwentins-page div
  ); //return
}; //KwentinsPage
