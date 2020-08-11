import React, { Component } from "react"

// import "./everything.css"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { Container, Paper, Grid, Checkbox } from "@material-ui/core"

// FaInfoCircle
import { FaBeer, FaInfoCircle, FaProjectDiagram } from "react-icons/fa"

import InfoIcon from "@material-ui/icons/Info"

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    display: "flex",
    gridGap: theme.spacing(2),
    //     padding: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center",
  },
  cen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  col1: {
    // flexGrow: 1,
    display: "grid",
    gridGap: theme.spacing(1),
    padding: theme.spacing(1),
    //     padding: theme.spacing(2),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    minHeight: 150,
    minWidth: 150,
    maxHeight: 200,
    maxWidth: 200,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "center",
  },
}))

export default function SectionHeader() {
  //   constructor(props) {
  //     super(props)
  //     this.state = { isOpen: false, click: "about" }
  //   }
  const classes = useStyles()
  const [checked, setChecked] = React.useState(true)

  const [name, setName] = React.useState("")

  const handleChange = event => {
    setChecked(event.target.checked)

    setName(event.target.id)

    console.log(event.target.checked, event.target.id)
  }

  return (
    <>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid
              item
              //   xs={12} sm={12} md={3} lg={3}
            >
              <Paper className={classes.paper} elevation={0}>
                <Container className={classes.col1} id="about">
                  <div className={classes.cen}>
                    <InfoIcon />
                    ABOUT{" "}
                  </div>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    id="about"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </Container>
              </Paper>
            </Grid>

            <Grid item>
              <Paper className={classes.paper} elevation={0}>
                <Container className={classes.col1}>
                  <div className={classes.cen}>
                    <FaProjectDiagram />
                    PROJECTS{" "}
                  </div>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    id="projects"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}
