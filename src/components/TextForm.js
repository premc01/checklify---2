import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase", "success");
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" +  text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase", "success");

    }
    const handleClearClick = ()=>{
        console.log("Clear was clicked" +  text);
        let newText = ('');
        setText(newText)
        props.showAlert("Text Cleared", "success");

    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        var text = document.getElementById("BoxArea");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to clipboard", "success");

    }

    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Deleted Extra Spaces", "success");

    }
    
 
    const [text, setText] = useState('');
   // text = "new text"; // Wrong way to change the state
   // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#000000'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'grey'}}id="BoxArea" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase </button>
        <button type="button" class="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text </button>
        <button type="button" class="btn btn-primary mx-1" onClick={handleCopy}>Copy Text </button>
        {/* <button type="button" class="btn btn-primary mx-1" onClick={handleReverseText}>Reverse Text </button> */}
        <button type="button" class="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#000000'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split (" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split (" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Your Text To Preview"}</p>
    </div>
    </>
  )
}

