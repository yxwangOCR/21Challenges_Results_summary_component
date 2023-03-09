import './App.css';
import reaction from "./assets/images/icon-reaction.svg";
import memory from "./assets/images/icon-memory.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

function App() {
  return (
    <main className='flex flex-col drop-shadow-2xl bg-white sm:flex-row sm:w-[550px] sm:h-[380px] sm:rounded-3xl' >
      <header className='flex flex-col justify-center items-center text-center bg-gradient-to-b from-slateBlue to-royalBlue rounded-b-3xl gap-4 py-8 px-9 sm:rounded-3xl sm:w-[550px] sm:h-[380px]'>
        <h1 className='text-lightLavender'>Your Result</h1>
        <div className='flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-violetBlue to-slateBlue w-40 h-40 gap-2'>
          <span className='text-white text-6xl'>76</span>
          <span className='text-lightLavender'>of 100</span>
        </div>
        <h2 className='text-white text-3xl sm:text-2xl'>Great</h2>
        <p className='text-lightLavender sm:text-sm'>You scored higher than 65% of the people who have taken these tests.</p>
      </header>

      <section className='w-full p-8 flex flex-col justify-around gap-6 sm:w-[550px] sm:h-[380px]'>
        <h3>Summary</h3>
        <ul className='flex flex-col gap-4 sm:gap-2'>
          <li className='flex justify-between py-5 px-3 rounded-lg bg-bgRed sm:py-2'>
            <div className='flex gap-2 items-center'>
              <img src={reaction} alt="" />
              <h4 className='text-red sm:text-base'>Reaction</h4>
            </div>
            <div>
              <strong className='sm:text-base'>80 <span className='text-grayBlue opacity-50'> / 100</span></strong>
            </div>
          </li>
          <li className='flex justify-between py-5 px-3 rounded-lg bg-bgYellow sm:py-2'>
            <div className='flex gap-2 items-center'>
              <img src={memory} alt="" />
              <h4 className='text-yellow sm:text-base'>Memory</h4>
            </div>
            <div>
              <strong className='sm:text-base'>92 <span className='text-grayBlue opacity-50'> / 100</span></strong>
            </div>
          </li>
          <li className='flex justify-between py-5 px-3 rounded-lg bg-bgGreen sm:py-2'>
            <div className='flex gap-2 items-center'>
              <img src={verbal} alt="" />
              <h4 className='text-green sm:text-base'>Verbal</h4>
            </div>
            <div>
              <strong className='sm:text-base'>61 <span className='text-grayBlue opacity-50'> / 100</span></strong>
            </div>
          </li>
          <li className='flex justify-between py-5 px-3 rounded-lg bg-bgBlue sm:py-2'>
            <div className='flex gap-2 items-center'>
              <img src={visual} alt="" />
              <h4 className='text-blue sm:text-base'>Visual</h4>
            </div>
            <div>
              <strong className='sm:text-base'>72 <span className='text-grayBlue opacity-50'> / 100</span></strong>
            </div>
          </li>
        </ul>
        <button className='bg-grayBlue p-4 text-white rounded-3xl text-xl hover:bg-gradient-to-b from-slateBlue to-royalBlue hover:cursor-pointer sm:p-2 sm:text-sm'>Continue</button>
      </section>
    </main>

  )
}

export default App
