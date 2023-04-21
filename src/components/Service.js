import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 20,
    },
    main: {
        backgroundColor: '#191D2B',
        zIndex: 1,
        border: '1px solid #2E344E',
        borderTop: '5px solid #2E344E',
        padding: theme.spacing(8),
        transition: '.4s',
        '&:hover': {
            borderTopColor: theme.palette.primary.main,
            transition: '.4s'
        }
    },
    title: {
        marginTop: 15,
        position: 'relative',
        paddingBottom: 15,
        "&::before": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 'auto',
            bottom: 0,
            height: 2,
            width: 50,
            background: '#2E344E',
        }
    },
    desc: {
        marginTop: 15,
    }
}))

export default function Service({ title, desc, icon }) {

    const classes = useStyle()

    return (
        <Grid item lg={4} md={6} xs={12} className={classes.root}>
            <Grid container className={classes.main} direction='column' alignItems='flex-start'>
                {icon}
                <Typography className={classes.title} variant='h5'>{title}</Typography>
                <Typography className={classes.desc} variant="body1">
                    {desc}
                </Typography>
            </Grid>
        </Grid>
    )
}
