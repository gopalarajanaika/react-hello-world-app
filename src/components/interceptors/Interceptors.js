import { useState } from "react";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import './Interceptors.scss';

const Interceptors = (props) => {
  const [loading, setLoading] = useState(false)

  axios.interceptors.request.use((request) => {
    setLoading(true);
    return request;
  })

  axios.interceptors.response.use((response) => {
    setLoading(false);
    return response;
  }, (error) => {
    setLoading(false);
    return error;
  })

  return loading && <div className="spinner-container"><CircularProgress /></div>
}

export default Interceptors;