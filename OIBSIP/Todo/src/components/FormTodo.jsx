import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>New Task</b>
        </Form.Label>

        <Row>
          <Col>
            <Form.Control
              type="text"
              className="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add new todo"
            />
          </Col>
          <Col>
            <Button variant="contained" color="success" type="submit">
              <CheckCircleIcon />
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default FormTodo;
