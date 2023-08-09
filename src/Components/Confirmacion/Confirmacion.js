import React from "react";
import "./Confirmacion.css";
import { Form, Input, Radio, Button, Checkbox, message } from "antd";

const Confirmacion = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form data:", values);
    message.success({
      content: "¡Asistencia confirmada!",
      style: {
        fontSize: "25px",
      },
    });
    form.resetFields();
  };

  return (
    <div className="form-container">
      <div className="title-confirmacion">
        <h1>CONFIRMACIÓN</h1>
      </div>
      <div className="form">
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Nombre"
            rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
          >
            <Input style={{ width: "350px" }} />
          </Form.Item>

          <Form.Item
            name="Novia/Novio"
            label="De parte de"
            rules={[
              { required: true, message: "Por favor selecciona una opción" },
            ]}
          >
            <Radio.Group>
              <Radio value="novia">Novia</Radio>
              <Radio value="novio">Novio</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="Vegetariano"
            label="Eres vegetarian@"
            rules={[
              { required: true, message: "Por favor selecciona una opción" },
            ]}
          >
            <Radio.Group>
              <Radio value="si">Si</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="Asistira"
            label="Asisitiras a"
            rules={[
              { required: true, message: "Por favor selecciona una opción" },
            ]}
          >
            <Checkbox.Group>
              <Checkbox value="Ceremonia">Ceremonia</Checkbox>
              <Checkbox value="Recepción">Recepción</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item className="button-form">
            <Button type="primary" htmlType="submit">
              Confirmar asistencia
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Confirmacion;
