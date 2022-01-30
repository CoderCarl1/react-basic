import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toISOString());
    }, 1);
  }, []);

  return (
    <div className="App">
      <header className="App-header">Time is : {time}</header>
    </div>
  );
}

export default App;
