import React from 'react';

//utilities
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

//components
import { Grid, Paper, Typography, Chip, Button, Fade, Grow, Zoom, IconButton, Backdrop } from '@material-ui/core'
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Avatar } from '@material-ui/core'

const styles = theme => ({

    backdrop: {
        zIndex: 10,
    },
    
    paper: {
        width: "600px",
        height: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    paperDiv: {
        width: "94%",
        height: "92%",
    },

    contentDiv: {
        overflow: "auto",
        height: "85%",
        '&::-webkit-scrollbar': {
            width: '0.2em'
        },
        '&::-webkit-scrollbar-track': {
            borderRadius: "15px",
        },
        '&::-webkit-scrollbar-thumb': {
            background: "#8f8f8f",
            borderRadius: "15px",
        }
        
    },

    titleHolder: {
        maxHeight: "15%",
        maxWidth: "80%",
        marginBottom: "10px",
    },

    title: {
        background: "linear-gradient(45deg, #ffd335 0%, #ff5286 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        alignSelf: "center",
        justifyContent: "center",
    },

    description: {
        paddingLeft: "10px",
    }

});

class ProjectPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'backdropOpen': false,
        }
    }

    componentDidMount() {
        this.toggleBackdrop();
    }

    toggleBackdrop() {
        console.log('toggle')
        if(this.state.backdropOpen == true){
            setTimeout(() => {
                this.props.onClick()
            }, 300);
            
        }
        this.setState({backdropOpen: !this.state.backdropOpen});
        
    }

    render() {

        const { classes } = this.props;
        console.log(this.props)
        return(
            <Backdrop className={ classes.backdrop } open={ this.state.backdropOpen } onClick={ this.toggleBackdrop.bind(this) }>
                <Paper variant="outlined" className={ classes.paper }>
                    <div className={ classes.paperDiv }>

                        <Grid item className={ classes.titleHolder }>
                            <Typography variant="h4" justify="center" className={ classes.title }>
                                <b>{ this.props.data.name }</b>
                            </Typography>
                        </Grid>
                        <Grid item style={{ maxHeight: "15%" }}/> {/*put control here*/}

                        <div className={ classes.contentDiv }>
                            <Grid container direction="row">
                                <Grid item xs={6}>
                                    <Typography variant="body1" justify="left" className={ classes.description }>
                                        { this.props.data.description }
                                    </Typography>
                                    
                                </Grid>
                                <Grid item xs={6}>
                                    put an image here
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Paper>
            </Backdrop>
        )
    }
}

export default withStyles(styles)(ProjectPage)