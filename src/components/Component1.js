import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Component1 = () => {
  const [signalements, setSignalements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/signalement/")
      .then(response => {
        setSignalements(response.data.map(signalement => {
          return {
            hour: signalement.date, // remplacez "hour" par le nom de la propriété correspondant à l'heure dans votre modèle de données
            count: signalement.nombre // remplacez "count" par le nom de la propriété correspondant au nombre de signalements dans votre modèle de données
          };
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
      <h2 style={{ 
        fontFamily: 'Montserrat', 
        fontWeight: 'bold',
        width: '133px', 
        height: '16px', 
        fontSize: '13px', 
        color: '#ED254E',
        textAlign: 'center', 
      }}>معدل الاخطارات اليومي</h2>

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