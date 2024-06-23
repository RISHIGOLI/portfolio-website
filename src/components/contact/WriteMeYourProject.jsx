import React, { useState } from "react";
import { makeStyles, Grid, Box, TextField, Button } from "@material-ui/core";
import emailjs from "emailjs-com";
import MyButton from "../../components/MyButton";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    fontWeight: "bold",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    margin: "10px",
    color: theme.palette.colors.text.primary,
  },
}));

export default function WriteMeYourProject() {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [errorBody, setErrorBody] = useState([]);

  function handleClick() {
    console.log("clicked", formData);
    if (validateFormInputs()) {
      setShowForm(false);
      setShowLoader(true);
      const serviceID = "service_wj441v6";
      const templateID = "template_l62xlpy";
      const userID = "89bB2bo1ZOAsV8YzT";

      emailjs
        .send(serviceID, templateID, formData, userID)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            ...formData,
            from_name: "",
            from_email: "",
            message: "",
          });
          setErrorBody([]);
          setShowLoader(false);
          setShowSuccessMessage(true);
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setShowLoader(false);
          setShowFailureMessage(true);
        });
    }
  }

  function handleChange(e) {
    let newErrorBody = [...errorBody];
    switch (e.target.name) {
      case "from_name":
        newErrorBody = errorBody.filter((error) => error !== "fromNameError");
        setErrorBody(newErrorBody);
        break;

      case "from_email":
        newErrorBody = errorBody.filter((error) => error !== "fromEmailError");
        setErrorBody(newErrorBody);
        break;

      case "message":
        newErrorBody = errorBody.filter((error) => error !== "messageError");
        setErrorBody(newErrorBody);
        break;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validateFormInputs() {
    let isValid = true;
    if (formData.from_name === "") {
      setErrorBody((errorBody) => [...errorBody, "fromNameError"]);
      isValid = false;
    }
    if (formData.from_email === "") {
      setErrorBody((errorBody) => [...errorBody, "fromEmailError"]);
      isValid = false;
    }
    if (formData.message === "") {
      setErrorBody((errorBody) => [...errorBody, "messageError"]);
      isValid = false;
    }
    return isValid;
  }

  return (
    <Grid
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* title */}
      <Box className={classes.pageTitle}>Write Me Your Project</Box>

      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "30px",
          paddingBottom: "10px",
          borderRadius: "10px",
          margin: "10px",
          minHeight: "400px",
        }}
      >
        {showForm && (
          <Grid>
            {/* name */}
            <Grid style={{ margin: "15px 0px" }}>
              <TextField
                fullWidth
                InputLabelProps={{
                  shrink: true, // Keeps the label in a shrunk state (above the field) when the field is empty
                }}
                variant="outlined"
                label="Name"
                name="from_name"
                value={formData.from_name}
                placeholder="Insert your name"
                onChange={handleChange}
                error={errorBody.includes("fromNameError")}
              />
            </Grid>

            {/* email */}
            <Grid style={{ margin: "15px 0px" }}>
              <TextField
                fullWidth
                InputLabelProps={{
                  shrink: true, // Keeps the label in a shrunk state (above the field) when the field is empty
                }}
                variant="outlined"
                label="Email"
                name="from_email"
                value={formData.from_email}
                placeholder="Insert your email"
                onChange={handleChange}
                error={errorBody.includes("fromEmailError")}
              />
            </Grid>

            {/* project */}
            <Grid style={{ margin: "15px 0px" }}>
              <TextField
                fullWidth
                multiline
                InputLabelProps={{
                  shrink: true, // Keeps the label in a shrunk state (above the field) when the field is empty
                }}
                variant="outlined"
                label="Project"
                name="message"
                value={formData.message}
                placeholder="Write your project"
                rows={6}
                onChange={handleChange}
                error={errorBody.includes("messageError")}
              />
            </Grid>

            <Grid style={{ margin: "10px 0px", marginBottom: "0px" }}>
              <MyButton text="Send Message" onClick={handleClick}></MyButton>
            </Grid>
          </Grid>
        )}
        {showSuccessMessage && (
          <SuccessMessage
            showForm={() => {
              setShowForm(true);
              setShowSuccessMessage(false);
            }}
          />
        )}
        {showFailureMessage && (
          <ErrorMessage
            showForm={() => {
              setShowForm(true);
              setShowFailureMessage(false);
            }}
          />
        )}
        {showLoader && <Loading />}
      </Grid>
    </Grid>
  );
}
