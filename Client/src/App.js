import './App.css';
import Accordion from './Components/Accordion';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


function App() {
    const [data, setData] = useState(null);

    /*useEffect(() => {
        var acc = document.querySelectorAll('.accordion-title');
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                //this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }, [])*/

    useEffect(() => {
        axios.get('/get_tree').then(data => {
            let d2 = JSON.parse(data.data);
            console.log(d2);
            setData(d2);
        })
    }, [])
  return (
    <div className="App flex">
      <h1>AdCore CRUD</h1>
      <h2>Data:</h2>
      {data ? data.map(d => {
        return(
            <Accordion
            id={d.id}
            name={d.name}
            description={d.description}
            parent={d.parent}
            read_only={d.read_only}
            children={d.children}
            />
        )
      }) : null}
    </div>
  );
}

export default App;
