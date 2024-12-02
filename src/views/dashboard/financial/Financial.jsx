import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DashboardSideBar } from "../../../components";
import fotoDoador from "../../../assets/voluntario.png";
import fotoDoador2 from "../../../assets/mulher_sorrindo.jpg";
import { selectUser } from '../../../features/user/userSlice'
import fotoOng from "../../../assets/ong.png";
import ReactApexChart from "react-apexcharts";
import { useSelector } from 'react-redux';
import "./Financial.css";

import { getReport, getSummary } from '../../../features/dashboard/dashboardSlice'
import dayjs from 'dayjs'


import PixButton from '../../../components/PixButton/PixButton'

function Financial() {
  const dispatch = useDispatch()
  const [chartData, setChartData] = useState([]);
  const [donationAmount, setDonationAmount] = useState(0);
  const user = useSelector(selectUser)

  console.log(user);
  


  const [chartConfig, setChartConfig] = useState({     
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
        categories: []
      },
      yaxis: {
        labels: {
          formatter: (value) => `R$${value.toFixed(2)}`
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  });

  const get = useCallback(async () => {
    var { payload } = await dispatch(getSummary())
    let totalAmountDonations = 0;
    for (const item of payload.summary.graphicData) {
      const value = item.amount / 100;
      totalAmountDonations += value;
    }
    const formattedTotal = totalAmountDonations.toFixed(2).replace('.', ',');
    setDonationAmount(formattedTotal)
    if(payload !== undefined) {
      setChartData([{
        name: 'Valor total de doações',
        data: payload.summary.graphicData.map(x => `${x.amount / 100}`)
      }])

      setChartConfig(chartConfig => ({
        options: {
          ...chartConfig.options,
          xaxis: {
            type: 'datetime',
            categories: payload.summary.graphicData.map(x => dayjs(x.date).format('MMM D'))
          }
        }
      }))
    }
  }, [dispatch])

  const generateReport = async () => {
      var { payload } = await dispatch(getReport())
      if(payload !== undefined){
        const fileURL = URL.createObjectURL(payload.data);
        const btnGenerate = document.createElement('a')
        btnGenerate.download = encodeURIComponent(getFileNameFromContentDisposition(payload.headers['content-disposition']))
        btnGenerate.href = fileURL;
        btnGenerate.click();
        URL.revokeObjectURL(fileURL);
      }
  }

  function getFileNameFromContentDisposition(contentDisposition) {
    var matches = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    if (matches != null && matches[1]) {
        // Remove surrounding quotes if present
        var fileName = matches[1].replace(/['"]/g, '');
        return fileName;
    }
    return null;
}

  

  useEffect(() => {
    get();
  },[get])

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
                <span className="valor-kpi">R${donationAmount}</span>
                <span className="descricao-kpi">Receita atual</span>
              </div>
              <i className="icon-xlg bi bi-piggy-bank-fill text-green1"></i>
            </div>
            <div className="kpi">
              <div className="valores">
                <span className="valor-kpi">R$ 1535,50</span>
                <span className="descricao-kpi">Meta Estabelecida</span>
              </div>
              <i className="icon-xlg f bi bi-bullseye text-green1"></i>
            </div>
            <div className="grafico-label font-league bold font-24 mb-32">
              Valores das Doações Recebidas(Últimos Meses)
            </div>
            <div className="font-league text-green1 bold text-right mb-32" style={{textDecoration: "underline"}}>
            
            <span className='bi bi-filetype-csv'>
              <button className='btn-gerar-csv' onClick={generateReport}>Exportar .CSV</button>
              </span>
            </div>
            <ReactApexChart 
              series={chartData}
              options={chartConfig.options}
              height={360}
              type='area'
            />
          </div>
        </div>
        <div className="aba-doadores">
        <div className="d-flex justify-end">
        <img src={user.profilePicUrl} alt="" className="moldura-perfil" />
          </div>
          <label className="font-league text-green1 bold font-24">Doadores Recentes</label>
          <div className="doador">
            <img src={fotoDoador} alt="" className="moldura-perfil" />
            <div className="valores">
              <span className="nome-doador">Renan Silva dos Anjos</span>
              <span className="tipo-doador">Voluntário</span>
            </div>
          </div>
          <div className="doador">
            <img src="https://static.vecteezy.com/ti/fotos-gratis/t1/38703591-ai-gerado-estudio-tiro-do-lindo-sorrindo-jovem-mulher-olhando-as-camera-foto.jpg" alt="" className="moldura-perfil" />
            <div className="valores">
              <span className="nome-doador">Paula Rocha</span>
              <span className="tipo-doador">Voluntário</span>
              <PixButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Financial;
