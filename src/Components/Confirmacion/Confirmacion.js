import React from "react";
import db from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import "firebase/firestore";
import { Form, Input, message, Select } from "antd";

import "./Confirmacion.css";

const Confirmacion = () => {
  const [form] = Form.useForm();

  const onChange = () => {};

  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onFinish = async (values) => {
    console.log("Form data:", values);

    const nombreIngresado = values.name;

    try {
      const docRef = await addDoc(collection(db, "confirmación"), {
        Nombre: nombreIngresado,
        Menú: values.menu,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    message.success({
      content: "¡Asistencia confirmada!",
      style: {
        fontSize: "25px",
        fontFamily: "textos",
      },
    });
    form.resetFields();
  };

  return (
    <div className="form-container">
      <div className="title-confirmacion">
        <span>Confirmación</span>
      </div>
      <div className="form">
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label={
              <span style={{ fontWeight: "bold", fontSize: 20 }}>Nombre</span>
            }
            rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
          >
            <Input
              style={{ width: "350px" }}
              onChange={(event) => {
                const upperCaseValue = event.target.value.toUpperCase();
                form.setFieldsValue({ name: upperCaseValue });
              }}
            />
          </Form.Item>
          <span style={{ fontWeight: "bold", fontSize: 15 }}>
            Escriba solo su primer nombre y primer apellido
          </span>
          <br></br>

          <Form.Item
            name="menu"
            label={
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Escoge tu menú
              </span>
            }
            rules={[
              { required: true, message: "Por favor selecciona una opción" },
            ]}
          >
            <Select
              showSearch
              placeholder="Selecciona el menú"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "res",
                  label: "Res",
                },
                {
                  value: "cerdo",
                  label: "Cerdo",
                },
              ]}
            />
          </Form.Item>

          <button type="submit">Confirmar asistencia</button>
        </Form>
      </div>
    </div>
  );
};

export default Confirmacion;
