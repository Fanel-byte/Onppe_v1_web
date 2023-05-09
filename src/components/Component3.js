import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Component3 = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/signalement/")
      .then(response => setNews(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>أخبار معالجة</h2>
      {news.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <button>عرض التفاصيل</button>
        </div>
      ))}
      <button>رؤية كل الاحصائيات</button>
    </div>
  );
};

export default Component3;
