interface countInterface{
    correctCount : number,
    wrongCount : number
}

function Analytics({correctCount,wrongCount} : countInterface){
    return(
        <>
        {/* Calculate percentage and add design to the counts */}
        <div>
            {correctCount}
        </div>
        <div>
            {wrongCount}
        </div>

        </>
    )
}

export default Analytics