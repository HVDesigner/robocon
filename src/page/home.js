import React, { useState } from "react";
import "./../App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import Second from "./../components/second";
import XCircle from "./../svg/x_circle";

function Home({ initTime = { minute: 10, second: 0 } }) {
  const [isStart, setIsStart] = useState(false);
  const [timer, setTimer] = useState(initTime);

  const [pointTime, setPointTime] = useState({
    red: { minute: 0, second: 0 },
    blue: { minute: 0, second: 0 },
  });

  const start = () => {
    setIsStart((x) => !x);
  };

  return (
    <Container fluid className="App">
      <div className="text-muted text-center">
        <small>
          Thời gian chỉ mang tính chất tham khảo, các đội hãy thi đấu tốc độ.
        </small>
      </div>
      <p className="time text-center mb-0">
        <Second
          start={isStart}
          setStart={setIsStart}
          timer={timer}
          setTimer={setTimer}
        />
      </p>
      <Row>
        <Col md="12" className="d-flex justify-content-evenly mb-3">
          <Button
            variant="primary"
            onClick={() => {
              if (timer.minute === 0 && timer.second === 0) {
                setTimer(initTime);
              } else if (isStart) {
                start();
              } else {
                start();
              }
            }}
          >
            {timer.minute === 0 && timer.second === 0
              ? "Đặt lại"
              : isStart
              ? "Dừng"
              : "Bắt đầu"}
          </Button>
          {JSON.stringify(timer) !== JSON.stringify(initTime) &&
          !isStart &&
          (timer.minute !== 0 || timer.second !== 0) ? (
            <Button
              variant="danger"
              onClick={() => {
                setTimer(initTime);
              }}
            >
              Đặt lại
            </Button>
          ) : (
            ""
          )}
        </Col>
        <Col>
          <h3 className="text-center text-primary">Đội xanh</h3>
          <div className="d-flex justify-content-evenly">
            {JSON.stringify(pointTime.blue) ===
            JSON.stringify({ minute: 0, second: 0 }) ? (
              <Button
                variant="outline-success"
                onClick={() => {
                  setPointTime((x) => ({ ...x, blue: timer }));
                }}
                size="sm"
              >
                Hoàn thành
              </Button>
            ) : (
              <h1>
                {`${pointTime.blue.minute > 9 ? "" : 0}${
                  pointTime.blue.minute
                }:${pointTime.blue.second > 9 ? "" : 0}${
                  pointTime.blue.second
                }`}
                <span className="text-muted ms-3">
                  <XCircle
                    role={"button"}
                    onClick={() =>
                      setPointTime((x) => ({
                        ...x,
                        blue: { minute: 0, second: 0 },
                      }))
                    }
                  />
                </span>
              </h1>
            )}
          </div>
        </Col>
        <Col>
          <h3 className="text-center text-danger">Đội đỏ</h3>
          <div className="d-flex justify-content-evenly">
            {JSON.stringify(pointTime.red) ===
            JSON.stringify({ minute: 0, second: 0 }) ? (
              <Button
                variant="outline-success"
                onClick={() => {
                  setPointTime((x) => ({ ...x, red: timer }));
                }}
                size="sm"
              >
                Hoàn thành
              </Button>
            ) : (
              <h1>
                {`${pointTime.red.minute > 9 ? "" : 0}${pointTime.red.minute}:${
                  pointTime.red.second > 9 ? "" : 0
                }${pointTime.red.second}`}
                <span className="text-muted ms-3">
                  <XCircle
                    role={"button"}
                    onClick={() =>
                      setPointTime((x) => ({
                        ...x,
                        red: { minute: 0, second: 0 },
                      }))
                    }
                  />
                </span>
              </h1>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
