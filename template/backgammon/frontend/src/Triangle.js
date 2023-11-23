import React from "react";

export const Triangle = () => {
  const points = [...Array(6).keys()].map((i) => {
    const triangle = `${i * 30},0 ${15 + i * 30},150 ${30 + i * 30},0`;
    const className = i % 2 === 0 ? "board-inner110" : "board-inner90";
    return <polygon key={i} points={triangle} className={className} />;
  });
  const transforms = [
    "translate(60 10)",
    "translate(284 10)",
    "translate(60 234) rotate(180 90 75)",
    "translate(284 234) rotate(180 90 75)",
  ];
  return (
    <>
      {transforms.map((transform, i) => (
        <g key={i} transform={transform}>
          {points}
        </g>
      ))}
    </>
  );
};
