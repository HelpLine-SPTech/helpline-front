import React, { useState } from 'react'
import './PixButton.css'
import Button from '../Institucional/Button/Button'
import { useDispatch } from 'react-redux'
import { createDonation } from '../../features/pix/pix'
import { ToastContainer, toast } from "react-toastify";

function PixButton({ campaignId }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [valor, setValor] = useState('');
    const [pixData, setPixData] = useState(null);
    const dispatch = useDispatch();
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setValor('');
        setPixData(null);
    }
    

    const handleChange = (e) => {
        const input = e.target.value.replace(/\D/g, '');
        setValor(input);
    }

    const formatarMoeda = (valor) => {
        if (!valor) return 'R$ 0,00';
        const valorNumerico = (parseInt(valor) / 100).toFixed(2);
        return `R$ ${Number(valorNumerico).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    }

    const handleCopyPix = async () => {
        try {
            await navigator.clipboard.writeText(pixData.pix.code);
            toast.success('Código PIX copiado!');
        } catch (err) {
            console.error('Erro ao copiar:', err);
            toast.error('Erro ao copiar o código');
        }
    }

    const handleDonation = async () => {
        if (!valor || parseInt(valor) === 0) {
            toast.error('Por favor, insira um valor válido');
            return;
        }

        try {
            const response = await dispatch(createDonation({
                amount: parseInt(valor),
                campaignId: campaignId
            })).unwrap();
            
            setPixData(response);
        } catch (error) {
            console.error('Erro:', error);
            toast.error('Erro ao processar sua doação. Por favor, tente novamente.');
        }
    }

    const handleChangeValue = () => {
        setPixData(null); // Limpa o PIX atual para mostrar o input novamente
    }

    return (
        <>
            <Button 
                buttonText="Doar" 
                onClick={() => setIsModalOpen(true)}
            />

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>Faça sua doação via PIX</h2>
                        
                        {!pixData ? (
                            <>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        value={formatarMoeda(valor)}
                                        onChange={handleChange}
                                        className="input-money"
                                    />
                                </div>
                                <Button 
                                    buttonText="Confirmar" 
                                    onClick={handleDonation}
                                />
                            </>
                        ) : (
                            <div className="qr-code-container">
                                <img 
                                    src={pixData.pix.qrCode} 
                                    alt="QR Code PIX" 
                                    className="qr-code-image"
                                />
                                <div className="pix-code">
                                    <p>Código PIX:</p>
                                    <code>{pixData.pix.code}</code>
                                </div>
                                <div className="buttons-container">
                                    <Button 
                                        buttonText="Copiar" 
                                        onClick={handleCopyPix}
                                    />
                                    <Button 
                                        buttonText="Alterar valor" 
                                        onClick={handleChangeValue}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            <ToastContainer />
        </>
    )
}

export default PixButton