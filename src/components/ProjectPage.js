import React from 'react';

//utilities
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

//components
import { Grid, Paper, Typography, Chip, Button, Fade, Grow, Zoom, IconButton, Backdrop } from '@material-ui/core'
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse } from '@material-ui/core'

const styles = theme => ({

    backdrop: {
        zIndex: 10,
    },
    
    paper: {
        width: "525px",
        height: "300px"
    }

});

class ProjectPage extends React.Component {

    render() {

        const { classes } = this.props;
        
        return(
            <Backdrop className={ classes.backdrop } open={ false }>
                <Paper variant="outlined" className={ classes.paper }>
                    asdf
                </Paper>
            </Backdrop>
        )
    }
}

export default withStyles(styles)(ProjectPage)