import React from "react";


export default function ProgressBar(props) {
  const { bgcolor, completed } = props;
  const containerStyles = {
    height: 20,
    width: '80%',
    backgroundColor: "#dac29b;",
    borderRadius: 50,
    margin: '3em 0em 0em',
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
    fontFamily: "'Inter', sans-serif"
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem'
  }

  return (
    <div className="container" style={containerStyles}>
      <div className="filler" style={fillerStyles}>
        <span className="label" style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};
