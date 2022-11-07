const ClassifyNumbersByColors = ({ number, min, max }) => {
  if (number <= min) {
    return (
      <div className="fs-4 fw-bold" style={{ color: "red" }}>
        You Have Reached The Minimum Number
      </div>
    );
  }

  if (number < 0) {
    return <div style={{ color: "firebrick" }}>Negative Number</div>;
  }
  if (number == 0) {
    return <div className="text-primary">Initial Number</div>;
  }
  if (number < 5) {
    return <div style={{ color: "gold" }}>Small Number</div>;
  }
  if (number < 10) {
    return <div style={{ color: "orange" }}>Medium Number</div>;
  }
  if (number < 15) {
    return <div style={{ color: "green" }}>Large Number</div>;
  }
  if (number >= max) {
    return (
      <div className="fs-4 fw-bold" style={{ color: "red" }}>
        You Have Reached The Maximum Number
      </div>
    );
  }
};

export default ClassifyNumbersByColors;
