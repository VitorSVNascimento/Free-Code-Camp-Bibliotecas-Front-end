import './Wrapper.css'
import React from 'react';
import ReactDOM from 'react-dom/client'

const quotes = [
  {
   quote:'O sucesso é cair nove vezes e se levantar outras dez',
   author:'Jon Bon Jovi'
  },
  {
    quote:'O amor é a força mais sutil do mundo',
    author:'Mahatma Gandhi'
  },
  {
    quote:'Não se pode pisar duas vezes no mesmo rio',
    author:'Heráclito'
  },
  {
    quote:'O primeiro dever da inteligencia é desconfiar dela mesma',
    author:'Albert Einstein'
  },
  {
    quote:'A gratidão é o unico tesouro dos humildes',
    author:'William Shakespeare'
  },
]

class Wrapper extends React.Component{
  
  constructor(props){
    super(props);
    
    this.state = {
      position:0
    }
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }
  
   handleNewQuote = () =>{
    let newPosition = Math.floor(quotes.length*Math.random());
    if(newPosition == this.state.position)
      this.handleNewQuote();
    
    else
      this.setState({
        position:newPosition
      })
  }
  
  render(){
    return(
      <div id='main-div' className='d-flex align-items-center'>
        
        <div id='quote-box' className='container bg-light rounded p-5' >
          <div >

              <h1 id='text' className='text-primary text-center'>"{quotes[this.state.position].quote}"</h1>
              <h3 id='author' className='text-end'>- {quotes[this.state.position].author} </h3>


          </div>

          <div className='d-flex justify-content-around mt-5'>

              <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_blank' className='text-decoration-none fa-brands fa-twitter btn btn-outline-primary rounded text-bold btn-lg d-flex align-items-center'></a>
              <button id='new-quote' className='btn btn-outline-primary rounded text-bold btn-lg' onClick={this.handleNewQuote}>New Quote!</button>



          </div>




        </div>
      </div>
    )
  }
  
}

export default Wrapper
