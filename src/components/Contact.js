import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        width: '100%',
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
        textAlign: 'left',
    },
    desc: {
        cursor: 'pointer',
        transition: '.4s',
        "&:hover": {
            color: theme.palette.primary.main,
            transition: '.4s',
        }
    },
    divIcon: {
        margin: 10,
        padding: 10,
        border: '1px solid #2E344E',
        marginRight: 25,
        paddingBottom: 5,
    },
    divDetails: {
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column'
    }
}))

export default function Contact({ title, text1, text2, icon }) {

    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Grid container className={classes.main} direction='row'
                justify='flex-start' alignItems='center'>
                <div className={classes.divIcon}>
                    {icon}
                </div>
                <div className={classes.divDetails}>
                    <Typography className={classes.title} variant='h6'>{title}</Typography>
                    <Typography className={classes.desc} variant="body1">
                        {text1}
                    </Typography>
                    <Typography className={classes.desc} variant="body1">
                        {text2}
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}
