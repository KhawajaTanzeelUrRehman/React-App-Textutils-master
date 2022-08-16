import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");

    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "warning");

    }
    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "warning");

    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode=== 'dark'?'white': '#042743'}}>
                <h1>{ props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>        
              </div>
              <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
              <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
              <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
              <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
              <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          </div>
          <div className="container my-3" style={{color: props.mode=== 'dark'?'white': '#042743'}}>
                <h1>Your text Summary</h1>
                <p>{text.length === 0 ? 0 : text[text.length-1]=== " " ? text.split(' ').length-1:text.split(' ').length} words and {text.length} characters</p>
                <p>{(text.split(' ').length) * 0.008} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Something in the textbox above to preview it here" }</p>
            </div>
        </>
  )
}
