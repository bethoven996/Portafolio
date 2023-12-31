import { Box, Button, TextField } from "@mui/material";
import "./SingIn.css";
import * as Yup from "yup";
import { useFormik } from "formik";
function SingIn({}) {
  const openGoogleSignIn = () => {
    const googlePopup = window.open(
      "https://accounts.google.com/login",
      "googlePopup",
      "width=500,height=600"
    );

    if (googlePopup) {
      googlePopup.focus();
    } else {
      alert("Por favor, habilita las ventanas emergentes para continuar.");
    }
  };
  const {
    handleSubmit: handleSubmitSignIn,
    handleChange: handleChangeSignIn,
    errors: errorsSignIn,
    touched: touchedSignIn,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (data) => {},
    validationSchema: Yup.object({
      name: Yup.string().required("Es necesario ingresar un nombre"),
      email: Yup.string()
        .email("Es necesario un email valido")
        .required("Email es requerido"),
    }),
    validateOnChange: false,
  });
  const {
    handleSubmit: handleSubmitSignUp,
    handleChange: handleChangeSignUp,
    errors: errorsSignUp,
    touched: touchedSignUp,
  } = useFormik({
    initialValues: {
      newname: "",
      newemail: "",
      password: "",
    },
    onSubmit: (data) => {},
    validationSchema: Yup.object({
      newname: Yup.string().required("Es necesario ingresar un nombre"),
      newemail: Yup.string()
        .email("Es necesario un email valido")
        .required("Email es requerido"),
      password: Yup.string().required("Es necesario ingresar una contraseña"),
    }),
    validateOnChange: false,
  });

  return (
    <div
      className="contenedorTODO"
      style={{
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        marginRight: "10vw",
        marginLeft: "11vw",
      }}
    >
      <div
        style={{ marginTop: "25px", minWidth: "100px" }}
        className="contenedorSingIn"
      >
        <form onSubmit={handleSubmitSignIn}>
          <h2 style={{ fontFamily: "Helvética" }}>SING IN</h2>
          <h5 style={{ fontFamily: "Helvética" }}>
            With your email and password or Google
          </h5>
          <Box
            className="input"
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "25vw",
                display: "flex",
                flexDirection: "column",
                margin: "20px",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{
                width: "100%",
              }}
              id="standard-basic"
              label="Name"
              variant="standard"
              name="name"
              onChange={handleChangeSignIn}
              error={errorsSignIn.name && touchedSignIn.name}
              helperText={
                errorsSignIn.name && touchedSignIn.name ? errorsSignIn.name : ""
              }
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              onChange={handleChangeSignIn}
              error={errorsSignIn.email && touchedSignIn.email}
              helperText={
                errorsSignIn.email && touchedSignIn.email
                  ? errorsSignIn.email
                  : ""
              }
            />
          </Box>
          <div
            className="contendorBotones"
            style={{
              display: "flex",
              flexDirection: "row",
              height: "30vh",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{ fontSize: "90%" }}
              type="Submit"
              className="ButtonSing"
            >
              Sing In
            </button>
            <button
              style={{ fontSize: "90%" }}
              onClick={() => openGoogleSignIn()}
              type="button"
              className="ButtonGoogle"
            >
              Sing In whit Google
            </button>
          </div>
        </form>
      </div>
      <div
        className="ContenedorSingUp"
        style={{
          minWidth: "100px",
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <form
          onSubmit={handleSubmitSignUp}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
          action=""
        >
          <h2
            style={{
              fontFamily: "Helvética",
              margin: "10px",
              marginTop: "20px",
            }}
          >
            SING UP
          </h2>
          <h5 style={{ fontFamily: "Helvética", margin: "10px" }}>
            Create an new acount
          </h5>
          <Box
            className="input"
            component="form"
            sx={{
              "& > :not(style)": {
                m: 1,
                width: "25vw",
                display: "flex",
                flexDirection: "column",
                margin: "20px",
                marginLeft: "4vw",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{
                marginTop: "5vh",
              }}
              id="standard-basic"
              label="New Name"
              variant="standard"
              name="newname"
              onChange={handleChangeSignUp}
              error={errorsSignUp.newname && touchedSignUp.newname}
              helperText={
                errorsSignUp.newname && touchedSignUp.newname
                  ? errorsSignUp.newname
                  : ""
              }
            />
            <TextField
              sx={{
                marginTop: "5vh",
              }}
              id="standard-basic"
              label="Email"
              variant="standard"
              name="newemail"
              onChange={handleChangeSignUp}
              error={errorsSignUp.newemail && touchedSignUp.newemail}
              helperText={
                errorsSignUp.newemail && touchedSignUp.newemail
                  ? errorsSignUp.newemail
                  : ""
              }
            />
            <TextField
              sx={{
                marginTop: "5vh",
              }}
              id="standard-basic"
              label="Password"
              variant="standard"
              name="password"
              onChange={handleChangeSignUp}
              error={errorsSignUp.password && touchedSignUp.password}
              helperText={
                errorsSignUp.password && touchedSignUp.password
                  ? errorsSignUp.password
                  : ""
              }
            />
            <TextField
              sx={{
                marginTop: "5vh",
              }}
              id="standard-basic"
              label="Repet Password"
              variant="standard"
              name="password"
            />
          </Box>
          <div>
            <button className="btnSingUp">SING UP</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingIn;
