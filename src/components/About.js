import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '1px solid white'
    // })
    
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104':'white',
    }

    return (
        <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Yogesh DadHans
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Hi! Hope you like this TextUtils Application.</strong> Hey, I'm Yogesh DadHans (Web developer), coding from last 12 years. In Start, I've started with PHP Developer, but now, I'm using different programming languages for coding applications.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        TextUtiles Application
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>With this application, you can do editing for your documents.</strong> Inwhich you can use different functions, to make your text to upparcase or in lower case, remove extra-spaces and all that.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        React JS
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>React JS is amazing for front-end developer.</strong> You can do such an amazing code with the help of javascripts and make that very interactive and attractive.
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
                <button type='button' onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button>      
            </div> */}
        </div>
    )
}
