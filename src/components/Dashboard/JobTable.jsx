import React from "react";
import { Link } from "react-router-dom";

const JobTable = ({ jobs }) => (
  <div>
    {jobs ? <table className="w-full bg-white pd-16 table">
      <thead>
        <tr className="text-left">
          <th className="pd-v-8 font-league text-left bold font-20" style={{width: '50%'}}>Vaga</th>
          <th className="pd-v-8 font-league bold font-20">Qtd. Vagas</th>
          <th className="pd-v-8 font-league bold font-20">Qtd. Inscrições</th>
          <th className="pd-v-8 font-league bold font-20">Editar</th>
          <th className="pd-v-8 font-league bold font-20">Excluir</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job.id}>
            <td className="pd-v-8 font-league" style={{width: '50%'}}>{job.title}</td>
            <td className="pd-v-8 font-league">{job.amount}</td>
            <td className="pd-v-8 font-league">{job.subscriptions}</td>
            <td className="pd-v-8 font-league"><Link to={`/dashboard/jobs/${job.id}/edit`} style={{color: 'black'}}><i className="bi bi-pencil-square icon-g cursor-pointer"></i></Link></td>
            <td className="pd-v-8 font-league"><i className="bi bi-trash-fill icon-g text-error cursor-pointer"></i></td>
          </tr>
        ))}
      </tbody>
    </table>
    : <span>Nenhuma vaga cadastrada</span>
    }
  </div>
);

export default JobTable;