import React, { useEffect } from 'react'
import { useBlogcontext } from '../App_81'

const Alert_81 = () => {
  const { alert, showAlert } = useBlogcontext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });
  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
}

export default Alert_81
