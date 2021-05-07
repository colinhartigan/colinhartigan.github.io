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
        flexDirection: "column",
        justifyContent: "space-between",
    },

    titleText: {
        overflow: "hidden",
        maxHeight: "2rem",
        WebkitBoxOrient: "vertical",
        display: "block",
        display:" -webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitLineClamp: 1,
        wordBreak: "break-word",
    },

    descText: {
        marginTop: "4px",
        overflow: "hidden",
        maxHeight: "6rem",
        WebkitBoxOrient: "vertical",
        display: "block",
        display:" -webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitLineClamp: 4,
    },

    actions: {
        display: "flex",
        alignSelf: "flex-end",
        justifyContent: "flex-end",
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

        return (
            <Card className={classes.card}>
                <CardContent style={{ paddingBottom: "8px" }}>
                    <Typography variant="h5" className={ classes.titleText }>{ this.props.data.name }</Typography>
                    <Chip size="small" label={ this.props.data.language } className={ classes.langChip } />
                    <Typography variant="body2" className={ classes.descText }>{ this.props.data.description }</Typography>
                </CardContent>
                <CardActions className={ classes.actions }>
                    <Button size="small" variant="outlined">More</Button>
                </CardActions>
            </Card>
            
        )
    }
}

export default withStyles(styles)(ProjectCard)