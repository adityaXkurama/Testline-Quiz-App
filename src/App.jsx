import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import StartQuiz from './components/StartQuiz';
import Questions from './components/Questions';



function App() {
const [question,setQuestion]=useState('')


const response=useSelector(state=>state.response[0])
const questions=useSelector(state=>state.response[0].questions)
console.log(response);
console.log(questions);


  return (
    <>
      <StartQuiz duration={response.duration} title={response.title} topic={response.topic} questions={response.questions[0]}/>
      {/* <Questions/> */}

    </>
  )
}

export default App
