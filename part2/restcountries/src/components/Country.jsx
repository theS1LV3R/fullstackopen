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
      <picture style={{maxWidth: "100%"}}>
        <source type="image/svg+xml" srcset={country.flags.svg} />
        <img alt={`Flag of ${country.name.official}`} src={country.flags.png} style={{maxWidth: "100%"}} />
      </picture>
    </div>
  );
}
