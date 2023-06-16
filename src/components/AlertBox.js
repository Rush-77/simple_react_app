import React from 'react'

export default function AlertBox(props) {
  const Capitalized = (text) =>{
    let lower = text.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{Capitalized(props.alert.type)}</strong> : {props.alert.msg}
  </div>

  )
}
