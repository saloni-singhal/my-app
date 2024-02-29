import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () =>{
        console.log("button is hit" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handlelowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleclrClick = () =>{
        let newText = "";
        setText(newText);
    }
    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text);
    }
    const handleSpeak = () =>{
        var msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        props.showAlert(`${text} speak`, "success");
    }
    const extraSpace = () =>{
        var newText = text.split(/\s\s+/)
        setText(newText.join(" "))
    }
    const handleOnChange = (event) =>{
        console.log ("on change");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} style = {{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange} id="myText" rows="8"></textarea>
        </div>
        <div className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</div>
        <div className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowercase</div>
        <div className="btn btn-primary mx-2" onClick={handleclrClick}>Clear</div>
        <div className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to clipboard</div>
        <div className="btn btn-primary mx-2" onClick={handleSpeak}>Speak</div>
        <div className="btn btn-primary mx-2" onClick={extraSpace}>Remove Extra Space</div>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2> Text summary</h2>
        <p> {text.split(" ").length -1} <b>words</b>, {text.length} characters, {text.split(".").length-1} sentences </p>
        <p>{text.split(" ").length * 0.004} sec to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
