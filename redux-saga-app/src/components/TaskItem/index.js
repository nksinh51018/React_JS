import React from 'react';
import { withStyles } from '@material-ui/styles'
import styles from './styles';
import { Card, CardContent, Grid, Typography, CardActions, Fab, Icon, Box } from '@material-ui/core';
const TaskItem = (props) => {

    const { task, status, classes } = props;

    return (
        <Box mt={2}>
            <Card className={classes.card} >
                <CardContent>
                    <Grid container justify='space-between'>
                        <Grid item md={8}>
                            <Typography component='h2'>{task.productName}</Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.lable}
                        </Grid>
                        <p>{task.productDescription}</p>
                    </Grid>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab color='primary' aria-label='Edit' className={classes.fab} size='small'>
                        <Icon fontSize='small'>edit_icon</Icon>
                    </Fab>
                    <Fab color='primary' aria-label='DElete' className={classes.fab} size='small'>
                        <Icon fontSize='small'>delete_icon</Icon>
                    </Fab>
                </CardActions>
            </Card>
        </Box>
    );
}

export default withStyles(styles)(TaskItem);