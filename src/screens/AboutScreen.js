import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import Title from '../components/Title'
import { getTranslate } from '../localization'
import MainImage from '../assets/images/main.jpg'
import Service from '../components/Service'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import TimelineIcon from '@material-ui/icons/Timeline';
import PaletteIcon from '@material-ui/icons/Palette'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
    },
    aboutGrid: {
        paddingTop: 60,
        paddingBottom: 60,
        paddingRight: 30,
        paddingLeft: 30,
    },
    mainImage: {
        width: '100%',
        height: '100%'
    },
    imageGrid: {
        position: 'relative',
        "&::after": {
            content: "''",
            position: "absolute",
            right: 0,
            top: 'auto',
            bottom: 0,
            height: '65%',
            width: 15,
            background: "rgba(3, 127, 255, .6)",
        },
        "&::before": {
            content: "''",
            position: "absolute",
            left: 0,
            top: 0,
            height: '65%',
            width: 15,
            background: "rgba(3, 127, 255, .6)",
        }
    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        }
    },
    boldTitle: {
        minWidth: 120,
        display: 'inline-block'
    },
    aboutTextGrid: {
        paddingRight: 20,
        paddingLeft: 20,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginTop: 15,
            marginBottom: 15,
        }
    },
    iconStyle: {
        fontSize: 46,
        color: theme.palette.primary.main,
    },
}))

export default function AboutScreen() {
    const classes = useStyles()
    const translate = getTranslate()

    return (
        <Grid justify='flex-start' alignItems='flex-start' container className={classes.root}>
            <Grid className={classes.aboutGrid} item container xs={12}>
                <Title title={translate.aboutMe} />

                <Grid container direction="row">
                    <Grid item xs={12} md={6} className={classes.imageGrid}>
                        <img className={classes.mainImage} src={MainImage} alt={translate.name} />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.aboutTextGrid}>
                        <Typography variant="h3">{translate.hi}
                            <span className={classes.nameText}>{translate.name}</span>
                            {translate.hi2}</Typography>
                        <Typography variant="body1" style={{ marginTop: 10 }}>
                            {translate.desc}
                        </Typography>

                        <Typography variant="body1" style={{ marginTop: 10 }}>
                            <b className={classes.boldTitle}>{translate.fullName}</b>
                            {' : '}
                            {translate.name}
                        </Typography>

                        <Typography variant="body1" style={{ marginTop: 5 }}>
                            <b className={classes.boldTitle}>{translate.age}</b>
                            {' : '}
                            24 {translate.years}
                        </Typography>

                        <Typography variant="body1" style={{ marginTop: 5 }}>
                            <b className={classes.boldTitle}>{translate.nationality}</b>
                            {' : '}
                            {translate.iranian}
                        </Typography>

                        <Typography variant="body1" style={{ marginTop: 5 }}>
                            <b className={classes.boldTitle}>{translate.languages}</b>
                            {' : '}
                            {translate.persian}, {translate.english}
                        </Typography>

                        <Typography variant="body1" style={{ marginTop: 5 }}>
                            <b className={classes.boldTitle}>{translate.phone}</b>
                            {' : '}
                            {translate.mobileNumber}
                        </Typography>

                        <div style={{ display: 'flex', marginTop: 20 }}>
                            <Button variant="contained" color="primary">
                                {translate.downloadCv}
                            </Button>
                        </div>

                    </Grid>
                </Grid>

            </Grid>

            <Grid className={classes.aboutGrid} item container xs={12}>
                <Title title={translate.services} />

                <Grid container direction="row">
                    <Service icon={<PaletteIcon className={classes.iconStyle} />}
                        title={translate.webDevelopment}
                        desc={translate.webDevelopmentDesc} />
                    <Service icon={<TimelineIcon className={classes.iconStyle} />}
                        title={translate.AIDevelopment}
                        desc={translate.AIDevelopmentDesc} />
                    <Service icon={<PhoneAndroidIcon className={classes.iconStyle} />}
                        title={translate.mobileApplication}
                        desc={translate.mobileApplicationDesc} />
                </Grid>

            </Grid>
        </Grid>
    )
}
