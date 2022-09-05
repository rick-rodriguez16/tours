import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);    
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = id => {
    const filteredTours = tours.filter(tour => tour.id !== id);
    setTours(filteredTours);
  };

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  };

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
};

export default App;
