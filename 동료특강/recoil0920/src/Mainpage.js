import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Mainpage() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/shop')}>이동</button>
    </div>
  );
}