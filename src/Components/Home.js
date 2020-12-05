import { useState} from "react";
import {
  Grid,
  Paper,
  makeStyles,
  FormControl,
  InputLabel,
  Input,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  TextField,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { grey, red, purple, blue, green } from "@material-ui/core/colors";
import svg1 from "../Images/Drawkit/7_SCENE.svg";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
const Home = () => {
  const classes = useStyles();
  const tileData = [
    {
      img: img1,
      title: "Image",
      author: "author",
    },
    {
      img: img2,
      title: "Image",
      author: "author",
    },
    {
      img: img3,
      title: "Image",
      author: "author",
    },
    {
      img: img4,
      title: "Image",
      author: "author",
    },
  ];
  const rand_color = () => {
    const colorarray = [red[500], purple[500], blue[500], green["A700"]];
    let color = colorarray[Math.floor(Math.random() * colorarray.length)];
    return color;
  };
  const [Todo, setTodo] = useState([]);
  const [Task, setTask] = useState("");
  const [update, setupdate] = useState(false);
  const [Key, setKey] = useState(false);
  const [Project, setProject] = useState();
  const [Open, setOpen] = useState(false);
  const addToDoList = (e) => {
    e.preventDefault();
    setTodo((todo) => [...todo, Task]);
    handleClick();
  };
  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const listdelete = (index) => {
    if (index > -1) {
      let new_todo = Todo;
      if (index >= 0) {
        new_todo.splice(index, 1);
      }
      setTodo(new_todo);
      setupdate((up) => !up);
    }
  };
  const handledocumentfile = (e) => {
    const document = e.target.files[0];
    setKey(true);
    setProject((doc) => document);
  };
  const reset = (e) => {
    e.preventDefault();
    setKey(false);
    setProject((doc) => undefined);
  };
  const submit = (e) => {
    e.preventDefault();
    setKey(true);
    console.log("Submitted");
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <img src={svg1} alt="header1" className={classes.title_img} />
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.rows}>
          <Paper elevation={3} className={classes.Paper}>
            <Grid item xs={12}>
              <Typography variant="h2">Your Assignment</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ color: grey[500] }}>
                Assignment Goes here
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.rows}>
          <Paper elevation={3} className={classes.fitPaper}>
            <Typography variant="h2">Team Members</Typography>
            <GridList cellHeight={180} className={classes.gridList}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${tile.title}`}
                        className={classes.icon}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.fixedrows}>
          <Paper elevation={3} className={classes.Paper}>
            <Typography variant="h2">To-Do List</Typography>
            <FormControl>
              <InputLabel htmlFor="todo">Enter what to do</InputLabel>
              <Input
                id="todo"
                aria-describedby="input for to do list"
                className={classes.input}
                onBlur={(e) => setTask(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              size="medium"
              style={{ color: "white", backgroundColor: green[500] }}
              onClick={addToDoList}
            >
              Add
            </Button>
            <Snackbar open={Open} autoHideDuration={4000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Added in the list. Click the item to delete
              </Alert>
            </Snackbar>
            <List>
              {Todo.map((task) => (
                <ListItem key={Todo.indexOf(task)} button update={update}>
                  <Box
                    component="div"
                    style={{
                      backgroundColor: rand_color(),
                      height: 50,
                      width: "100%",
                      color: "white",
                      padding: 10,
                      borderRadius: 10,
                    }}
                    onClick={() => {
                      listdelete(Todo.indexOf(task));
                    }}
                  >
                    <ListItemText>{task}</ListItemText>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.rows}>
          <Paper elevation={3} className={classes.Paper}>
            <Typography variant="h2">Submission</Typography>
            <Typography variant="h4" style={{ color: grey[500] }}>
              Submit your file here
            </Typography>
            <FormControl>
              <TextField
                id="file"
                label="Upload File in (.ppt or .pdf format)"
                type="file"
                inputProps={{ accept: ".ppt,.pptx,.pdf" }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handledocumentfile}
                key={Key}
              />
            </FormControl>
            <Button type="reset" style={{ color: red[500] }} onClick={reset}>
              RESET
            </Button>
            <Button
              type="submit"
              style={{ color: green[500] }}
              onClick={submit}
            >
              SUBMIT
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
const useStyles = makeStyles({
  root: {
    marginTop: -350,
  },
  rows: {
    marginTop: 10,
  },
  fixedrows: {
    marginTop: 10,
    height: 540,
    overflowY: "auto",
  },
  title_img: {
    width: "100%",
    marginTop: -120,
  },
  Paper: {
    zIndex: 2,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  fitPaper: {
    zIndex: 2,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    width: "fit-Content",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  input: {
    width: 300,
  },
});
export default Home;
