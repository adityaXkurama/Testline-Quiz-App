import React from 'react'

const ResultPage = ({score}) => {
  return (
    <>
      <div className="">
        <div className="bg-black/80">
        <div className={`flex justify-center h-[100vh] pt-10`}>
          <div className="bg-yellow-600 w-[300px] h-[300px] mt-20 max-h-[700px] rounded-xl md:w-[500px]  md:mt-5 md:h-[400px] ">
            <h1 className='text-center  text-4xl mt-20'>Test Results</h1>
            <div className='text-center pt-10'>
                <span className=''>Score : </span>{score}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default ResultPage
