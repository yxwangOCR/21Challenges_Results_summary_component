import './App.css'

function App() {
  return (
    <main className='min-w-[350px] min-h-screen'>
      <header className='flex flex-col justify-center items-center text-center bg-gradient-to-b from-slateBlue to-royalBlue rounded-b-3xl gap-4 py-8 px-9'>
        <h1 className='text-lightLavender'>Your Result</h1>
        <div className='flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-violetBlue to-slateBlue w-40 h-40 gap-2'>
          <span className='text-white text-6xl'>76</span>
          <span className='text-lightLavender'>of 100</span>
        </div>
        <h2 className='text-white text-3xl'>Great</h2>
        <p className='text-lightLavender'>You scored higher than 65% of the people who have taken these tests.</p>
      </header>

      <section className='bg-red'>
        <h3>Summary</h3>
        <ul>
          <li className='flex justify-between'><img src="" alt="" /> <h4>Reaction</h4> <div><strong>80<span> / 100</span></strong></div></li>
          <li className='flex justify-between'><img src="" alt="" /> <h4>Reaction</h4> <div><strong>80<span> / 100</span></strong></div></li>
          <li className='flex justify-between'><img src="" alt="" /> <h4>Reaction</h4> <div><strong>80<span> / 100</span></strong></div></li>
          <li className='flex justify-between'><img src="" alt="" /> <h4>Reaction</h4> <div><strong>80<span> / 100</span></strong></div></li>
        </ul>
        <button>Continue</button>
      </section>
    </main>

  )
}

export default App
