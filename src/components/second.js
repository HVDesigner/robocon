import React, { useEffect } from "react";

function Second({
  start = false,
  setStart,
  timer = { minute: 0, second: 0 },
  setTimer,
}) {
  useEffect(() => {
    const interval = start
      ? setInterval(() => {
          setTimer((x) => {
            if (x.second === 0) {
              if (x.minute === 0) {
                setStart(false);
                return { minute: 0, second: 0 };
              }
              return { minute: x.minute - 1, second: 59 };
            } else {
              return { ...x, second: x.second - 1 };
            }
          });
        }, 1000)
      : "";

    return () => {
      clearInterval(interval);
    };
  }, [start, setTimer, setStart]);

  return (
    <span className={timer.minute <= 1 ? "text-danger" : ""}>
      {timer.minute > 9 ? "" : 0}
      {timer.minute}
      <span className="ms-4 me-4">:</span>
      {timer.second > 9 ? "" : 0}
      {timer.second}
    </span>
  );
}

export default Second;
