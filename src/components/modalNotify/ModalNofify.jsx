import React from 'react'
import './ModalNotify.css'
import Notify from './Notify'
import ImgFecharModal from '../../assets/imgFecharModal.png'

function ModalNotify() {
    return (
        <>
            <div className='Modal'>
                <div className='Superior'>
                    <div className='Left'>
                        <h2 className='Titulo'>Notificações</h2>
                    </div>
                    <div className='Right'>
                        <img src={ImgFecharModal} alt='Close' className='CloseIcon' onClick={() => console.log('Close modal')} />
                    </div>
                </div>
                <Notify />
            </div>
        </>
    )
}

export default ModalNotify