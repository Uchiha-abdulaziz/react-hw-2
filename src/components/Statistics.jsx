import React from "react";

const Statistics = ({ statistics }) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className="name">
      <h1 className="name">Upload stats</h1>

      <ul className="stat-list">
        {statistics.map((item) => (
          <li
            style={{ backgroundColor: `#${randomColor}` }}
            key={item.id}
            className="name"
          >
            <p className="name">{item.label}</p>
            <p className="name">{item.percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
