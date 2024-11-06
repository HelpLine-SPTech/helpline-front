import React from 'react'

function SearchJobInput({ value, onChange, onSearch }) {
  return (
    <form 
      className='d-flex flex-center pd-h-16 flex-1'
      style={{backgroundColor: '#F2F6EF', borderRadius: '10px'}}>
      <input
        className='font-20 flex-1 pd-v-16 no-outline'
        style={{background: 'none'}}
        value={value || ''}
        onChange={onChange}
        type="text"
        placeholder='Pesquisar...' />
      <button type="submit" className='cursor-pointer' onClick={onSearch}>
        <i className="bi bi-search icon-xg" style={{height: '30px'}}></i>
      </button>
    </form>
  )
}

export default SearchJobInput