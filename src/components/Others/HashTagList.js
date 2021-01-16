import React from "react";

const HashTagList = ({ values }) => {
  const getValues = () => {
    return values.map((value) => (
      <li key={value}>
        <p id={`hashtag-${value}`} aria-label={`Hashtag ${value}`}>
          #<span aria-labelledby={`hashtag-${value}`}>{value}</span>
        </p>
      </li>
    ));
  };
  return (
    <ul aria-label="Champion Roles" className="champion-roles">
      {getValues()}
    </ul>
  );
};

export default HashTagList;
