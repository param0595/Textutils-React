// write " rfc  " and the select emmet recommandation
import React,{useState} from 'react'

export default function About() {
  
  // "myStyle & setMyStyle" are "useState" objects
  const [ myStyle,setMyStyle] = useState({
    color : 'black' ,             // color of text = black
    backgroundColor : 'white'     // color of background = white
  });

  // "btnText & setBtnText" are "useState" variable 
  const[btnText,setBtnText] = useState("Enable Dark Mode")

  let toggleStyle = () =>{
    if(myStyle.color === 'black'){               // if the color of the text is "black"
      setMyStyle({
        color : 'white',                         // change the color of text to "white" (using "useStete" variable)
        backgroundColor : "black" ,               // change the backgroung color of text to "black" (using "useStete" variable)
        // border : "3px solid white" 
      })
      setBtnText("Enable Light Mode")            // change the content displayed on button to "Enable Light Mode" using "useState" variable

    }
    else{
      setMyStyle({
        color : 'black',                          // change the color of text to "black" (using "useStete" variable)
        backgroundColor : "white"                 // change the backgroung color of text to "white" (using "useStete" variable)
      })
      setBtnText("Enable Dark Mode")              // change the content displayed on button to "Enable Dark Mode" using "useState" variable

    }
  }
  
  return (
  // "style={myStyle}" -----> sets the style of paticular class with with characteristic mentioned in object "myStyle"
  <div className= "container"style={myStyle}>
    <h2>About Us</h2>
    <div className="accordion" id="accordionExample">
      {/* "style={myStyle}" -----> sets the style of paticular class with with characteristic mentioned in object "myStyle" */}
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
      {/* "style={myStyle}" -----> sets the style of paticular class with with characteristic mentioned in object "myStyle" */}
          <button className="accordion-button" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
      {/* "style={myStyle}" -----> sets the style of paticular class with with characteristic mentioned in object "myStyle" */}
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      {/* "style={myStyle}" -----> sets the style of paticular class with with characteristic mentioned in object "myStyle" */}
          <div className="accordion-body" style={myStyle}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.              
          </div>
        </div>
      </div>
      {/* "style={myStyle}" -----> sets the style of paticular class with with characteristic mentioned in object "myStyle" */}
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingThree">
      {/* "style={myStyle}" -----> sets the style of paticular class with with characteristic mentioned in object "myStyle" */}
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
    {/* my-3 class will give "3" in Y-axis */}
    <div className = "container my-3">
      {/* this button will display the content of "btnText"*/}
      {/* if we click the button "toggleStyle" function is fired */}
      <button type='button' onClick={toggleStyle} className = "btn btn-primary">{btnText}</button>
    </div>
  </div>
  )
}
/*
after inspecting of webpage , select a line of code in "elements" 
we can perform "CSS" modification in the code selected from console
ex:-
$0.style.border = '2px solid border'
we can access the selected code from console of crome by using "$0" 
*/
