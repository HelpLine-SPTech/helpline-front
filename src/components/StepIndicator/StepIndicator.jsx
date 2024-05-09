import React from 'react'

function StepIndicator({currentStep = 0, steps = 2, activeColor = '#000', inactiveColor = '#FFF', className}) {
  return (
    <div className={`d-flex flex-center ${className}`} style={{gap: '16px'}}>
      {
        Array.from({ length: steps }).map((step, i) => (
          <div key={`form-step-${step}-${Math.random()}`}>
            <i className="bi bi-circle-fill" style={{color: i === currentStep ? activeColor : inactiveColor, fontSize: '12px', transition: '1s ease-in-out'}}></i>
          </div>
        ))
      }
    </div>
  )
}

export default StepIndicator