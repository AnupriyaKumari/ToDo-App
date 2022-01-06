// import React, {useState} from 'react'

// export default function TextForm(props) {
//     const handleUpClick = () =>{
//         console.log("Uppercase was Clicked" + text);
//         let newText = text.toUpperCase();
//         setText(newText);
//     }
//     const handlelowClick = () =>{
//         console.log("Uppercase was Clicked" + text);
//         let newText = text.toLowerCase();
//         setText(newText);
//     }
//     const handleOnChange =(event) =>{
//         console.log("On Change");
//         setText(event.target.value);
//     }

//     const [text, setText] = useState('Enter Text Here2: ');
//     // text ="new text" ----wrong way to change the state
//     // setText = (" new Text ");--- correct way to change the state
//     return (
//         <>
//         <div className='container'>   
//             <h1>{props.heading}</h1>     
//             <div className="mb-3">
//                 <label htmlFor="myBox" className="form-label">Example textarea</label>
//                 <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//             </div>
//             <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase </button>
//             <button className="btn btn-primary" onClick={handlelowClick}>Convert to LowerCase </button>
//         </div>
//         <div className="container my-2">
//         <h1>Your text Summary</h1>
//         <p>{text.split(" ").length} words and {text.length} characters</p>
//         <p>{0.008 * text.split(" ").length} minutes will be required to read above paragraph</p>
//         <h3>Preview</h3>
//         <p>{text}</p>
//         </div>
//         </>
//     )
// }