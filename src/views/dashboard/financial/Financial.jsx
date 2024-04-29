import React, {useState} from "react";
import { DashboardSideBar } from "../../../components";
import fotoDoador from "../../../assets/doador.jpg";
import fotoDoador2 from "../../../assets/doador2.jpg";
import ReactApexChart from "react-apexcharts";
import "./Financial.css";

function Financial() {
  
const [chartConfig, setChartConfig] = useState({
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  options: {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  },
});
  return (
    <div className="bg-green d-flex">
      <DashboardSideBar />
      <div className="dash-content d-flex">
        <div className="m-32" style={{ flex: 1 }}>
          <div className="text-green1 font-league bold mb-32 font-36">
            Financeiro
          </div>
          <div className="kpis">
            <div className="kpi">
              <div className="valores">
                <span className="valor-kpi">R$ 1535,50</span>
                <span className="descricao-kpi">Receita atual</span>
              </div>
              <i className="icon-xlg bi bi-piggy-bank-fill text-green1"></i>
            </div>
            <div className="kpi">
              <div className="valores">
                <span className="valor-kpi">R$ 1535,50</span>
                <span className="descricao-kpi">Receita atual</span>
              </div>
              <i className="icon-xlg f bi bi-bullseye text-green1"></i>
            </div>
            <div className="grafico-label font-league bold font-24 mb-32">
              [GRÁFICO]
            </div>
            <div className="font-league text-green1 bold text-right mb-32" style={{textDecoration: "underline"}}>
            <button class="bi bi-filetype-csv text-green1"></button>
              Exportar .CSV
            </div>
            <ReactApexChart options={chartConfig.options} series={chartConfig.series} height={420}/>
          </div>
        </div>
        <div className="aba-doadores">
        <div className="d-flex justify-end">
        <img src={fotoDoador} alt="" className="foto-doador" />
          </div>
          <label className="font-league text-green1 bold font-24">Doadores Recentes</label>
          <div className="doador">
            <img src={fotoDoador} alt="" className="foto-doador" />
            <div className="valores">
              <span className="nome-doador">Renan Silva dos Anjos</span>
              <span className="tipo-doador">Voluntário</span>
              {/*revisar o nome dessa classe*/}
            </div>
          </div>
          <div className="doador">
            <img src={fotoDoador2} alt="" className="foto-doador" />
            <div className="valores">
              <span className="nome-doador">Paula Rocha</span>
              <span className="tipo-doador">Voluntário</span>{" "}
              {/*revisar o nome dessa classe*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Financial;
