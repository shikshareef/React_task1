import { useState } from 'react';
import './index.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <h1 className='text-green-400 text-4xl text-center'>
        Responsive paragraph word counter
      </h1>
      <div className="flex justify-center items-center mt-[100px] ">
  <label className="text-xl">
    Text input: 
    <input 
      onKeyUp={(e)=>{
        let text = e.target.value
        setValue(text.length)
      }}
      className="border border-black ml-2"
      name="myInput"
      style={{ width: '400px', height: '300px' }}
    />
  </label>

  
</div>
<h1 className='text-red-400 text-center text-2xl'>The length of the input is {value}</h1>




    </>
  );
}

export default App;
