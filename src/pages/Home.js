import React from 'react';

//utilities
import { withStyles } from '@material-ui/core/styles';

//components
import Me from '../components/Me'
import { Grid, Container } from '@material-ui/core'



const styles = theme => ({

    row: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",
    }
});


class Home extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Container>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs />
                    <Grid item xs className={classes.row}>
                        <Me />
                    </Grid>
                    <Grid item xs />
                </Grid>
            </Container>
        )
    }
}



export default withStyles(styles)(Home)