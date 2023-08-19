import "./style.css";
import Cweet from './Component/Cweet';
import {useState} from "react"

const add=[
  {    id:0,
       name:"Amza",
        content:"Je vais bien",
         like:"40",
  },
  { 
    id:1,
    name:"Zakou",
     content:"Cool",
      like:"50",
  },
  {  id:2,
    name:"Zalika",
     content:"I'm fine",
    like:"60" ,
  },
  {
    id:3,
    name:"Dari",
     content:"Good",
      like:"70"

  }
];
  

export default function App() {
  const [element,setElement]=useState(add);
  const ondelete=(cweetId)=>{
    setElement((curr)=>curr.filter((el)=> el.id !== cweetId))};
  

 
 return (
  <div>
  <div className="tweet-container">
  {element.map((el)=>{
    return( 
       <Cweet
        id={el.id}
        key={el.id}
        name={el.name} 
        content={el.content} 
        like={el.like}
        ondelete={(id)=>{
        ondelete(id) ;
        }}
        />
    );
  })}
  </div>
</div>
  );
}


