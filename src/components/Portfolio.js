import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Modal, Typography } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
    imagediv: {
        width: '100%',
        height: 350,
        cursor: 'pointer',
        borderRadius: 10,
        transition: '.5s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12345677',
        padding: 20,
        "&:hover": {
            transform: 'translateY(-30px)',
            transition: '.5s',
        }
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    title: {
        textAlign: 'left',
        cursor: 'pointer',
        "& a": {
            textDecoration: 'none',
            color: '#FFF',
            transition: '.4s',
            "&:hover": {
                color: theme.palette.primary.main,
                transition: '.4s',
            }
        }
    },
    modalImage: {
        width: '100%',
        height: '100%',
    },
    modal: {
        width: '40%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            height: '50%',
        }
    }
}))

export default function Portfolio({ image, title, desc, href }) {
    const classes = useStyle()
    const [open, setOpen] = useState(false)

    return (
        <>
            <Grid item lg={4} className={classes.root}>
                {/* <img onClick={() => setOpen(true)} */}
                <div className={classes.imagediv} >
                    <img className={classes.image} src={image} alt={title} />
                </div>
                <Typography className={classes.title} variant="h5">
                    <a href={href}>{title}</a>
                </Typography>
                <Typography style={{ height: 40 }} variant='body1'>{desc}</Typography>
            </Grid>
            <Modal className={classes.modal} open={open} onClose={() => setOpen(false)}>
                <img className={classes.modalImage} src={image} alt={title} />
            </Modal>
        </>
    )
}
