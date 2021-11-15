import {FC} from "react";
import {Grid, Card, CardMedia, CardContent, Typography} from "@mui/material"
import { CodeIcon } from "@heroicons/react/solid";

import { projects } from "../data";
import project1 from "../../../files/photos/kenneth/project1.jpg";

export const Projects: FC = () => {
    return (
        <section id="projects" className="kennethSection">
            <div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{display: 'flex'}}>
                            <div className="centered">
                                <Typography variant="h3" className="kennethSectionHeader" >
                                    Apps I've Built
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="kennethProjectContainer">
                                {projects.map((project) => (
                                    <div className="kennethProjectCard">
                                        <a
                                            href={project.link}
                                            key={project.image}
                                        >
                                            <Card sx={{ maxWidth: 345 }}>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={project1}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    );
}