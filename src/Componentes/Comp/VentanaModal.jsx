import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./VentanaModal.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

function VentanaModal({ total, show, handleClose }) {
  const { handleSubmit, handleChange, errors, isValid } = useFormik({
    initialValues: {
      name: "",
      Lastname: "",
      NumberCart: "",
      CodeSegurity: "",
      Date: "",
      Country: "",
      City: "",
      direccion: "",
      Code: "",
    },
    onSubmit: (data) => {},
    validationSchema: Yup.object({
      name: Yup.string().required("Es necesario ingresar un nombre"),
      Lastname: Yup.string().required("Es necesario ingresar un nombre"),
      NumberCart: Yup.string()
        .required("Es necesario ingresar un numero Valido")
        .min(16, "Tarjeta Invalida")
        .max(16, "Tarjeta Invalida"),
      CodeSegurity: Yup.string()
        .required("Es necesario ingresar un numero Valido")
        .min(3, "Number Invalido")
        .max(4, "Number Invalido"),
      Date: Yup.string().required("Es necesario ingresar una fecha"),
      Country: Yup.string().required("Invalid"),
      City: Yup.string().required("Invalid"),
      direccion: Yup.string().required("Invalid"),
      Code: Yup.string().required("invalid"),
    }),
    validateOnChange: false,
  });
  const navigate = useNavigate();

  const Alert = () => {
    if (!isValid) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `Your purchase was successful`,
        showConfirmButton: false,
        timer: 2500,
      }).then(() => {
        navigate("/");
      });
    } else {
      console.log("Form is not valid");
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Button className="BtnClose" variant="white" onClick={handleClose}>
          X
        </Button>
        <Form onSubmit={handleSubmit} className="ContendorForm">
          <Form.Group className="contNames">
            <Form.Group controlId="name" className="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                error={errors.name}
                name="name"
                type="text"
                placeholder="Name"
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="LastName" controlId="Lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="Lastname"
                isInvalid={!!errors.name}
                onChange={handleChange}
                error={errors.Lastname}
              />
              <Form.Control.Feedback type="invalid">
                {errors.Lastname}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Group>
          <Form.Group className="contendorDatosTarjeta">
            <Form.Group className="CreditCardNumber" controlId="NumberCart">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                name="NumberCart"
                type="text"
                placeholder="5412-4555-4458-3215"
                isInvalid={!!errors.NumberCart}
                onChange={handleChange}
                error={errors.NumberCart}
              />
              <Form.Control.Feedback type="invalid">
                {errors.NumberCart}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="CodeSegurity" controlId="CodeSegurity">
              <Form.Label>Code Segurity</Form.Label>
              <Form.Control
                name="CodeSegurity"
                isInvalid={!!errors.CodeSegurity}
                onChange={handleChange}
                error={errors.CodeSegurity}
                type="password"
              />
              <Form.Control.Feedback type="invalid">
                {errors.CodeSegurity}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="Expiracion" controlId="Date">
              <Form.Label>Ext Date</Form.Label>
              <Form.Control
                isInvalid={!!errors.Date}
                onChange={handleChange}
                error={errors.Date}
                name="Date"
                type="date"
                placeholder="0"
              />
              <Form.Control.Feedback type="invalid">
                {errors.Date}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Group>
          <h5
            style={{
              fontFamily: "Courier New",
              marginLeft: "45px",
              textDecoration: "underline",
            }}
          >
            Datos De Envio
          </h5>
          <Form.Group className="ContenedorDireccion">
            <Form.Group className="Country" controlId="Country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                isInvalid={!!errors.Country}
                onChange={handleChange}
                error={errors.Country}
                type="text"
                placeholder="Country"
              />
              <Form.Control.Feedback type="invalid">
                {errors.Country}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="City" controlId="City">
              <Form.Label>City</Form.Label>
              <Form.Control
                isInvalid={!!errors.City}
                onChange={handleChange}
                error={errors.City}
                type="text"
                placeholder="City"
              />
              <Form.Control.Feedback type="invalid">
                {errors.City}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="Direccion" controlId="direccion">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                isInvalid={!!errors.direccion}
                onChange={handleChange}
                error={errors.direccion}
                name="direccion"
                type="text"
                placeholder="Direccion"
              />
              <Form.Control.Feedback type="invalid">
                {errors.direccion}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="CodePostal" controlId="Code">
              <Form.Label>Code Postal</Form.Label>
              <Form.Control
                name="Code"
                type="text"
                placeholder="Code Postal"
                isInvalid={!!errors.Code}
                onChange={handleChange}
                error={errors.Code}
              />
              <Form.Control.Feedback type="invalid">
                {errors.Code}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Group>

          <Modal.Footer className="FooterModal">
            <Button type="submit" onClick={Alert} variant="primary">
              PAY:${total}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default VentanaModal;
//
