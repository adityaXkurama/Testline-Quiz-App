import React from "react";
import { useSelector } from 'react-redux';
import { FaTrophy } from "react-icons/fa6";
import { Link } from "react-router-dom";


const StartQuiz = ({duration,title,topic,questions}) => {
    const response = useSelector(state=>state.response[0])
  return (
    <>
      <div className="">
        <div className="h-[150px] pt-20">
        <h2 className="text-black text-3xl text-center font-bold">Testline</h2>
        </div>
        <div className="flex justify-center h-[100vh] ">

            <div className="bg-black/80 w-[360px] h-[500px] rounded-xl md:w-[450px] ">
            <div className="h-[100px] flex justify-center text-2xl text-orange-300 pt-8 ">
                <p >Quiz </p>
                <p > <FaTrophy /></p>
            </div>
                <div className="h-[45%] border md:pl-5">
                    <div className="mt-10 text-lg pl-3 text-white">
                    <h3 className="pb-3">Duration : {duration} mins</h3>
                    <h3 className="pb-3">{title}</h3>
                    <h3 className="pb-2">Topic : {topic}</h3>
                    <p>Right answer : +4</p>
                    <p>Wrong answer : -1</p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-[120px] text-2xl">
                    <Link to='/question'><button className="border rounded-xl p-2 bg-teal-500 hover:ring-4">Start Quiz</button></Link>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default StartQuiz;
// <button className="border rounded-xl p-2 bg-teal-500 hover:ring-4">Start Quiz</button>