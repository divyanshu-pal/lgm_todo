import React, { useState } from 'react'

export default function Header() {

  const [data,setdata] = useState("");
  const [ldata,setldata]= useState([]);



  function adddata(){

           if(data === '')
           {
             alert("please Add Some To Do");
           }
           else{
             setldata((ldata)=>{
              const updatelist = [...ldata,data];
              setdata('');
              return updatelist;
              })
            }
              
  }
  
  function removeData(i){
    const updatelistData = ldata.filter((data,id)=>{
      return i!=id;
    })
    setldata(updatelistData);
  }
  return (
    <div className='container'>
    <h1>Lets Grow More Task1 To Do App</h1>
        <div className='header'>My list</div>
            <div>
               
                    <input type="text" class="form-control"  placeholder="Enter the todo" required value={data} onChange={(e)=>setdata(e.target.value)}/>
                    <button onClick={adddata}>ADD</button>
               
                {
                  ldata!==[] && ldata!=='' && ldata.map((d,i)=>{
                    return(
                      <>
                      <ul>
                        <p key={i}>
                          <div className='listData'>{d}</div>
                          <div className='btn-position' onClick={()=>removeData(i)}><button>X</button></div>
                        </p>
                        </ul>
                      </>
                    )
                  })
                }
            </div>
    </div>
  )
}
