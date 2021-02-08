import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Fab from '@material-ui/core/Fab';

import ITyped from 'react-ityped';

export default function Header() {
    const classes = useStyles()
    const [height, setHeight] = useState()
    const [scrollTo, setScrollTo] = useState()

    function updateDimensions() {
        setHeight(window.innerHeight + 'px')
        setScrollTo(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions(this));
        updateDimensions()
    })

    const strings = ['Product Manager', 'Freelance React Developer', 'YouTube Content Creator']

    return (
        <div className={classes.header} style={{"height": height}}>
            <h3 className={classes.headerTextMain}>Kristen Fang</h3>
            <h5 className={classes.headerTextSub}>I'm a </h5>
            <ITyped className={classes.headerTextSub}
                showCursor={false}
                strings={strings}
                typeSpeed={100}
                backSpeed={50}
                startDelay={100}
                backDelay={1000}
            />
            <Fab className={classes.btn} size="small">
                <KeyboardArrowDownIcon />
            </Fab>
        </div>
    )
}

const textColor = 'white'
const bgcolor = 'black'

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        alignItems: 'center',
        position: "absolute",
        width: "100%",
        backgroundColor: bgcolor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    btn: {
        position: "absolute",
        bottom: theme.spacing(2),
    },
    headerTextMain: {
        fontWeight: 300,
        textTransform: "uppercase",
        letterSpacing: "8px",
        color: textColor,
    },
    headerTextSub: {
        textTransform: "uppercase",
        letterSpacing: "5px",
        color: textColor,
    }

  }));
