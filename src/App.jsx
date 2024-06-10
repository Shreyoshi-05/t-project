
import { useState } from 'react'
import './App.css'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { toast } from 'react-toastify';

function App() {

  const[input, setInput] = useState("");
  const[Item, setItem] = useState([])

  function getItem(e){
    if(input==""){
      toast.error("Please Provide Value",{
        position:"top-center"
      });
    }else{
      setItem([...Item,input])
      toast.success("Item added to the list",{
        position:"top-center"
      });
    }
  }

  function deleteEle(indx){
    setItem(
      Item.filter((task, ind)=>{
        return (ind !== indx);
      })
    );
  }
  
  return (
    <>
     <div id="box">
      <h1>Grocery Bud</h1>
      <input type="text" 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
       />
      <button onClick={getItem}>Add Item</button>
      </div>
     {/* <ul> */}
      {
        Item.map((itm, indx)=>{
          return(
            <div id="whole">
              <li key={indx} > <input type="checkbox" /> {itm} <RemoveCircleOutlineIcon  onClick={()=>deleteEle(indx)} /> </li>
            </div>
          )
        })
      }
     {/* </ul> */}
    </>
  )
}

export default App
