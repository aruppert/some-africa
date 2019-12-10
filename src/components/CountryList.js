import React from "react";
import CountryCard from "./CountryCard";

export default function CountryList() {
  const [countries, setCountries] = React.useState([]);

  async function getCountries() {
    const response = await fetch("http://localhost:4444/states");
    const newCountries = await response.json();
    setCountries(newCountries);
  }
  console.log(countries);
  React.useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      {countries.map(country => (
        <CountryCard
          key={country.id}
          map={country.map}
          name={country.name}
          lang={country.lang}
          flag={country.flag}
        />
      ))}
    </div>
  );
}
