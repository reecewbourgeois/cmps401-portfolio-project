import {FC} from "react";
import {Grid, Card, CardMedia, CardContent, Typography} from "@mui/material"
import { CodeIcon } from "@heroicons/react/solid";

import { skills } from "../data";

export const Skills: FC = () => {
  return (
    <section id="skills" className="kennethSection">
        <Grid>
          <Grid>
            <Typography variant="h3" className="kennethSectionHeader">
              Skills
            </Typography>
          </Grid>
          {
            skills.map(skill => {
              return (
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <Typography style={{display: 'inline-block'}}>
                      {skill.name}
                    </Typography>
                </Grid>
              );
            })
          }
        </Grid>
      </section>
  )
}