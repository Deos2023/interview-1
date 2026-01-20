import React, { useState } from 'react'
interface demo{
    nm:string,
    con:number,
    em:string
}
const Contact = () => {
    const[data,setData]=useState<demo>({nm:"",con:0,em:""})
    const vu=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setData({...data,[name]:value});
    }
    const chk=()=>{
       let v=data.nm;
       let b=data.con;
       let c=data.em;
       console.log(v) 
        console.log(b) 
         console.log(c) 
    }
  return (
    <>
    <div className="conc"style={{width:"100vw",textAlign:'center',border:"2px solid black"}}>
    <div className="conc2" style={{border:"2px solid grey",width:"60%",padding:"20px" ,justifyContent:"center",margin:"auto"}}>
      <p>name</p><input type="text" name="nm" onChange={vu}/>
    <p>contact</p><input type="number" name="con" onChange={vu}/>
    <p>email</p><input type="text" name="em" onChange={vu}/>
    <button onClick={chk}style={{backgroundColor:"lightseagreen"}}>submit</button>
    </div>
    </div>
    
    </>
  )
}

export default Contact
