import React from 'react'; // Make sure React is imported
import TrafficLight from './components/TrafficLight';

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <TrafficLight />
    </div>
  );
};

export default Home;