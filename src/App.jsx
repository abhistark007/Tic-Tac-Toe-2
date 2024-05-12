
import { useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Current Player is - X');
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn,setIsXTurn]=useState(true);


  const WinningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [0,3,6],
    [0,4,8],
    [2,4,6]
  ]



  function Square({ value }) {
    return <>{value}</>
  }

  function DidIWin(squares){
    
    for(let i=0;i<WinningPositions.length;i++){
      const [a,b,c]=WinningPositions[i];
      if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
        setStatus(`Winner is Player - ${isXTurn?"X":"O"}`);
        return true;
      }
    }
    return false;
  }


  function handleClick(getCurrentSquareIndex){
    
    if(DidIWin(squares) || squares[getCurrentSquareIndex]!=="")return;
    const cpySquares=[...squares];
    cpySquares[getCurrentSquareIndex]=isXTurn?"X":"O";
    setSquares(cpySquares);
    if(DidIWin(cpySquares))return;
    
    const val=!isXTurn;
    setStatus(`Current Player is - ${val?"X":"O"}`)
    setIsXTurn(prev=>!prev)
    
    if(DidIWin(cpySquares)===false && cpySquares.every(item=>item!=="")){
      setStatus("Draw");
      return;
    }
    


  }

  function handleReset(){
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setStatus(`Current Player is - X`)
  }


  return (
    <div className='flex w-full min-h-screen justify-center items-center flex-col gap-5'>
      <div onClick={handleReset} className='cursor-pointer text-xl bg-purple-600 text-white p-2 rounded-lg'>RESET</div>
      <div className='flex flex-col'>
        <div className='flex'>
          <div onClick={()=>handleClick(0)} className='cursor-pointer text-6xl flex justify-center items-center h-[100px] w-[100px] bg-gray-300 border-r-2 border-orange-600'><Square value={squares[0]} /></div>
          <div onClick={()=>handleClick(1)} className='cursor-pointer text-6xl flex justify-center items-center text-center h-[100px] w-[100px] bg-gray-300 border-r-2 border-orange-600'><Square value={squares[1]} /></div>
          <div onClick={()=>handleClick(2)} className='cursor-pointer text-6xl flex justify-center items-center text-center h-[100px] w-[100px] bg-gray-300'><Square value={squares[2]} /></div>
        </div>

        <div className='flex'>
          <div onClick={()=>handleClick(3)} className=' cursor-pointer text-6xl flex justify-center items-center text-center h-[100px] w-[100px] bg-gray-300 border-t-2 border-r-2 border-orange-600'><Square value={squares[3]}/></div>
          <div onClick={()=>handleClick(4)} className='cursor-pointer text-6xl flex justify-center items-center text-center h-[100px] w-[100px] bg-gray-300 border-t-2 border-r-2 border-orange-600'><Square value={squares[4]}/></div>
          <div onClick={()=>handleClick(5)} className='cursor-pointer text-6xl flex justify-center items-center text-center h-[100px] w-[100px] bg-gray-300 border-t-2 border-orange-600'><Square value={squares[5]}/></div>
        </div>

        <div className='flex'>
          <div onClick={()=>handleClick(6)} className='cursor-pointer text-6xl flex justify-center items-center text-center h-[100px] w-[100px] bg-gray-300 border-t-2 border-r-2 border-orange-600'><Square value={squares[6]}/></div>
          <div onClick={()=>handleClick(7)} className='cursor-pointer text-6xl flex justify-center items-center text-center h-[100px] w-[100px] bg-gray-300 border-t-2 border-r-2 border-orange-600'><Square value={squares[7]}/></div>
          <div onClick={()=>handleClick(8)} className='cursor-pointer text-6xl flex justify-center items-center text-center h-[100px] w-[100px] bg-gray-300 border-t-2 border-orange-600'><Square value={squares[8]}/></div>
        </div>
      </div>
      <div className='text-xl bg-purple-600 text-white p-2 rounded-lg'>{status}</div>
    </div>
  )
}

export default App
