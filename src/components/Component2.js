import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Component2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:4000/signalement/")
      .then(response => setCount(response.data.count))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{position: "relative"}}>
      <h3 style={{textAlign: "right"}}>احصائيات أخر 24 ساعة</h3>
      <div style={{position: "absolute", top: "233.51px", left: "763.53px"}}>
        <svg width="53.17" height="55.46" viewBox="0 0 53.17 55.46">
          <circle cx="26.59" cy="26.59" r="25.59" fill="#F28123" />
          <path d="M33.35,36.06,25.7,28.41a.89.89,0,0,0-1.26,0l-1.05,1a.88.88,0,0,0,0,1.26l4.4,4.4a.89.89,0,0,0,1.26,0l4.4-4.4a.88.88,0,0,0,0-1.26Z" fill="#fff"/>
        </svg>
      </div>
      <p style={{textAlign: "right", color: "#F28123", fontWeight: "bold", fontSize: "32px", marginTop: "100px"}}>{count}</p>
      <p style={{textAlign: "right", color: "#F28123", fontSize: "16px", fontFamily: "Montserrat Medium", marginTop: "20px"}}>أخبار غير معالجة</p>
    </div>
  );
};

export default Component2;
