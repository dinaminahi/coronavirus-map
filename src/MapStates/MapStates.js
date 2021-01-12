import React, { useState, useEffect } from "react";
import { VectorMap } from "react-jvectormap";
import './MapStates.css'

function MapStates() {
  const [statesStatistics, setStatesStatistics] = useState([]);

  const fetchStatistics = async () => {
    const data = await fetch('https://disease.sh/v3/covid-19/states');
    const statistics = await data.json();
    console.log(statistics);
    setStatesStatistics(statistics);
  }

  const showCasesOnHover = (event, tip, code) => {
    const currStateStatistic = statesStatistics.find(state => state.state === tip[0].innerText);
    tip.html(`<div class="statistics">
      <h4 class="state-name">${currStateStatistic.state}</h4>
      <p><strong>Cases:</strong> ${currStateStatistic.cases}</p>
      <p><strong>Recovered:</strong> ${currStateStatistic.recovered}</p>
      <p><strong>Deaths:</strong> ${currStateStatistic.deaths}</p>
      <p><strong>Active:</strong> ${currStateStatistic.active}</p>
    </div>`);
  }

  useEffect(() => {
    fetchStatistics();
  }, []);

  return (
    <div style={{ width: '100%', height: '92vh' }}>
      <VectorMap map={'us_aea'}
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

export default MapStates;
