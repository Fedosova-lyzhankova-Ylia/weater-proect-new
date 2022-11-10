import React, { useState, useEffect, useRef } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, [time]);

  return <div>{time.slice(0,-3)}</div>;
}

export default Clock;
