import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Title from '../components/Title'
import { getTranslate } from '../localization'
import Portfolio from '../components/Portfolio'
import RnImage from '../assets/images/rn.jpg'

const useStyle = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        padding: 30,
        paddingTop: 60,
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            paddingRight: 5,
            paddingLeft: 5,
        }
    }
}))

export default function PortfoliosScreen() {
    const classes = useStyle()
    const translate = getTranslate()

    return (
        <div className={classes.root}>
            <Title title={translate.portfolios} />

            <Grid item xs={12} container direction='row'
                justify='flex-start' alignItems='center'>
                {translate.portfoliosList.map((portfolio) =>
                    <Portfolio key={portfolio.id}
                        title={portfolio.title}
                        desc={portfolio.desc}
                        image={portfolio.image}
                        href="#" />
                )}
            </Grid>
        </div>
    )
}
