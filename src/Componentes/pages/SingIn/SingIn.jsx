import { Box, Button, TextField } from "@mui/material";
import "./SingIn.css";
import * as Yup from "yup";
import { useFormik } from "formik";
function SingIn() {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (data) => {},
    validationSchema: Yup.object({
      name: Yup.string("es necesario colocar un nombre"),
      email: Yup.string("es necesario un email valido"),
    }),
    validateOnChange: false,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        marginRight: "10vw",
        marginLeft: "11vw",
      }}
    >
      <div className="contenedorSingIn">
        <form onSubmit={handleSubmit}>
          <h2 style={{ fontFamily: "Helvética" }}>SING IN</h2>
          <h5 style={{ fontFamily: "Helvética" }}>
            With your email and password or Google
          </h5>
          <Box
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
              id="standard-basic"
              label="Name"
              variant="standard"
              name="name"
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Box>
          <div
            style={{ display: "flex", flexDirection: "row", height: "100vh" }}
          >
            <button className="ButtonSing">Sing In</button>
            <button className="ButtonGoogle">Sing In whit Google</button>
          </div>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          marginRight: "10vw",
          marginLeft: "4vw",
        }}
      >
        <form
          onSubmit={handleSubmit}
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
            />
            <TextField
              sx={{
                marginTop: "5vh",
              }}
              id="standard-basic"
              label="Email"
              variant="standard"
              name="newemail"
            />
            <TextField
              sx={{
                marginTop: "5vh",
              }}
              id="standard-basic"
              label="Password"
              variant="standard"
              name="password"
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
