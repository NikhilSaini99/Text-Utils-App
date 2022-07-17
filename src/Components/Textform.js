
import React, { useState } from 'react'
//import Form from 'react-bootstrap/Form';

export default function Textform(props) {
    //UPPER CASE FUNCTION 
    const upClicked = () => {

        // console.log("you clicked upperCase button---" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to upper case', 'success');
    }
    //LOWER CASE FUNCTION
    const downClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const onChangeclick = (event) => {
        // console.log("On change happening");
        setText(event.target.value);
    }
    //COUNT CLICK FUNCTION
    const count = () => {
        setCount(counts + 1);

    }

    const clickme = (event) => {
        // console.log("On change happening");
        setText(event.target.value);
    }
    //CLEAR TEXT BOX
    const clear = () => {
        setText("");
    }

    //SPACE TRIM FUCNTION
    const trim = () => {
        let trimtext = text;
        setText(trimtext.replace(/ /g, "")); //trim spaced between words
        //setText(trimtext.trim()); //trim spaces from left and right
        //let newText = text.split(/[ ]+/);
        // setText(newText.join(" "));
    }


    const [text, setText] = useState('');
    const [counts, setCount] = useState(0);    // text="new text is this"; //this is the wrong way to update the value or wrong way to udpate the State
    // setText =('this is the new value of text variable settted by setText variable'); // this is the correct way to update the value/ or to set the state

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={onChangeclick} placeholder="Enter your text here" id="my-box" rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={upClicked}> Convert to upper case</button>
                    <button className="btn btn-primary my-3 mx-3 " onClick={downClicked}>Convert to Lower case</button>
                    {/* counting clicks */}



                    <input type="text" value={counts + ' Times clicked'} onChange={clickme} />
                    <button className="btn btn-primary my-3 mx-3 " onClick={count}>Count</button>




                    <button className="btn btn-primary my-3 mx-3 " onClick={clear}>Clear Text</button>
                    <button className="btn btn-primary my-3 mx-3 " onClick={trim}>Trim All space</button>
                </div>
            </div>
            <div>
                <h1>My text area Data</h1>
                <p>Total number of chararcters :{text.length} And No of Word :{text.split(" ").length}</p>
            </div>
            {/* Radio button for DARK/LIGHT MODE */}


        </>
    )

}
