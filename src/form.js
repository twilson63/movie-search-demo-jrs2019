import React, { useState } from 'react'
import { map, merge } from 'ramda'

export default Form

function Form({onSearch, title}) {
  const [criteria, setCriteria] =  useState('')
  const [formState, setValidState] = useState({ empty: true, valid: true})
  
  
  function handleChange(e) {
    setCriteria(e.target.value)
  }

  function validate() {
    if (criteria.length > 0) {
      if (criteria.toLowerCase() === 'cloverfield') {
        setValidState(merge(formState, {valid: false, empty: false}))
      } else {
        setValidState(merge(formState, {valid: true, empty: false}))
         
      }

    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSearch(criteria)
  }

  return (
  <form className="form" onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Name:</label>
      <div className="control">
        <input type="text" 
          className={`input ${formState.valid === false ? 'is-danger' : ''}`} value={criteria} 
          onChange={handleChange}
          onBlur={validate}
        />
      </div>
      <div className="help">
        Please enter a name of a movie
      </div>
    </div>
    <div className="field">
      <button disabled={formState.empty || !formState.valid} className="button is-primary" type="submit">Search</button>
    </div>
  </form>


  )
}
