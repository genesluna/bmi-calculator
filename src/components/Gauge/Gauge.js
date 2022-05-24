import './Gauge.css';

export default function Gauge({ amount }) {

  const gaugeElement = document.querySelector(".gauge");

  function setGaugeValue(gauge, value) {
  
    if (value < 0 || value > 1) {
      return;
    }
    gauge.querySelector(".gauge__fill").style.transform = 
    `rotate(${ value / 2 }turn)`;
    gauge.querySelector(".gauge__cover").textContent = 
    `${Math.round( value * 100 )}%`;
  }

  setGaugeValue(gaugeElement, amount);

  return (
    <div className = "gauge"> 
      <div className = "gauge__body">
        <div className = "gauge__fill"></div>
        <div className = "gauge__cover"></div>
      </div>
    </div>
  );
}