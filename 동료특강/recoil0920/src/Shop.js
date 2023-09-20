import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Shop() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>이동2</button>
    </div>
  );
}