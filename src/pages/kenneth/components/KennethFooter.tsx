import {FC} from 'react';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

type Props = {
  handleSetShowResume: () => void;
}

export const KennethFooter: any = (props: Props) => {
  return (
    <footer>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" className="kennethSectionHeader">More</Typography>
        </Grid>
        <Grid item xs={3} style={{display: 'flex'}}>
          <a href="mailto:kenneth.cole@selu.edu" style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <EmailIcon style={{width: '100px', height: '100px'}} />
          </a>
        </Grid>
        <Grid item xs={3} style={{display: 'flex'}}>
          <a href="https://github.com/kennethcole5" style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <GitHubIcon style={{width: '100px', height: '100px'}} />
          </a>
        </Grid>
        <Grid item xs={3} style={{display: 'flex'}}>
          <a href="https://www.linkedin.com/in/kenneth-cole-307aaa1b9/" style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <LinkedInIcon style={{width: '100px', height: '100px'}} />
          </a>
        </Grid>
        <Grid item xs={3} style={{display: 'flex'}}>
          <Button variant="text" onClick={props.handleSetShowResume} style={{marginRight: 'auto', marginLeft: 'auto'}}>
            <FolderOpenIcon style={{width: '100px', height: '100px'}} />
          </Button>
        </Grid>
      </Grid>
    </footer>
  )
}