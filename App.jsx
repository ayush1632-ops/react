import { useState, React, useEffect } from 'react'
import './App.css'
import copyIcon from "./copyicon.svg";




function App() {

  let [password, setpassword] = useState("")
  let [slideval, setslideval] = useState(10)
  let [checknum, setchecknum] = useState(false)
  let [checkchar, setcheckchar] = useState(false)



  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let numchar = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charschar = `!@#$%^&*()_{}[]/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  let allchar = `1234567890!@#$%^&*()_{}[]/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;


  let randomChar = "";
  console.log({ password });



  function random() {
    randomChar = ""

    if (checknum === false && checkchar === false) {
      for (let i = 0; i < slideval; i++) {
        randomChar += char[Math.floor(Math.random() * char.length)];
      }
      setpassword(randomChar);
      console.log("inside1", randomChar);

    }

    else if (checknum === true && checkchar === false) {

      for (let i = 0; i < slideval; i++) {
        randomChar += numchar[Math.floor(Math.random() * numchar.length)];
      }
      setpassword(randomChar);
      console.log("inside2", randomChar);
    }


    else if (checknum === false && checkchar === true) {

      for (let i = 0; i < slideval; i++) {
        randomChar += charschar[Math.floor(Math.random() * charschar.length)];
      }
      setpassword(randomChar);
      console.log("inside3", randomChar);
    }


    else if (checknum === true && checkchar === true) {

      for (let i = 0; i < slideval; i++) {
        randomChar += allchar[Math.floor(Math.random() * allchar.length)];
      }
      setpassword(randomChar);
      console.log("inside4", randomChar);
    }


  }




  function numcheck() {
    setchecknum(prev => !prev)
    console.log("num clickedd", checknum)
  }
  function charcheck() {
    setcheckchar(prev => !prev)
    console.log("charac clickedd", checkchar)
  }


  function copyPassword() {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  }


  // console.log(typeof(slideval)) //gives number
  // console.log(typeof({slideval})) //gives an object








  return (
    <>
      <div className='w-full h-screen  bg-gray-700  flex flex-col  justify-center items-center font-oswald'>Hello, this is a password generator

        <div className='w-100 h-fit mt-5  bg-gray-400 rounded-2xl p-2 ' >
          <button className='bg-amber-200 rounded-3xl p-2  flex flex-row mb-1 ml-auto' onClick={copyPassword}>
            <img src={copyIcon} alt="copy" className="w-5 h-5" />
          </button>
          


          <div className='flex justify-center items-center'>
            <input placeholder='password...' className='border-2 border-black rounded-3xl rounded-r-xl   pl-4  h-11 text-red-700 text-2xl flex justify-center items-center' value={password} onChange={(e) => setpassword(e.target.value)}  />
            
            <button className='border-2 rounded-3xl  w-[22%] p-2 ml-2 rounded-l-xl bg-indigo-400' onClick={random}>Generate</button>
          </div>



          <div className='flex flex-row justify-center items-center m-3 p-1 bg-gray-500 rounded-3xl bg-white/50 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg'>
            <input type="range" min="5" max="20" defaultValue={slideval} className="w-[70%] h-2 bg-gray-200 rounded-lg cursor-pointer" value={slideval} onChange={(e) => setslideval(e.target.value)} ></input>
            <div className='w-fit px-1 ml-5  rounded-3xl  bg-[#e0e0e0] shadow-[inset_6px_6px_5px_#b8b8b8,_inset_-6px_-6px_3px_#ffffff]' >{slideval} char</div>
          </div>


          <label className="flex items-center gap-2" onClick={numcheck} >
            <input type="checkbox" className="w-5 h-5 accent-blue-500" />
            Numbers
          </label>
          <label className="flex items-center gap-2" onClick={charcheck}>
            <input type="checkbox" className="w-5 h-5 accent-blue-500" />
            Characters
          </label>

          
          





        </div>



      </div>


    </>
  )
}

export default App
