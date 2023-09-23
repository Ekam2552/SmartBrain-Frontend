const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="color-animation text f3 fw8">
        {`${name}, your entry count is...`}
      </div>
      <div className="color-animation reverse-color-animation text f1 fw8">
        {entries}
      </div>
    </div>
  );
};

export default Rank;
