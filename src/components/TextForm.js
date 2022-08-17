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
        document.getSelection().removeAllRanges();
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
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'#134666':'white',color: props.mode==='dark'?'white':'grey'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>        
              </div>
              <button   disabled={text.length === 0} className={`btn btn-${props.btnClass} mx-1 my-1`} onClick={handleUpClick}>Convert to UpperCase</button>
              <button   disabled={text.length === 0} className={`btn btn-${props.btnClass} mx-1 my-1`} onClick={handleLoClick}>Convert to LowerCase</button>
              <button   disabled={text.length === 0} className={`btn btn-${props.btnClass} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
              <button   disabled={text.length === 0} className={`btn btn-${props.btnClass} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
              <button   disabled={text.length === 0} className={`btn btn-${props.btnClass} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          </div>
          <div className="container my-3" style={{color: props.mode=== 'dark'?'white': '#042743'}}>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length } characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length } Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to Preview" }</p>
            </div>
        </>
  )
}
