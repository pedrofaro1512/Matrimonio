import React from "react";
import "./Confirmacion.css";
import { Form, Input, Radio, Checkbox, message, Select } from "antd";

const Confirmacion = () => {
  const [form] = Form.useForm();

  const onChange = (value) => {
    //console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const onFinish = (values) => {
    console.log("Form data:", values);
    //console.log(`selected ${values}`);
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
            <Input style={{ width: "350px" }} />
          </Form.Item>

          {/* <Form.Item
            name="Novia/Novio"
            label={
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Nos acompañas de parte de
              </span>
            }
            rules={[
              { required: true, message: "Por favor selecciona una opción" },
            ]}
          >
            <Radio.Group>
              <Radio value="novia" style={{ fontSize: 20 }}>
                Novia
              </Radio>
              <Radio value="novio" style={{ fontSize: 20 }}>
                Novio
              </Radio>
            </Radio.Group>
          </Form.Item> */}

          <Form.Item
            name="Menu"
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
                {
                  value: "pescado",
                  label: "Pescado",
                },
                {
                  value: "ensalada",
                  label: "Ensalada",
                },
              ]}
            />
          </Form.Item>

          {/* <Form.Item
            name="Asistira"
            label={
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Asistiras a
              </span>
            }
            rules={[
              { required: true, message: "Por favor selecciona una opción" },
            ]}
          >
            <Checkbox.Group>
              <Checkbox value="Ceremonia" style={{ fontSize: 20 }}>
                Ceremonia
              </Checkbox>
              <Checkbox value="Recepción" style={{ fontSize: 20 }}>
                Recepción
              </Checkbox>
            </Checkbox.Group>
          </Form.Item> */}

          <button type="submit">Confirmar asistencia</button>
        </Form>
      </div>
    </div>
  );
};

export default Confirmacion;
