import React, { Component } from "react"

import "./everything.css"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { Container, Paper, Grid } from "@material-ui/core"

import SectionHeader from "./sections/section-header"

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    display: "grid",
    gridGap: theme.spacing(3),
  },
  paper: {
    minHeight: 600,
    minWidth: 200,
    maxHeight: 700,
    maxWidth: 250,
    [theme.breakpoints.between("xs", "sm")]: {
      // backgroundColor: "red",
      minHeight: 100,
      minWidth: 200,
      maxHeight: 200,
      maxWidth: 900,
    },
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper2: {
    minHeight: 600,
    minWidth: 800,
    maxHeight: 700,
    maxWidth: 900,
    [theme.breakpoints.between("xs", "sm")]: {
      // backgroundColor: "red",
      minHeight: 400,
      minWidth: 200,
      maxHeight: 700,
      maxWidth: 900,
    },
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function Tabs() {
  // constructor(props) {
  //   super(props)
  //   this.state = { isOpen: false, click: "about" }
  // }

  const classes = useStyles()

  // handleClick => (e) {
  //   const clicked = e.target.id

  //   this.setState(state => ({
  //     isOpen: !state.isOpen,
  //     click: clicked,
  //   }))
  // }

  return (
    <>
      <Container>
        <div className="container">
          <div className={classes.root}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Paper className={classes.paper} elevation={6}>
                  <SectionHeader />
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={9} lg={9}>
                <Paper className={classes.paper2} elevation={6}></Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  )
}
