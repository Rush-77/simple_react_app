import React,{useState} from 'react'

export default function TextBox(props) {
    const [text,setText] = useState("");
    
    const upperClick = () =>{
        if(text){
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert('Converted to Uppercase ','success');
        }else{
            props.showAlert('Enter the text first. ','danger');
        }
    }

    const lowerClick = () =>{
        if(text){
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert('Converted to Lowercase ','success');
        }else{
            props.showAlert('Enter the text first. ','danger');
        }
    }

    const clearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared ','info');
    }

    const textChange = (event) =>{
        setText(event.target.value);
    }
        
  return (
    <>
       <div className='container' style={{color :props.mode==='light'?'black':'white'}}>
            <h1>{props.heading} </h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={textChange} rows="12" style={{backgroundColor :props.mode==='dark'?'grey':'white'}}></textarea>
            </div>
        </div>
        <div className="container my-2" >
            <button className="btn btn-primary" onClick={upperClick}>UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={lowerClick}>LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={clearClick}>Clear</button>
        </div>
        <div className="container" style={{color :props.mode==='light'?'black':'white'}}>
            <h3>Summary</h3>
            <p>Number of Words : {text.split(' ').length -1 }</p>
            <p>Number of Characters : {text.length}</p>
            <p> {0.004 * text.split(' ').length} Minutes of Read.</p>
        </div>
    </>
  )
}
