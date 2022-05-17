import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function BangDiem() {
  const [table, setTable] = useState([]);

  const [red, setRed] = useState({ name: "", time: "", point: "", reboot: "" });
  const [blue, setBlue] = useState({
    name: "",
    time: "",
    point: "",
    reboot: "",
  });

  const [showAdd, setShowAdd] = useState(false);

  // {
  //   red: { name: "", time: "", point: "", reboot: "" },
  //   blue: { name: "", time: "", point: "", reboot: "" },
  // },

  const onRedChange = (e) => {
    setRed((x) => ({ ...x, [e.target.name]: e.target.value }));
  };
  const onBlueChange = (e) => {
    setBlue((x) => ({ ...x, [e.target.name]: e.target.value }));
  };
  const addNew = () => {
    if (showAdd) {
      setTable((x) => [...x, { red, blue }]);
    }
    setShowAdd((x) => !x);
  };

  const remove = (index) => {
    setTable((x) => [...x.slice(0, index), ...x.slice(index + 1)]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="fw-bold text-primary text-center">Đội xanh</h2>
        </Col>
        <Col>
          <h2 className="fw-bold text-danger text-center">Đội đỏ</h2>
        </Col>
      </Row>

      {table.map((value, index) => (
        <Row className="mb-2" key={index}>
          <Col>
            <div className="bg-light p-3 rounded border border-2 border-primary">
              <div className="d-flex justify-content-between">
                <h4 className="mb-0 fw-bold">{value.blue.name}</h4>
                <small
                  role={"button"}
                  className="text-danger"
                  onClick={() => remove(index)}
                >
                  Xóa
                </small>
              </div>
              <h5 className="text-end">Thời gian: {value.blue.time}</h5>
              <h5 className="text-end">Tổng điểm: {value.blue.point}</h5>
              <h5 className="text-end">Reboot: {value.blue.reboot}</h5>
            </div>
          </Col>
          <Col>
            <div className="bg-light p-3 rounded border border-2 border-danger">
              <h4 className="mb-0 fw-bold">{value.red.name}</h4>
              <h5 className="text-end">Thời gian: {value.red.time}</h5>
              <h5 className="text-end">Tổng điểm: {value.red.point}</h5>
              <h5 className="text-end">Reboot: {value.red.reboot}</h5>
            </div>
          </Col>
        </Row>
      ))}
      {showAdd ? (
        <React.Fragment>
          <Row className="mb-2">
            <Col>
              <div className="bg-light p-3 rounded border border-2 border-primary">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Form.Group className="mb-2">
                    <Form.Label>Tên đội</Form.Label>
                    <Form.Control
                      type="text"
                      size="sm"
                      required
                      name="name"
                      onChange={onBlueChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Thời gian</Form.Label>
                    <Form.Control
                      type="text"
                      size="sm"
                      required
                      name="time"
                      onChange={onBlueChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Tổng điểm</Form.Label>
                    <Form.Control
                      type="text"
                      size="sm"
                      required
                      name="point"
                      onChange={onBlueChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Reboot</Form.Label>
                    <Form.Control
                      type="text"
                      size="sm"
                      required
                      name="reboot"
                      onChange={onBlueChange}
                    />
                  </Form.Group>
                </Form>
              </div>
            </Col>
            <Col>
              <div className="bg-light p-3 rounded border border-2 border-danger">
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Form.Group className="mb-2">
                    <Form.Label>Tên đội</Form.Label>
                    <Form.Control
                      type="text"
                      size="sm"
                      required
                      name="name"
                      onChange={onRedChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Thời gian</Form.Label>
                    <Form.Control
                      type="text"
                      size="sm"
                      required
                      name="time"
                      onChange={onRedChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Tổng điểm</Form.Label>
                    <Form.Control
                      type="text"
                      size="sm"
                      required
                      name="point"
                      onChange={onRedChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Reboot</Form.Label>
                    <Form.Control
                      type="text"
                      size="sm"
                      required
                      name="reboot"
                      onChange={onRedChange}
                    />
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <span role={"button"} onClick={() => setShowAdd(false)}>
                  Tắt
                </span>
              </div>
            </Col>
          </Row>
        </React.Fragment>
      ) : (
        ""
      )}
      <Row>
        <Col>
          <div className="text-end">
            <span role={"button"} onClick={addNew}>
              Thêm
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BangDiem;
