import React from 'react';

const CampaignCard = ({ campaign }) => {
    const getBadgeType = (type) => {
        switch(type) {
            case "MONETARY": return "Arrecadação monetária"
            case "TOY": return "Doação de brinquedos"
            case "CLOTHING": return "Doação de roupas"
            case "FOOD": return "Doação de alimentos"
        }
    }

    return (
        <div style={styles.card}>
            <h2 style={styles.title}>{campaign.title}</h2>
            <p style={styles.description}>{campaign.description || "Sem descrição disponível"}</p>
            <p style={styles.badge}><strong>Categoria:</strong> {getBadgeType(campaign.badgeType)}</p>
            <p style={styles.donations}><strong>Doações:</strong> {campaign.donations.length} recebidas</p>
            <p style={{ display: "flex", justifyContent: "flex-end", margin: 0 }}>
                <button className='button-primary' style={styles.button}>Doar</button>
            </p>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "100%",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "18px",
        marginBottom: "8px",
    },
    description: {
        color: "#555",
        marginBottom: "8px",
    },
    type: {
        marginBottom: "8px",
    },
    badge: {
        marginBottom: "8px",
    },
    goal: {
        marginBottom: "8px",
        fontWeight: "bold",
    },
    donations: {
        marginBottom: "0",
    },
    button: {
        padding: "5px 15px"
    }
};

export default CampaignCard;
