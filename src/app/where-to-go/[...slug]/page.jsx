'use client'

const page = ({params}) => {
const rslt=params.slug;
 
    if(rslt.length===2)
    {
      return(
        <>
      <h1>{rslt[0]}</h1>
      <h2>{rslt[1]}</h2></>
    )
    }
    else if(rslt.length===1)
    {
      return(
      <h1>{rslt[0]}</h1>
    )
    }
  
}

export default page