// write " rfc  " and the select emmet recommandation
// Here "{useState}" is a Hook 
import React,{useState} from 'react'
// "Hooks" are used if we want to use features of class without actually constructing class 


export default function TextForm(props) {

  //(13)
  const HadleCopy = () => {
    // accessing text by using id_name 
    let text = document.getElementById("myBox");
    text.select();
    // using navigator interface and copping that to clipboard 
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Text!","success")                  // "showAlert" is called

  }

  // (11)
  const HadleExtraSpaces = () => {
    // if one or more than one space is present then split the text and store that in form of ARRAY 
    let newText = text.split(/[ ]+/);       // use of regex
    // Now join all the elements of array with a single space 
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed","success")        // "showAlert" is called

  }

  // (5)
  const HadleUpCase = () => {
    // whenever this function is fired. In console it prints " "Uppercase was clicked" + text "
    //console.log("Uppercase was clicked" + text);

    // "newText" will be updated with the     Upper Case of "text"
    let newText = text.toUpperCase();
    // whenever this function is fired. text will be reset with  " "newText"  "
    setText(newText);
    props.showAlert("Converted to Upper Case","success")        // "showAlert" is called
  }

  // (9)
  const HadleClear = () => {
    // whenever this function is fired. In console it prints " "Uppercase was clicked" + text "
    //console.log("Uppercase was clicked" + text);

    // "newText" will be updated with the     Upper Case of "text"
    let newText = "";
    // whenever this function is fired. text will be reset with  " "newText"  "
    setText(newText);
    props.showAlert("Text Cleared!","success")                // "showAlert" is called

  }

  //(7)
  const HadleLowCase = () => {
    // whenever this function is fired. In console it prints " "Lowercase was clicked" + text "
    //console.log("Lowercase was clicked" + text);

    // "newText" will be updated with the     Upper Case of "text"
    let newText = text.toLowerCase();
    // whenever this function is fired. text will be reset with  " "newText"  "
    setText(newText);
    props.showAlert("Converted to Lower Case","success")         // "showAlert" is called

  }
  
  // (3)
  const HandleOnChange = (event) => {            //  Here (event)     is a event object
    // whenever this function is fired. In console it prints " "On Change"  "
    //console.log("On Change");

    // whenever this function is fired. The 
    setText(event.target.value);                  // setText("new Text");
  }

  // here "text" is assigned with the value of useState     ---- i.e " Enter the text here "
  // "setText" is used when we have to update the value of "text"
  // (1)
  const [text, setText] = useState('');           // here "text" is a state,      "useState" is a Hook

  //const [text, setText] = useState('Enter the text here');
  // wrong way to change the state
  // text = "new text";               
  
  // correct way to change the state 
  // setText("new Text");
  return (
    <>
    {/* if color of mode is "dark" then change of content (text) to "white" , else change to "black" */}
    <div className="container" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
        <h2>{props.heading}</h2>              {/* We can use props passed by "App.js" just    {props.props_name} */}
        <div className="mb-3" >
    {/* if color of mode is "dark" then change of content (text) to "white" , else change to "black" */}
    {/* if color of mode is "dark" then change of background to '#343a40' , else change to "white" */}
            <textarea className="form-control" value={text} onChange={HandleOnChange} style={{ color : props.mode === 'dark'?'white':'black', backgroundColor : props.mode ==='dark'?'#343a40':'white'}} id="myBox" rows="8"></textarea>
            {/* (2)    whenever we type anything in our textarea, "value" will be updated with {text} and "onChange" is an eventListener which fire our "HandleOnChange" function  */}
        </div>
        <button className="btn btn-primary mx-1" onClick={HadleUpCase}>Convert to Uppercase</button>
        {/*(4) "onClick" is an eventListener . so, when we click on "Button" it fire our "HandleUpCase" function  */}

        <button className="btn btn-primary mx-1" onClick={HadleLowCase}>Convert to Lowercase</button>
        {/*(6) "onClick" is an eventListener . so, when we click on "Button" it fire our "HadleLowCase" function  */}

        <button className="btn btn-primary mx-1" onClick={HadleExtraSpaces}>Remove Extra Spaces</button>
        {/*(10) "onClick" is an eventListener . so, when we click on "Button" it fire our "HadleExtraSpaces" function  */}

        <button className="btn btn-primary mx-1" onClick={HadleCopy}>Copy Text</button>
        {/*(12) "onClick" is an eventListener . so, when we click on "Button" it fire our "HadleCopy" function  */}

        <button className="btn btn-primary mx-1" onClick={HadleClear}>Clear Text</button>
        {/*(8) "onClick" is an eventListener . so, when we click on "Button" it fire our "HadleClear" function  */}

    </div>
    <div className="container my-2" style={{color : props.mode === 'dark'? 'white' : 'black'}}>            {/* my-3   is a class of bootstrap which give spacing in Y-axis */}
        <h2>Your text Summary</h2>
        {/*(14)   {text.split(" ").length} -------> this will give us count of no. of empty spaces,  {text.length} -------> no.of characters */}
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        {/*(15)   (minutes for reading one words) * (Total no. of Words)  */}
        <p>Reading Time {0.008 * text.split(" ").length } Min</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
