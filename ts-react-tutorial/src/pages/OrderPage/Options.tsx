import React from "react";

type OptionsProps = {
  name: string;
};

const Options = ({ name }: OptionsProps) => {
  return (
    <form>
      <input type="checkbox" id={`${name} option`} />
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
