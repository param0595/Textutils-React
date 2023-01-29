import React,{useState} from 'react'
export default function TextForm(props) {

  const HadleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied Text!","success")     

  }
  const HadleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed","success")    

  }
  const HadleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success") 
  }
  const HadleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success")
  }
  const HadleLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success")

  }
  const HandleOnChange = (event) => {      
    setText(event.target.value); 
  }
  const [text, setText] = useState('');  
  return (         
    <>
    <div className="container" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        <h2>{props.heading}</h2>             
        <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={HandleOnChange} style={{ color : props.mode === 'dark'?'white':'black', backgroundColor : props.mode ==='dark'?'#343a40':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={HadleUpCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={HadleLowCase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={HadleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={HadleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={HadleClear}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color : props.mode === 'dark'? 'white' : 'black'}}> 
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>Reading Time {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length } Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  )
}
