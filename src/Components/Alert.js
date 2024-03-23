import React from 'react'

export default function Alert(props) {
    const captitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice();
    }
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.altert}</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

  )
}
