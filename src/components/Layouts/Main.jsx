import React, { useEffect, useState, Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Axios from "axios";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Switcher from "@material-ui/core/Switch";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import StatisticFaroeIslands from "../../img/hagstova_foroya.svg";
import fo from "../../img/fo.png";
import en from "../../img/en.png";

import Footer from "./Footer";
import ListMenu from "../ListMenu/ListMenu";
import Selectors from "../Select/Selectors";
import statBanks from "../../json/statBanks";
import TableData from "../TablesData/TablesData";
import InformationModal from "../Modal/InformationModal";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export const ColorContext = React.createContext();

var btnAboutTable = "um talvuna";
var searchField = "Leita eftir talvu";

export default function MainBody() {
  const [pxTable, setPxTable] = useState(null);
  const [data, setData] = useState(null);
  const [statBankUrl, setStatBankUrl] = useState(statBanks[0].value);
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [itemSelected, setItemSelected] = useState(
    "Vælkomin til hagtalsgrunnin"
  );
  const [checked, setChecked] = useState(false);
  const [checkedA, setCheckedA] = useState(false);
  const [lang, setLang] = useState(1);
  const [fullHeadLine, setFullHeadLine] = useState(true);
  const [img, setImg] = useState(StatisticFaroeIslands);
  const [mainColor, setMainColor] = useState("#004c80");
  const [width, setWidth] = useState(window.innerWidth);
  const [showingInformationButton, setShowingInformationButton] = useState(
    false
  );

  const [openModal, setOpenModal] = React.useState(false);
  let drawerWidth;
  //Must be placed here
  if (width < 1000) {
    drawerWidth = width;
  } else {
    drawerWidth = 500;
  }
  let useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      overflowX: "hidden",
      overflowY: "hidden"
    },
    main: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2)
    },
    mainShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },

    appBar: {
      backgroundColor: "#004c80",
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },

    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      overflowX: "hidden"
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    footer: {
      padding: theme.spacing(2),
      marginTop: "auto",
      backgroundColor: "white"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary
    },
    paperX: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #004c80",
      boxShadow: theme.shadows[1],
      padding: theme.spacing(2, 4, 3),
      width: "90%",
      height: "90%"
    },
    muiSwitchRoot: {
      width: "58px",
      height: "38px",
      display: "inline-flex",
      padding: "12px",
      zIndex: "0",
      overflow: "hidden",
      position: "fixed",
      boxSizing: "border-box",
      flexShrink: "0",
      verticalAlign: "middle",
      left: 30
    },
    foFlag: {
      width: "45px",
      height: "38px",
      display: "inline-flex",
      padding: "12px",
      zIndex: "0",
      overflow: "hidden",
      position: "fixed",
      boxSizing: "border-box",
      flexShrink: "0",
      verticalAlign: "middle",
      left: "0"
    },
    enFlag: {
      width: "45px",
      height: "38px",
      display: "inline-flex",
      padding: "12px",
      zIndex: "0",
      overflow: "hidden",
      position: "fixed",
      boxSizing: "border-box",
      flexShrink: "0",
      verticalAlign: "middle",
      left: 70
    }
  }));
  const classes = useStyles();

  //https://www.pluralsight.com/guides/render-window-resize-react
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
      drawerWidth = window.innerWidth;
    };

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleChangeUrl = (e, hrefToTable) => {
    var baseUrl = window.location.origin + "/pxui/#/";
    window.location = baseUrl + hrefToTable;
    setPxTable(e);
    setOpen(false);
    setChecked(true);
    setShowingInformationButton(true);
  };

  const handleChangeData = (e, b) => {
    setItemSelected(b);
    setData(e);
    setShowingInformationButton(true);
  };

  const displayFullHeadline = () => {
    setFullHeadLine(!fullHeadLine);
  };

  const handleChangeSwitch = name => event => {
    console.log(event.target.checked);
    var x = statBankUrl;
    var y = pxTable;

    if (event.target.checked === false) {
      x = x.replace("/en/", "/fo/");
      btnAboutTable = "um talvuna";
      searchField = "Leita eftir talvu";

      setStatBankUrl(x);
      if (pxTable != null) {
        setItemSelected("Vælkomin til hagtalsgrunnin");
        y = y.replace("/en/", "/fo/");
        setPxTable(y);
        setLang(1);
      }
    }
    if (event.target.checked === true) {
      x = x.replace("/fo/", "/en/");
      setStatBankUrl(x);
      setItemSelected("Welcome to Statistics Faroe Islands");
      btnAboutTable = "about table";
      searchField = "Search";

      if (pxTable != null) {
        y = y.replace("/fo/", "/en/");
        setPxTable(y);
        setLang(0);
      }
    }

    setCheckedA(event.target.checked);
  };

  //icon
  const divStyle = {
    /* Full height */
    height: "50px",
    width: "50px",
    /* Center and scale the image nicely */
    backgroundRepeat: "no-repeat"
  };

  return (
    <ColorContext.Provider value={mainColor}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: mainColor }}
          position="relative"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              onClick={displayFullHeadline}
              variant="h6"
              noWrap={fullHeadLine}
              style={{ fontSize: "1.2em", fontFamily: "open sans" }}
            >
              {itemSelected}
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          onClose={!open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <img src={fo} className={classes.foFlag} alt={"fo"} />
            <Switcher
              checked={checkedA}
              onChange={handleChangeSwitch("checkedA")}
              value="checkedA"
              color="default"
              className={classes.muiSwitchRoot}
            />
            <img src={en} className={classes.enFlag} alt={"en"} />

            <IconButton onClick={handleDrawerOpen} style={{}}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
              <img src={img} style={divStyle} alt={"logo"} />
            </IconButton>
          </div>
          <ListMenu
            onClickItem={handleChangeUrl}
            statBank={statBankUrl}
            search={searchField}
          />
        </SwipeableDrawer>
        <Router>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route
                path="/:customPath"
                render={props => (
                  <Container
                    component="main"
                    maxWidth="m"
                    className={clsx(classes.main, {
                      [classes.mainShift]: open
                    })}
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={12}>
                        <InformationModal
                          open={openModal}
                          onChange={handleCloseModal}
                          data={data}
                        ></InformationModal>
                        <Paper
                          elevation={6}
                          style={{ marginBottom: "0.5cm" }}
                          className={classes.paper}
                        >
                          <Selectors
                            onChange={handleChangeData}
                            pxTable={
                              pxTable ||
                              "https://statbank.hagstova.fo/api/v1/fo/H2/" +
                                props.location.pathname.substr(1)
                            }
                            mainColor={mainColor}
                          />
                        </Paper>
                        <Paper elevation={6} className={classes.paper}>
                          <Typography component={"span"}>
                            <TableData
                              data={data}
                              language={lang}
                              contentElement="#tableResult"
                            ></TableData>
                            <div
                              style={{ fontSize: "1em" }}
                              id="tableResult"
                            ></div>
                          </Typography>
                        </Paper>
                        {showingInformationButton ? (
                          <Button
                            onClick={handleOpenModal}
                            style={{
                              backgroundColor: mainColor,
                              color: "white",
                              marginTop: "0.4cm",
                              float: "right"
                            }}
                          >
                            {btnAboutTable}
                          </Button>
                        ) : null}
                      </Grid>
                    </Grid>
                  </Container>
                )}
              />
              {/* <Route
                excat
                path="/"
                render={() => (
                  <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 2000 } : {})}
                  >
                    <Container
                      component="main"
                      maxWidth="m"
                      className={clsx(classes.main, {
                        [classes.appBarShift]: open
                      })}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                          <InformationModal
                            open={openModal}
                            onChange={handleCloseModal}
                            data={data}
                          ></InformationModal>
                          <Paper
                            elevation={6}
                            style={{ marginBottom: "0.5cm" }}
                            className={classes.paper}
                          >
                            <Selectors
                              onChange={handleChangeData}
                              pxTable={pxTable}
                              mainColor={mainColor}
                            />
                          </Paper>
                          <Paper elevation={6} className={classes.paper}>
                            <Typography component={"span"}>
                              <TableData
                                data={data}
                                contentElement="#tableResult"
                              ></TableData>
                              <div
                                style={{ fontSize: "1em" }}
                                id="tableResult"
                              ></div>
                            </Typography>
                          </Paper>
                          {showingInformationButton ? (
                            <Button
                              onClick={handleOpenModal}
                              style={{
                                backgroundColor: mainColor,
                                color: "white",
                                marginTop: "0.4cm",
                                float: "right"
                              }}
                            >
                              Um talvuna
                            </Button>
                          ) : null}
                        </Grid>
                      </Grid>
                    </Container>
                  </Grow>
                )}
              /> */}
            </Switch>
          </Router>
          <footer className={classes.footer}>
            <Container
              position="relative"
              className={clsx({
                [classes.appBarShift]: open
              })}
              maxWidth="xl"
              color="white"
            >
              <Typography variant="body1">
                <Divider />
                <Footer />
              </Typography>
            </Container>
          </footer>
        </Router>
      </div>
    </ColorContext.Provider>
  );
}
