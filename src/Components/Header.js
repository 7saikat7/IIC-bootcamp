import { useState } from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Card,
  CardContent,
  Backdrop,
} from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import logo from "../Images/IIC.png";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import {
  FcHome,
  FcBiomass,
  FcLineChart,
  FcAdvertising,
  FcAssistant,
  FcBusinessContact,
} from "react-icons/fc";
import { Link } from "react-router-dom";
import color from "../Theme/Color";
import "../Stylesheets/Header.css";

const drawerWidth = 240;
export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [Toggle, setToggle] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setToggle(!Toggle);
  };
  const handleClose = () => {
    setToggle(false);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ background: "white" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon style={{ color: color.typocolor }} />
          </IconButton>
          <img src={logo} alt="Logo" className={classes.logo} />
          <Box component="span">
            <Typography
              variant="h4"
              noWrap
              style={{ color: color.typocolor }}
              className="Title"
            >
              BootCamp!!...
            </Typography>
          </Box>
          <Box component="span" ml={115}>
            <IconButton onClick={handleToggle}>
              <AccountCircleIcon
                style={{ fontSize: 40, color: color.typocolor }}
              />
            </IconButton>
            <Backdrop
              className={classes.backdrop}
              open={Toggle}
              onClick={handleClose}
            >
              <Card className={classes.card}>
                <CardContent>
                  <List>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <ListItem>
                        <ListItemIcon>
                          <AccountCircleIcon
                            style={{ fontSize: 40, color: blue[500] }}
                          />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: 800, color: blue[500] }}
                          >
                            Signin
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      <ListItem>
                        <ListItemIcon>
                          <FaceIcon style={{ fontSize: 40, color: red[500] }} />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: 800, color: red[500] }}
                          >
                            Sign Up
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </Link>
                  </List>
                </CardContent>
              </Card>
            </Backdrop>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.paper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Typography
            style={{ fontSize: 20, textAlign: "left", color: color.iconColor }}
          >
            Options
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{ color: color.iconColor }} />
            ) : (
              <ChevronLeftIcon style={{ color: color.iconColor }} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <FcHome className={classes.icons} />
            </ListItemIcon>
            <ListItemText className={clsx(classes.link)}>Home</ListItemText>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <FcAdvertising className={classes.icons} />
            </ListItemIcon>
            <ListItemText className={clsx(classes.link)}>
              Announcement
            </ListItemText>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <FcBusinessContact className={classes.icons} />
            </ListItemIcon>
            <ListItemText className={clsx(classes.link)}>Profile</ListItemText>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <FcBiomass className={classes.icons} />
            </ListItemIcon>
            <ListItemText className={clsx(classes.link)}>
              Assignment
            </ListItemText>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <FcLineChart className={classes.icons} />
            </ListItemIcon>
            <ListItemText className={clsx(classes.link)}>Result</ListItemText>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <FcAssistant className={classes.icons} />
            </ListItemIcon>
            <ListItemText className={clsx(classes.link)}>Support</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontWeight: 300,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  card: {
    minWidth: 275,
  },
  drawer: {
    position: "absolute",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(9) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  listItem: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  backdrop: {
    zIndex: theme.zIndex.appBar + 1,
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3, 3, 3, 10),
  },
  paper: {
    background: color.secondary,
  },
  link: {
    color: color.iconColor,
    textDecoration: "none",
    marginLeft: 7,
  },
  logo: {
    widht: 40,
    height: 40,
  },
  icons: {
    fontSize: 50,
  },
}));
