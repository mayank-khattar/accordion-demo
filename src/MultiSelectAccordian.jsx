import { useState } from "react";
import data from './data';
import '../src/Accordion.css';

function MultiSelectAccordian() {
    const [selected, setSelected] = useState([]);
    function handleCurrentItem(id) {
        if(selected.includes(id)) {
            setSelected(selected.filter(item => item !== id))
        } else {
            setSelected([...selected, id]);
        }
    }
  
    return ( 
    <div className="wrapper">
        <h1>Multi Select Accordion</h1>
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
                        selected.includes(item.id)?
                        <div className="content">{item.answer}</div>:
                        <div></div>
                    }
                 </div>
            ))) : (<div>No Data available</div>)
        }
        </div> 
    </div> );
}

export default MultiSelectAccordian;