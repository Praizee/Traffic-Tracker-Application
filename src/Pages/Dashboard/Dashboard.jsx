import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-8">Dashboard</h2>
      <p>long content</p>
      {Array.from({ length: 100 }, (_, index) => (
        <React.Fragment key={index}>
          {index % 20 === 0 && index ? "more" : "..."}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Dashboard;
