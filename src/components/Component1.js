import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Component1 = () => {
  const [signalements, setSignalements] = useState([
    { hour: '00h', count: 12 },
    { hour: '01h', count: 15 },
    { hour: '02h', count: 10 },
    { hour: '03h', count: 18 },
    { hour: '04h', count: 20 },
    { hour: '05h', count: 28 },
    { hour: '06h', count: 22 },
    { hour: '07h', count: 35 },
    { hour: '08h', count: 42 },
    { hour: '09h', count: 38 },
    { hour: '10h', count: 30 },
    { hour: '11h', count: 25 },
    { hour: '12h', count: 28 },
    { hour: '13h', count: 35 },
    { hour: '14h', count: 40 },
    { hour: '15h', count: 45 },
    { hour: '16h', count: 48 },
    { hour: '17h', count: 52 },
    { hour: '18h', count: 50 },
    { hour: '19h', count: 45 },
    { hour: '20h', count: 40 },
    { hour: '21h', count: 32 },
    { hour: '22h', count: 28 },
    { hour: '23h', count: 20 }
  ]);

  return (
    <div style={{ 
      position: 'absolute', 
      top: '180px', 
      left: '649px', 
      width: '418.49px', 
      height: '137.27px', 
      borderRadius: 'mixed', 
      padding: '20px',
    }}>
      <h2>معدل الاخطارات اليومي</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={signalements} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#FF2F2F" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Component1;
