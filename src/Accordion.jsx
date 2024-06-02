import { useState } from "react";
import data from './data';
import '../src/Accordion.css';

function Accordion() {
    const [selected, setSelected] = useState(null);
    function handleCurrentItem(id) {
        setSelected(id===selected?null:id);
    }
  
    return ( 
    <div className="wrapper">
        <h1>Single Select Accordion</h1>
        <div className="accordion">
        {
            data&&data.length>0 ? 
            (data.map((item)=>(
                <div className="item" key={item.id}>
                    <div className="title" onClick={()=>handleCurrentItem(item.id)}>  
                    <h3>{item.question}</h3>
                    <span></span>
                    </div>
                    {
                        selected === item.id?
                        <div className="content">{item.answer}</div>:
                        <div></div>
                    }
                 </div>
            ))) : (<div>No Data available</div>)
        }
        </div> 
    </div> );
}

export default Accordion;