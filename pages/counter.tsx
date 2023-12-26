
import { useEffect, useState } from 'react';

export default function Counter() {
  const CountdownTimer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(
    calculateTimeRemaining()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining(): number {
    const targetDate = new Date('2024-02-25T14:00:00').getTime();
    const now = new Date().getTime();
    return Math.max(targetDate - now, 0);
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
<div className="text-2xl w-full mt-4 font-semibold text-gray-800 bg-gradient-to-r from-cyan-300 to-purple-500 transition duration-1000 p-4 rounded-lg shadow-lg">
  <h1 className="text-4xl sm:text-md md:text-4xl py-4 text-center pt-10 text-white font-medium ">🍀 Янчик 👫 Хуанчик 🍀</h1>
  <h2 className='text-7xl sm:text-md md:text-md text-black text-center p-10 font-bold pb-10'>{days}д : {hours}ч : {minutes}м : {seconds}с</h2>
  <h3 className='text-center text-blue-800 font-extralight italic'>Улица Железнодорожная, 7, Калининград,</h3>
  <h3 className='text-center text-blue-800 pb-10 font-extralight italic'>Калининградская область, Россия</h3>
</div>
  );
};

    return (
    <div className="flex items-center justify-center mt-40">
      <CountdownTimer />
    </div>
  )
}