import { useState } from "react";
import {
  Paper,
  Grid,
  FormControl,
  Input,
  InputLabel,
  TextField,
  Typography,
  makeStyles,
  Button,
  useMediaQuery,
  Box,
  LinearProgress,
  Grow,
} from "@material-ui/core";
import { RiTeamLine } from "react-icons/ri";
import { green, red } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  paper: {
    width: 450,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  paperSm: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "7%",
    width: "90%",
  },
  form: {
    margin: 20,
    alignItems: "center",
  },
  title: {
    margin: "auto",
    textAlign: "center",
  },
  button: {
    textAlign: "center",
  },
  large: {
    marginTop: 20,
    marginBottom: 5,
    width: 150,
    height: 150,
  },
  inputPlace: {
    marginLeft: "15%",
  },
  inputPlaceSm: {
    marginLeft: "5%",
  },
  inputSm: {
    width: 250,
  },
});
const Team = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:576px)");
  const [Progress, setProgress] = useState(50);
  const [Show1, setSHow1] = useState(true);
  const [m1,setm1] = useState("");
  const [key1, setkey1] = useState(true);
  const [ImgAsFile1, setImgAsFile1] = useState(undefined);
  const [m2,setm2] = useState("");
  const [key2, setkey2] = useState(true);
  const [ImgAsFile2, setImgAsFile2] = useState(undefined);
  const [m3,setm3] = useState("");
  const [key3, setkey3] = useState(true);
  const [ImgAsFile3, setImgAsFile3] = useState(undefined);
  const [m4,setm4] = useState("");
  const [key4, setkey4] = useState(true);
  const [ImgAsFile4, setImgAsFile4] = useState(undefined);
  const handleImageAsFile1 = (e) => {
    const image = e.target.files[0];
    setkey1(true);
    setImgAsFile1((imageFile) => image);
  };
  const handleImageAsFile2 = (e) => {
    const image = e.target.files[0];
    setkey2(true);
    setImgAsFile2((imageFile) => image);
  };
  const handleImageAsFile3 = (e) => {
    const image = e.target.files[0];
    setkey3(true);
    setImgAsFile3((imageFile) => image);
  };
  const handleImageAsFile4 = (e) => {
    const image = e.target.files[0];
    setkey4(true);
    setImgAsFile4((imageFile) => image);
  };
  const history = useHistory();
  const reset = () =>{
      setm1("");
      setm2("");
      setm3("");
      setm4("");
      setkey1(false);
      setkey2(false);
      setkey3(false);
      setkey4(false);
  }
  const upload = () => {
      history.replace("/");
  }
  return (
    <Grow in={Show1} style={{ transformOrigin: "0 0 0" }} timeout={1000}>
      <Grid container>
        <Paper
          elevation={5}
          className={matches ? classes.paperSm : classes.paper}
        >
          <Grid item xs={12}>
            <LinearProgress variant="determinate" value={Progress} />
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <RiTeamLine style={{ fontSize: 200 }} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.title}>
                Team Registration
              </Typography>
            </Grid>
            <form>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={
                    matches ? classes.inputPlaceSm : classes.inputPlace
                  }
                >
                  <FormControl className={classes.form}>
                    <InputLabel htmlFor="TM1">
                      Name of Member 1
                    </InputLabel>
                    <Input
                      id="TM1"
                      aria-describedby="Team Member 1"
                      type="text"
                      onChange={(e) => setm1(e.target.value)}
                      value={m1}
                      className={matches ? classes.inputSm : classes.input}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <TextField
                  id="photo1"
                  label="Upload Photo"
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleImageAsFile1}
                  key={key1}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={
                    matches ? classes.inputPlaceSm : classes.inputPlace
                  }
                >
                  <FormControl className={classes.form}>
                    <InputLabel htmlFor="TM2">
                      Name of Member 2
                    </InputLabel>
                    <Input
                      id="TM2"
                      aria-describedby="Team Member 2"
                      type="text"
                      onChange={(e) => setm2(e.target.value)}
                      value={m2}
                      className={matches ? classes.inputSm : classes.input}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <TextField
                  id="photo2"
                  label="Upload Photo"
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleImageAsFile2}
                  key={key2}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={
                    matches ? classes.inputPlaceSm : classes.inputPlace
                  }
                >
                  <FormControl className={classes.form}>
                    <InputLabel htmlFor="TM3">
                      Name of Member 3
                    </InputLabel>
                    <Input
                      id="TM3"
                      aria-describedby="Team Member 3"
                      type="text"
                      onChange={(e) => setm3(e.target.value)}
                      value={m3}
                      className={matches ? classes.inputSm : classes.input}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <TextField
                  id="photo3"
                  label="Upload Photo"
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleImageAsFile3}
                  key={key3}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={
                    matches ? classes.inputPlaceSm : classes.inputPlace
                  }
                >
                  <FormControl className={classes.form}>
                    <InputLabel htmlFor="TM4">
                      Name of Member 4
                    </InputLabel>
                    <Input
                      id="TM4"
                      aria-describedby="Team Member 4"
                      type="text"
                      onChange={(e) => setm4(e.target.value)}
                      value={m4}
                      className={matches ? classes.inputSm : classes.input}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <TextField
                  id="photo4"
                  label="Upload Photo"
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleImageAsFile4}
                  key={key4}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
              </Grid>
              <Grid item xs={12} className={classes.button}>
            <Button
              size="medium"
              style={{ color: red[500] }}
              type="reset"
              onClick={reset}
            >
              RESSET
            </Button>
            <Button
              size="medium"
              style={{ color: green[500] }}
              type="submit"
              onClick={upload}
            >
              SUBMIT
            </Button>
          </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Grow>
  );
};
export default Team;
