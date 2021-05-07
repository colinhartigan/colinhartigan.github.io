import React from 'react';

//utilities
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

//components
import { Grid, Paper, Typography, Chip, Button, Fade, Grow, Zoom, IconButton } from '@material-ui/core'
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse } from '@material-ui/core'

const styles = theme => ({

    card: {
        display: "flex",
        width: "95%",
        height: "220px",
    },

    descText: {
        overflow: "hidden",
        maxHeight: "8rem",
        WebkitBoxOrient: "vertical",
        display: "block",
        display:" -webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitLineClamp: 4,
    },

    langChip: {
        background: "linear-gradient(160deg, #24c6dc 0%, #514a9d 100%)",
        maxHeight: "20px",
        marginTop: "5px",
        marginBottom: "5px"
    },
});

class ProjectCard extends React.Component {

    render() {

        const { classes } = this.props;
        console.log(this.props)

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5">{ this.props.data.name }</Typography>
                    <Chip size="small" label={ this.props.data.language } className={ classes.langChip } />
                    <Typography variant="body2" className={ classes.descText }>{ this.props.data.description }</Typography>
                    
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(ProjectCard)