import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import Title from '../components/Title'
import { getTranslate } from '../localization'
import './contact.css'
import Contact from '../components/Contact'
import CallIcon from '@material-ui/icons/CallOutlined'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import RoomIcon from '@material-ui/icons/RoomOutlined'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
    },
    contactGrid: {
        paddingTop: 60,
        paddingBottom: 60,
        paddingRight: 30,
        paddingLeft: 30,
        [theme.breakpoints.down('xs')]: {
            paddingRight: 5,
            paddingLeft: 5,
        }
    },
    formGrid: {
        padding: 10,
    },
    detailsGrid: {
        padding: 10,
    },
    getInTouch: {
        textAlign: 'left',
    },
    iconStyle: {
        fontSize: 40,
    }
}))

export default function ContactScreen() {
    const classes = useStyles()
    const translate = getTranslate()

    return (
        <Grid justify='flex-start' alignItems='flex-start' container className={classes.root}>
            <Grid className={classes.contactGrid} item container xs={12}>
                <Title title={translate.contanctMe} />

                <Grid container direction="row">
                    <Grid item xs={12} md={6} className={classes.formGrid}>
                        <Typography className={classes.getInTouch} variant="h4">{translate.getInTouch}</Typography>

                        <TextField fullWidth required
                            style={{ marginTop: 25 }}
                            size='medium'
                            label={translate.enterYourName}
                            variant='outlined' />

                        <TextField fullWidth required
                            style={{ marginTop: 25 }}
                            size='medium'
                            label={translate.enterYourEmail}
                            variant='outlined' />

                        <TextField fullWidth required
                            style={{ marginTop: 25 }}
                            size='medium'
                            label={translate.enterYourSubject}
                            variant='outlined' />

                        <TextField fullWidth required
                            style={{ marginTop: 25 }}
                            size='medium'
                            label={translate.enterYourMessag}
                            variant='outlined'
                            multiline
                            rows={5} />

                        <Button variant='contained' color='primary' size='large'
                            style={{ marginTop: 25, display: 'flex' }}>{translate.sendMessage}</Button>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.detailsGrid}>
                        <Contact icon={<CallIcon className={classes.iconStyle} />}
                            title={translate.phone}
                            text1={translate.mobile1}
                            text2={translate.mobile2} />
                        <Contact icon={<EmailIcon className={classes.iconStyle} />}
                            title={translate.email}
                            text1="amirmohammad.rahimihomamloo@gmail.com"
                            text2="amir.mrh1999@gmail.com" />
                        <Contact icon={<RoomIcon className={classes.iconStyle} />}
                            title={translate.address}
                            text1={translate.addressDetails}
                            text2="" />
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}
