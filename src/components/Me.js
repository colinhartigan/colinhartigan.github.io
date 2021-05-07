import React from 'react';

//utilities
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

//components
import { Grid, Paper, Typography, Chip, Button, Fade, Grow, Zoom, IconButton } from '@material-ui/core'

const styles = theme => ({

    paper: {
        height: "275px",
        width: "625px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        overflow: "hidden"
    },

    paperDiv: {
        width: "90%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch"
    },

    mainGrid: {
        display: "flex",
        alignItems: "center",
        alignContent: "space-between"
    },

    nameHolder: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 5px",
        height: "100%"
    },

    name: {
        background: "linear-gradient(45deg, #ffd335 0%, #ff5286 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        alignSelf: "center",
        justifyContent: "center",
    },

    socials: {
        display: "flex",
        flexDirection: "row",
        height: "47.97px",
    },

    chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.4),
        },
    },
    langChip: {
        background: "linear-gradient(160deg, #24c6dc 0%, #514a9d 100%)",
    },

    goButton: {
        height: 40,
        padding: "0 20px",
        background: "linear-gradient(45deg, #ffd335 0%, #ff5286 100%)",
        backgroundSize: "200% 200%",
        color: "white",
        animation: "$buttonAnim 6s linear infinite alternate",
        "&:hover": {
            boxShadow: '0 3px 6px 3px rgba(255, 156, 116, .3)',
        }
    },
    "@keyframes buttonAnim": {
        "0%": {
            backgroundPosition: "0% 50%",
        },
        "100%": {
            backgroundPosition: "100% 50%",
        }
    },

    buttonHolder: {
        display: "flex",
        alignContent: "stretch",
        justifyContent: "center",
        marginTop: "40px",
    },

    rightSide: {
        paddingLeft: "20px"
    }

});

class Me extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languages: ['Python', 'C++', 'C', 'JS', 'React', 'Java', 'SPiiPlus', 'Luau'],
            renderedLanguages: {},
            buttonEnabled: true,
        }
    }

    componentDidMount() {
        this.prepareChips();
        setTimeout(() => {
            this.setState({buttonEnabled: false});
        }, 4000);
    }

    prepareChips() {
        var index = 6;
        Object.entries(this.state.languages).forEach((lang) => {
            var state = {
                renderedLanguages: this.state.renderedLanguages,
            };
            state['renderedLanguages'][lang[1]] = {}
            state['renderedLanguages'][lang[1]]['delay'] = index * 200 + 'ms';
            this.setState(state);
            console.log(this.state)
            index++;
        })
    }

    render() {

        const { classes } = this.props;

        return (
            <Grow in style={{ transitionDelay: "100ms" }}>
                <Paper elevation={0} variant="outlined" className={classes.paper}>
                    <div className={classes.paperDiv}>
                        <Grid container direction="row" className={classes.mainGrid}>
                            <Grid item xs={5} style={{ height: "100%" }}>
                                <div className={classes.nameHolder}>
                                    <Typography variant="h2" justify="center" className={classes.name}>
                                        <b>Colin Hartigan</b>
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={7} className={classes.rightSide}>
                                <Grid container direction="column">
                                    <Grid item xs>
                                        <Fade in style={{ transitionDelay: '800ms' }}>
                                            <Typography variant="h5" align="center" style={{ marginBottom: "5px" }}>
                                                17 y/o full-stack developer
                                            </Typography>
                                        </Fade>
                                        <div className={classes.chips}>
                                            {Object.entries(this.state.renderedLanguages).map(([lang, data]) => (
                                                console.log(lang),
                                                <Zoom in timeout={500} style={{ transitionDelay: data['delay'] }}>
                                                    <Chip size="small" label={lang} className={classes.langChip} />
                                                </Zoom>
                                            ))}
                                        </div>
                                    </Grid>
                                    <Grid item xs>
                                        <Fade in style={{ transitionDelay: '4000ms' }}>
                                            <div className={classes.buttonHolder}>
                                                <Button color="primary" size="medium" className={classes.goButton} component={Link} disabled={ this.state.buttonEnabled } to="/explore">
                                                    explore projects
                                                </Button>
                                            </div>
                                        </Fade>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Grow>
        )
    }
}

export default withStyles(styles)(Me)