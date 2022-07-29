import react from 'react';

function Image(props){
const {hdurl} = props

return(
    <>
    <img className = 'img' src= {hdurl}></img>
    </>
)
}

export default Image