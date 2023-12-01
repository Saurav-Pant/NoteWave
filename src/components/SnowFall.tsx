"use client";

import Snowfall from "react-snowfall";

const SnowfallBG = () => {
  return (
    <Snowfall
      color="#fff"
      radius={[0.5, 0.8]}
      snowflakeCount={200}
    />
  );
};

export default SnowfallBG;