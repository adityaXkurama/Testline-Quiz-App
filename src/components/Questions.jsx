import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultPage from "./ResultPage";

const Questions = () => {
  const questions = useSelector((state) => state.response[0].questions);
  const [qno, setQno] = useState(0);
  const [clicked,setClicked]=useState(0)
  const [score,setScore]=useState(0)
  const [submit,setSubmit] = useState(0)
  let click=0;
  
  const BtnClick=()=>{
    setQno(prev=>prev+1)
    if(qno===9){
      setQno(0)
    }
    setClicked(0)
  }
  
  const optionClick=(is_correct)=>{
    click+=1
    if(is_correct){
      setScore(prev=>prev+4)
    }else{
      setScore(prev=>prev-1)
    }
    setClicked(1)
  }

  const submitClicked=()=>{
    setSubmit(1)
  }
  // console.log(clicked,qno);
  
  
  console.log(score);
  
  return (
    <>
      <div className="bg-black/80">
        <div className={`flex justify-center h-[100vh] ${submit===0? '':'hidden'}`}>
          <div className="bg-yellow-500 w-[400px] h-[700px] rounded-xl md:w-[700px] mt-10 md:mt-5 md:h-[700px]">
            <div className="h-[100px] pt-10">
              <h2 className="text-black text-3xl pl-4 font-bold">
                Question {qno + 1}
              </h2>
            </div>
             <div className="text-black px-3 mt-2 mb-10 md:text-2xl h-[15%]"> {/*question */}
                <h1 >{questions[qno].description}</h1>
            </div>
            <div className="text-black px-3 md:text-2xl h-[]  ">{/*options*/ }
            <ol className=""> {questions[qno].options.map((option,index)=>(
              
                  <li key={index} className="p-3 border md:w-[600px] my-4 rounded-xl w-[350px]  inline-block ml-3 hover:bg-green-200 bg-white hover:ring-black"
                  onClick={()=>optionClick(option.is_correct)}
                  >
                    <span>{index+1}. </span>{option.description}
                  </li>
                
                   ))}</ol>
              </div>
              <div className={` text-center my-6 py-2 ${clicked? '':'hidden'} `}>{/*button */}
                  {qno===9? <button onClick={submitClicked} className="bg-blue-300 p-2 rounded-xl hover:ring-4 md:text-2xl border-black">Submit</button>:<button onClick={BtnClick} className="bg-blue-300 p-2 rounded-xl hover:ring-4 md:text-2xl border-black">Next Question</button>}
              </div>
          </div>
        </div>
        <div className={`${submit===0? 'hidden':''} text-3xl`}>
          <ResultPage score={score}/>
        </div>
      </div>
    </>
  );
};

export default Questions;
{/* <div className="">{option.description}</div> */}
// <button onClick={BtnClick} className="bg-blue-300 p-2 rounded-xl hover:ring-4 md:text-2xl border-black">Next Question</button>