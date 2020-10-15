import React from 'react';
import { withStyles, Grid, Box } from '@material-ui/core';
import styles from './styles';
import TaskItem from '../TaskItem';

const TaskList = (props) => {

    const {classes,status,tasks} = props

    return (
        <Grid item md={4} xs={12} key={status.value}>
            <div className={classes.status}>
                {status.lable}
            </div>
            <Box m={1}>
                <div className={classes.wrapperListTask}>
                    {tasks.map((task, index) => {
                        return (
                            <TaskItem task={task} status={status} key={task.id}/>
                        )
                    })}
                </div>
            </Box>
        </Grid>
    );
}

export default withStyles(styles)(TaskList);