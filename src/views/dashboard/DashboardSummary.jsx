import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import { DashboardSideBar } from '../../components'
import Calendar from 'react-calendar'

import './calendar.css'
import ong from '../../assets/ong.png'
import ReactApexChart from 'react-apexcharts'
import { getSummary } from '../../features/dashboard/dashboardSlice'
import dayjs from 'dayjs'

function DashboardSummary() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const [donations, setDonations] = useState(0);
  const [campaings, setCampaings] = useState(0);
  const [volunteers, setVolunteers] = useState(0);

  const [chartData, setChartData] = useState([]);

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

  const get = async () => {
    var { payload } = await dispatch(getSummary())
    if(payload !== undefined) {
      console.log(payload)
      setCampaings(payload.summary.campaigns)
      setVolunteers(payload.summary.volunteers)
      setDonations(payload.summary.donations)

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
  }

  useEffect(() => {
    get();
  }, [user])

  return (
    <div className='bg-green d-flex'>
      <DashboardSideBar />
      <div className='dash-content d-flex'>
        <div className='m-32' style={{flex: 1}}>
          <div className='text-green1 font-league bold font-36 mb-32'>
            Olá, {user.name}!
          </div>
          <h2 className='bg-green2 round font-league text-center pd-v-8 mb-32'>No último mês</h2>
          <div className='d-flex justify-space-around mb-32'>
            <div>
              <h3 className='font-league medium text-center font-24 mb-16 text-green1'>Doações</h3>
              <div className='w-m h-m border-20 rounder p-relative' style={{borderColor: '#5F8D4E'}}>
                <span className='font-league bold font-40 absolute-center text-green1'>{donations}</span>
              </div>
            </div>
            <div>
              <h3 className='font-league medium text-center font-24 mb-16 text-green1'>Campanhas</h3>
              <div className='w-m h-m border-20 rounder p-relative' style={{borderColor: '#285430'}}>
                <span className='font-league bold font-40 absolute-center text-green1'>{campaings}</span>
              </div>
            </div>
            <div>
              <h3 className='font-league medium text-center font-24 mb-16 text-green1'>Voluntários</h3>
              <div className='w-m h-m border-20 rounder p-relative' style={{borderColor: '#A4BE7B'}}>
                <span className='font-league bold font-40 absolute-center text-green1'>{volunteers}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className='bg-green2 round font-league text-center pd-v-8 mb-32'>Doações</h2>
            <ReactApexChart 
              series={chartData}
              options={chartConfig.options}
              height={360}
              type='area'
            />
          </div>
        </div>
        <div className='bg-green2 pd-32' style={{borderRadius: '0 40px 40px 0'}}>
          <div className="d-flex justify-end">
            <img 
              src={ong} 
              className='rounder border-4 border-green'
              alt={`Profile`} 
              width={65} 
              height={65}/>
          </div>
          <h2 className='text-green1 font-league bold font-32 mb-32'>Eventos</h2>
          <Calendar
            prev2Label={null}
            prevLabel={<i className="bi bi-chevron-left icon-g m-4"></i>}
            nextLabel={<i className="bi bi-chevron-right icon-g m-4"></i>}
            next2Label={null}
            defaultView='month'/>
        </div>
      </div> 
    </div>
  )
}

export default DashboardSummary