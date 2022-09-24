import Weather from "./Weather";

export default function Country({ country }) {
  return (
    <div className="countryinfo">
      <h1>{country.flag} {country.name.official}</h1>
      <h2>Misc info</h2>
      <table>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{country.population}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area}km²</td>
          </tr>
        </tbody>
      </table>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <picture style={{maxWidth: "250px"}}>
        <source type="image/svg+xml" srcSet={country.flags.svg} />
        <img alt={`Flag of ${country.name.official}`} src={country.flags.png} style={{maxWidth: "250px"}} />
      </picture>
      <Weather city={country.capital} />
    </div>
  );
}
