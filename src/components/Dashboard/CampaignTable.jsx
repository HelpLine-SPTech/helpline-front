import React from "react";
import { Link } from "react-router-dom";

const CampaignTable = ({ campaigns }) => {
  
  const getCampaignType = (type) => {
    switch(type) {
      case "MONETARY": return "Arrecadação de dinheiro"
      case "OBJECT_DONATION": return "Doação de objetos"
    }
  }

  const getTotalAmount = (donations) => {
    return donations.reduce((acc, val) => acc + val.amount, 0)
  }

  return (
  <div>
    {campaigns ? <table className="w-full bg-white pd-16 table">
      <thead>
        <tr className="text-left">
          <th className="pd-v-8 font-league text-left bold font-20" style={{width: '50%'}}>Título</th>
          <th className="pd-v-8 font-league bold font-20">Descrição</th>
          <th className="pd-v-8 font-league bold font-20">Tipo</th>
          <th className="pd-v-8 font-league bold font-20">Doações</th>
          <th className="pd-v-8 font-league bold font-20">Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((campaign) => (
          <tr key={campaign.id}>
            <td className="pd-v-8 font-league" style={{width: '50%'}}>{campaign.title}</td>
            <td className="pd-v-8 font-league">{campaign.description}</td>
            <td className="pd-v-8 font-league">{getCampaignType(campaign.type)}</td>
            <td className="pd-v-8 font-league">{campaign.type == "MONETARY" ? `R\$${getTotalAmount(campaign.donations) / 100}` : campaign.quantity}</td>
            <td className="pd-v-8 font-league"><i className="bi bi-arrow-right-short icon-g text-error cursor-pointer"></i></td>
          </tr>
        ))}
      </tbody>
    </table>
    : <span>Nenhuma vaga cadastrada</span>
    }
  </div>
)};

export default CampaignTable;