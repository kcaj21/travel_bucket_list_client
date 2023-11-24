import { useState } from "react";

type FormValues = {
  countryName: string;
};

type FormProps = {
  onSubmit: (formValues: FormValues) => void;
};

export function Form({ onSubmit }: FormProps) {
  const [countryName, setCountryName] = useState("");

  // handleCountryNameChange
  const handleCountryNameChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setCountryName(event.currentTarget.value);
  };

  // handle submit

  const handleSubmit = () => {
    event?.preventDefault();
    onSubmit({ countryName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Country name</label>
      <input id="name" onChange={handleCountryNameChange}></input>
      <button type="submit">Submit</button>
    </form>
  );
}
