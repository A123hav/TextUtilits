import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import './TextForm.css';


export default function TextForm(props) {
    const handleUpOnclick=()=>{
console.log("UpperCase was clicked"+  text);
let newText1 = text.toUpperCase();
console.log("it is converted to uppercase"+" "+newText1);
setText(newText1);
props.showAlert("converted to UpperCase","success");


    }

    const handleLoOnclick =()=>{
        console.log("LowerCase was clicked"+  text);
let newText2 = text.toLowerCase();
console.log("it is converted to Lowercase"+" "+newText2);
setText(newText2);
props.showAlert("converted to UpperCase","success");
    }
    const handleclearclick =()=>{
        let newText3 ='';
        setText(newText3);
    }



    
    const handleUpOnchange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }



    var [text,setText] = useState('');
    // text="hello"//wrong way to change the text
    // setText("hello")//correct way of changing the variable
    
  return (
    <>
    <div className='TextForm'>
       
      <form aria-rowspan={20} aria-colspan={20}>
  <div className="mb-20">
    <label for="myBox" className="form-label">{props.headtag}</label>
    <textarea type="email" class="form-control" value={text} id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={handleUpOnchange} style={{background: props.mode === "light" ? "dark" : "light"}}/>
    <br></br>
    <button type="submit" className="btn btn-primary mx-2" onClick={handleUpOnclick}>Convert to Upper Case</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={handleLoOnclick}>Convert to LowerCase Case</button>
    <button type="submit" className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
  </div>
  <div>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length}words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}minutes read</p>
    <h2>preview</h2>
    <p>{text}</p>

  </div>
 
  
  
  
</form>
    </div>
    </>
  )
}
