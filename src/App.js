import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import Greetings from './components/Greetings';
import Random from './components/Random'
import BoxColor from './components/BoxColor'

function App() {
  return (
    <div>
    {/* Iteration 1 */}
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      {/* Iteration 2 */}
      <Greetings lang="de">Klaus</Greetings>
      <Greetings lang="es">Pablo</Greetings>
      {/* Iteration 3 */}
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      {/* Iteration 4 */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      {/* Iteration 5 */}
      {/* Iteration 8 */}
      <LikeButton/>
    </div>
  );
}

export default App;

