import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Title from '../components/Title'
import { getTranslate } from '../localization'
import Skill from '../components/Skill'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import MyStepper from '../components/MyStepper'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
    },
    skillGrid: {
        paddingTop: 60,
        paddingBottom: 60,
        paddingRight: 30,
        paddingLeft: 30,
        [theme.breakpoints.down('xs')]: {
            paddingRight: 5,
            paddingLeft: 5,
        }
    },
    skillSecondTitle: {
        marginLeft: 10,
    }
}))

export default function ResumeScreen() {
    const classes = useStyles()
    const translate = getTranslate()

    return (
        <Grid justify='flex-start' alignItems='flex-start' container className={classes.root}>
            <Grid className={classes.skillGrid} item container xs={12}>
                <Title title={translate.mySkills} />

                <Grid container direction="row">
                    <Grid item xs={12} md={6}>
                        <Skill value={90} title={"Java"} />
                        <Skill value={95} title={"Android"} />
                        <Skill value={60} title={"Java Script"} />
                        <Skill value={95} title={"HTML"} />
                        <Skill value={95} title={"XML"} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Skill value={90} title={"React JS"} />
                        <Skill value={80} title={"Python"} />
                        <Skill value={95} title={"CSS & JSS"} />
                        <Skill value={100} title={"XHTML"} />
                        <Skill value={95} title={"SQL"} />
                    </Grid>
                </Grid>

            </Grid>

            <Grid className={classes.skillGrid} item container xs={12}>
                <Title title={translate.resume} />

                <Grid container direction="row" justify='flex-start' alignItems='center'>
                    <BusinessCenterIcon style={{ fontSize: 34 }} />
                    <Typography variant='h4' className={classes.skillSecondTitle}>
                        {translate.workingExperience}
                    </Typography>
                </Grid>
                <Grid container style={{ marginTop: 15 }}>
                    <MyStepper steps={translate.workingSteps} />
                </Grid>

                <Grid container direction="row" justify='flex-start' alignItems='center'>
                    <LocalLibraryIcon style={{ fontSize: 34 }} />
                    <Typography variant='h4' className={classes.skillSecondTitle}>
                        {translate.educationalQualification}
                    </Typography>
                </Grid>
                <Grid container style={{ marginTop: 15 }}>
                    <MyStepper steps={translate.educationalSteps} />
                </Grid>

            </Grid>
        </Grid>
    )
}
