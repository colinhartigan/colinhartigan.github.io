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
        height: "200px",
        alignContent: "flex-start",
        textAlignVertical: "top",
    },

    langChips: {
    },
    langChip: {
        background: "linear-gradient(160deg, #24c6dc 0%, #514a9d 100%)",
        maxHeight: "20px",
        margin: theme.spacing(.2,.3)
    },
});

class ProjectCard extends React.Component {



    render() {

        const { classes } = this.props;
        console.log(this.props)

        return (
            <Card className={classes.card}>
                <CardHeader
                    title={<div className={classes.langChips}>
                        <Typography variant="h5">{ this.props.data.name }</Typography>
                        <Chip size="small" label={ this.props.data.language } className={classes.langChip} />
                    </div>}
                    subheader={<Typography variant="body2">
                        { this.props.data.description }
                    </Typography>}
                />
            </Card>
        )
    }
}

export default withStyles(styles)(ProjectCard)