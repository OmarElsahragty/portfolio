import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Grid, Typography, Snackbar, Tooltip } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { Caller, URL } from "../../../API";

import styles from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);

  const [snackbarState, setSnackbarState] = useState(null);

  const { t } = useTranslation();

  const SendEmail = () => {
    Caller.post(URL.SEND_MAIL, { name, email, message })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setEmailValidation(true);
        setSnackbarState("success");
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.response.data);
        // eslint-disable-next-line no-console
        console.log(error.response.status);
        // eslint-disable-next-line no-console
        console.log(error.response.headers);
        setSnackbarState("error");
      });
  };

  return (
    <Grid className={styles.contact}>
      <Grid item className="mb-15">
        <Typography variant="h2" align="center" color="textPrimary">
          {t("Get-In-Touch")}
        </Typography>
      </Grid>

      <Grid container justify="space-between" alignItems="flex-start">
        <Grid
          item
          style={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip title={t("Send-Email")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 454.573 454.573"
              className={styles.envelope}
            >
              <g>
                <path d="M452.441,156.234l-65.829-46.498V41.817c-0.66-6.728-5.843-12.128-12.539-13.061H85.682c-6.695,0.934-11.879,6.333-12.539,13.061v67.396l-68.441,47.02c-2.711,1.968-4.428,5.021-4.702,8.359v248.163c0.89,6.811,6.25,12.172,13.061,13.061h433.633c5.747,0,7.837-6.792,7.837-13.061V164.593C454.531,161.458,455.053,158.323,452.441,156.234z M386.612,134.813l44.931,30.824l-44.931,33.959V134.813z M94.041,49.654h271.673v166.139l-135.837,102.4l-135.837-102.4V49.654z M73.143,134.291v65.829l-44.931-34.482L73.143,134.291z M20.898,187.058l146.286,110.759L20.898,396.56V187.058z M45.976,404.919l138.971-93.518l37.094,28.212c2.1,1.623,4.661,2.538,7.314,2.612c2.09,0,3.135-1.045,5.224-2.612l38.661-29.78l140.539,95.086H45.976z M433.633,392.903l-143.151-96.131l143.151-109.714V392.903z" />
                <path d="M146.286,117.572h47.02c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449h-47.02c-5.771,0-10.449,4.678-10.449,10.449S140.515,117.572,146.286,117.572z" />
                <path d="M146.286,164.593h167.184c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449H146.286c-5.771,0-10.449,4.678-10.449,10.449S140.515,164.593,146.286,164.593z" />
                <path d="M323.918,201.164c0-5.771-4.678-10.449-10.449-10.449H146.286c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h167.184C319.24,211.613,323.918,206.935,323.918,201.164z" />
              </g>
            </svg>
          </Tooltip>
        </Grid>

        <Grid item style={{ width: "50%" }}>
          <Grid item container wrap="nowrap" alignItems="center">
            <input
              type="text"
              className="input"
              placeholder={t("Name-Placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="px-10" />
            <input
              type="text"
              className={`input ${emailValidation ? "" : "invalid-input"}`}
              placeholder={t("Email-Placeholder")}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailValidation(
                  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(e.target.value)
                );
              }}
            />
          </Grid>

          <Grid item className="py-15">
            <textarea
              type="text"
              className="Textarea"
              placeholder={t("Message-Placeholder")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>

          <Grid item>
            <button
              type="button"
              className="button"
              onClick={SendEmail}
              disabled={!name || !email || !emailValidation || !message}
            >
              {t("Submit")}
            </button>
          </Grid>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarState}
        autoHideDuration={6000}
        onClose={() => setSnackbarState(null)}
      >
        {snackbarState === "success" ? (
          <Alert
            onClose={() => setSnackbarState(null)}
            elevation={6}
            variant="filled"
            severity="success"
          >
            {t("Reached-Me")}
          </Alert>
        ) : (
          <Alert
            onClose={() => setSnackbarState(null)}
            elevation={6}
            variant="filled"
            severity="error"
          >
            {t("Error")}
          </Alert>
        )}
      </Snackbar>
    </Grid>
  );
};

export default Contact;
