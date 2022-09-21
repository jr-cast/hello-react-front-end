import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchMessageSuccess } from '../redux/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.greeting);

  const config = {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Content-Type': 'application/json',
    },
  };

  async function fetchData() {
    await axios.get('http://localhost:3000/api/message', config).then((res) => {
      dispatch(fetchMessageSuccess(res.data.message));
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <code>{msg}</code>
  );
};

export default Greeting;
