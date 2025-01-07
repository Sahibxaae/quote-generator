import React,{useState} from 'react';
function Main (){
    const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
        "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
        "In the middle of every difficulty lies opportunity. - Albert Einstein",
        "Happiness is only real when shared - Christopher Johnson McCandless",
        "Things you own ended up owning you -Tyler durden",
      ];
    
    const [currentQuote,setCurrentQuote] = useState(quotes[Math.floor(Math.random()*quotes.length)])
    function genarateQuote(){
        const randomQuote = Math.floor(Math.random()*quotes.length);
        setCurrentQuote(quotes[randomQuote]);
    }
  return (
    <div className='container'>
        <div className="display">
            "{currentQuote}"
            <button className='next-btn' onClick={genarateQuote}>Generate</button>
        </div>
    </div>
  )
}

export default Main