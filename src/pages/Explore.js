import React from 'react';

//utilities
import { withStyles } from '@material-ui/core/styles';

//components
import ProjectCard from '../components/ProjectCard'
import ProjectPage from '../components/ProjectPage'
import { Grid, Container, Paper, Typography, Divider } from '@material-ui/core'

const styles = theme => ({

    paper: {
        display: "flex",
        width: "100%",
        marginTop: "70px",
        marginBottom: "50px",
        height: "auto",
        flexWrap: "wrap",
        justifyContent: "center",
    },

    header: {
        margin: "15px 15px 10px 15px",
        width: "100%",
        height: "80px",
        display: "flex",
        padding: "0px 2% 0px 2%"
    },

    footer: {
        marginTop: "100px",
        marginBottom: "10px"
    },

    filter: {
        alignSelf:"center"
    },

    cardGrid: {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        padding: "5px 4% 0px 4%"
    },

    projectCard: {
        alignSelf: "center",
    },

    title: {
        background: "linear-gradient(45deg, #ffd335 0%, #ff5286 100%)",
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        alignSelf: "center",
        animation: "$buttonAnim 6s linear infinite alternate",
        paddingLeft: "10px",
    },
    "@keyframes buttonAnim": {
        "0%": {
            backgroundPosition: "0% 50%",
        },
        "100%": {
            backgroundPosition: "100% 50%",
        }
    },

    langChip: {
        background: "linear-gradient(160deg, #24c6dc 0%, #514a9d 100%)",
    },
    

})

const excludeRepos = [343571477, 350130669]; //exclude awesome-cheatshets and colinhartigan README

class Explore extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'repos':[],
        }
    }

    fetchRepos() {
        fetch('https://api.github.com/users/colinhartigan/repos')
        .then(repos => repos.json())
        .then(data => {
            this.setState({
                repos: data
            });
        })
    }

    componentDidMount() {
        this.fetchRepos();
        document.title = 'colinhartigan / explore'
    }


    render(){
        
        const { classes } = this.props;


        return(
            <Container>
                <Grid container>
                    <Grid column xs={2} />
                    <Grid column xs={8}>
                        
                        <Paper elevation={0} variant="outlined" className={classes.paper}>
            
                            <div className={classes.header}>
                                <Grid container>
                                    <Grid column xs={5} className={classes.title}>
                                        <Typography variant="h3">
                                            <b>Explore</b>
                                        </Typography>
                                    </Grid>
                                    <Grid column xs={7} className={classes.filter}>
                                        filter chip picker shall go hither
                                    </Grid>
                                </Grid>
                            </div>

                            <Divider variant="middle" orientation="horizontal" style={{ width: "95%"}} />
                            <br/>
                            <Grid container spacing={2} className={classes.cardGrid} justify="center">
                                {this.state.repos.map(data => {
                                    if(data.private === false && excludeRepos.includes(data.id) === false){
                                        return <Grid container item xs={4} justify="center"><ProjectCard data={ data } /></Grid>
                                    }
                                    else{
                                        return <div />
                                    }
                                })}
                            </Grid>

                            
                            
                            

                            <div className={classes.footer}>
                                repos automatically fetched from github/colinhartigan
                            </div>
                        </Paper>


                    </Grid>
                    <Grid column xs={2} />
                </Grid>
            </Container>
        )
    }
}


export default withStyles(styles)(Explore)