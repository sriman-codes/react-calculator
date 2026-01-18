import React,{useState} from 'react'
import {FaSun, FaMoon} from "react-icons/fa"

function Calcy() {

    const [item, setitem] = useState(true)

    

    return (
        <>
            <div className={
                item ? "w-full h-screen bg-gray-400 flex justify-center items-center "
                :
                "w-full h-screen bg-gray-950 flex justify-center items-center "
            }>

                <div className={item ? "w-[400px] h-[590px] bg-white rounded-2xl flex justify-center items-center flex-col gap-2 p-2" : "w-[400px] h-[590px] bg-black rounded-2xl flex justify-center items-center flex-col gap-2 p-2" }>

                    <div className={
                    item ? "w-full h-[18%] bg-white rounded-2xl text-black font-bold  "
                    :
                    "w-full h-[18%] bg-black rounded-2xl text-white font-bold  "
                    }>

                    <button className='px-2 py-2 bg-gray-600 text-white cursor-pointer rounded-2xl font-bold m-2'onClick={() => {setitem(!item)}}>
                        {
                        item ? <FaSun /> : <FaMoon />
                        }
                    </button>

                    </div>

                    <div className={item ? "w-full h-[82%] bg-gray-600 rounded-2xl grid grid-cols-4 place-items-center" :
                    "w-full h-[82%] bg-black rounded-2xl grid grid-cols-4 place-items-center"
                    }>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl text-green-600 font-bold text-2xl'
                        :
                        'bg-gray-950 w-[80px] h-[80px] rounded-2xl text-green-600 font-bold text-2xl'
                        }>AC</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl text-green-600 font-bold text-2xl'
                        :
                        'bg-gray-950 w-[80px] h-[80px] rounded-2xl text-green-600 font-bold text-2xl'
                        }>+/-</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl text-green-600 font-bold text-2xl'
                        :
                        'bg-gray-950 w-[80px] h-[80px] rounded-2xl text-green-600 font-bold text-2xl'
                        }>%</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-3xl text-amber-600'
                        :
                        'bg-gray-950 w-[80px] h-[80px] rounded-2xl font-bold text-3xl text-amber-700'
                        }>/</button>



                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>7</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>8</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>9</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-3xl text-amber-600'
                        :
                        'bg-gray-950 w-[80px] h-[80px] rounded-2xl font-bold text-3xl text-amber-700'
                        }>x</button>



                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>4</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>5</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>6</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-3xl text-amber-600'
                        :
                        'bg-gray-950 w-[80px] h-[80px] rounded-2xl font-bold text-3xl text-amber-700'
                        }>-</button>




                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>1</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>2</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>3</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-3xl text-amber-600'
                        :
                        'bg-gray-950 w-[80px] h-[80px] rounded-2xl font-bold text-3xl text-amber-700'
                        }>+</button>



                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>0</button>

                        <button className={
                        item ? 'bg-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        :
                        'bg-gray-950 text-white w-[80px] h-[80px] rounded-2xl font-bold text-2xl'
                        }>.</button>

                        <button className=' w-[180px] h-[80px] rounded-2xl col-span-2 font-bold text-5xl text-white bg-amber-700'>=</button>
                        
                        
                        


                    </div>
                </div>
            
            </div>
        </>
    )
}

export default Calcy