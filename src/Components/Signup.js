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
  Avatar,
  LinearProgress,
  Grow,
} from "@material-ui/core";
import { RiTeamLine } from "react-icons/ri";
import { green, grey } from "@material-ui/core/colors";
import { useHistory} from "react-router-dom";
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
  }
});
const UserDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery("(max-width:576px)");
  const [Progress,setProgress] = useState(0);
  const [Show,setSHow] = useState(true);
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [confpassword,setconfpassword] = useState("");
  const [TleadName, setTleadName] = useState("");
  const [TName,setTName] = useState("");
  const [ImgAsFile, setImgAsFile] = useState(undefined);
  //to reset the file input value
  const [key, setkey] = useState(true);
  const reset = () => {
    setTleadName("");
    setTName("");
    setImgAsFile("");
    setkey(false);
  };
  const upload = (e) => {
    e.preventDefault();
    console.log("next");
    setSHow(false);
    setProgress(25);
    history.push("/details");
  };
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setkey(true);
    setImgAsFile((imageFile) => image);
  };
  
  return (
    <Grow in={Show} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
    <Grid container>
      <Paper elevation={5} className={matches ? classes.paperSm : classes.paper}>
        <Grid item xs={12}>
          <LinearProgress variant="determinate" value={Progress}/>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" justifyContent="center">
            {ImgAsFile?(
              <Avatar alt={TleadName} className={classes.large} src={URL.createObjectURL(ImgAsFile)} />
            ):(
              <RiTeamLine style={{ fontSize: 200 }} />
            )}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.title}>
            Team Registration
          </Typography>
        </Grid>
        <form>
          <Grid container>
            <Grid item xs={12} sm={6} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <InputLabel htmlFor="TleadName">Team Lead's Name</InputLabel>
                <Input
                  id="Tleadname"
                  aria-describedby="Team lead Name"
                  type="text"
                  onChange={(e) => setTleadName(e.target.value)}
                  value={TleadName}
                  required={true}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <InputLabel htmlFor="name">Team Name</InputLabel>
                <Input
                  id="name"
                  aria-describedby="Name"
                  type="text"
                  onChange={(e) => setTName(e.target.value)}
                  value={TName}
                  required={true}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <InputLabel htmlFor="email">Team Lead's Email</InputLabel>
                <Input
                  id="email"
                  aria-describedby="Name"
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  required={true}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <InputLabel htmlFor="pass">Team Password</InputLabel>
                <Input
                  id="pass"
                  aria-describedby="Name"
                  type="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  required={true}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <InputLabel htmlFor="confPass">Confirm Password</InputLabel>
                <Input
                  id="confPass"
                  aria-describedby="Name"
                  type="password"
                  onChange={(e) => setconfpassword(e.target.value)}
                  value={confpassword}
                  onBlur={()=>{
                    if(password!==confpassword)
                  {
                    alert("Passwords Don't match");
                  }
                }}
                  required={true}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} className={matches?classes.inputPlaceSm:classes.inputPlace}>
              <FormControl className={classes.form}>
                <TextField
                  id="photo"
                  label="Upload Your Photo"
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleImageAsFile}
                  key={key}
                  className={matches?classes.inputSm:classes.input}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.button}>
            <Button
              size="medium"
              style={{ color: grey[500] }}
              type="reset"
              onClick={reset}
            >
              Reset
            </Button>
            <Button
              size="medium"
              style={{ color: green[500] }}
              type="submit"
              onClick={upload}
            >
              Next
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
    </Grow>
  );
};
export default UserDetails;
