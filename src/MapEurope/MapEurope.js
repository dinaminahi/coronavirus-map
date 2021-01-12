import React, { useState, useEffect } from "react";
import { VectorMap } from "react-jvectormap";
import './MapEurope.css'

function MapEurope() {
  const [countriesStatistics, setCountriesStatistics] = useState([]);

  const fetchStatistics = async () => {
    const data = await fetch(`https://disease.sh/v3/covid-19/countries`);
    const statistics = await data.json();
    console.log(statistics);
    setCountriesStatistics(statistics);
  }

  const showCasesOnHover = async (event, tip, code) => {
    if (code !== 'XK' && code !== 'AX' && countriesStatistics.length !== 0) {
      const currCountryStatistic = countriesStatistics.find(country => country.countryInfo.iso2 === code);
      tip[0].innerHTML = `<div class="statistics">
      <h4 class="state-name">${currCountryStatistic.country}</h4>
      <p><strong>Cases:</strong> ${currCountryStatistic.cases}</p>
      <p><strong>Recovered:</strong> ${currCountryStatistic.recovered}</p>
      <p><strong>Deaths:</strong> ${currCountryStatistic.deaths}</p>
      <p><strong>Active:</strong> ${currCountryStatistic.active}</p>
    </div>`;
    }
  }

  useEffect(() => {
    fetchStatistics();
  }, []);

  return (
    <div style={{ width: '100%', height: '92vh' }}>
      <VectorMap map={'europe_mill'}
        backgroundColor="#40916c"
        containerStyle={{
          width: '100%',
          height: '100%'
        }}
        containerClassName="map"
        onRegionTipShow={showCasesOnHover}

      />
    </div>
  );
}

export default MapEurope;
