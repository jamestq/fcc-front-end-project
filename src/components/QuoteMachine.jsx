import React from 'react';
import './QuoteMachine.css';

const quotes = [
	{
		author: "Spock",
		quote: "Logic is the beginning of the wisdom"
	},
	{
		author: "Jean-Luc Picard",
		quote: "Things are only impossible until they are not."
	},
	{
		author: "Dr. McCoy",
		quote: "Compassion is the one thing that keeps men ahead of the machines."
	},
	{
		author: "Jean-Luc Picard",
		quote: "It is possible to commit no mistakes and still lose. That is life."
	},
	{
		author: "Cathryn Janeway",
		quote: "Logic can be used to justify anything. That's its power, and its flaw."
	},
	{
		author: "James T. Kirk",
		quote: "Without freedom of choice, there is no creativity"
	},
]

export default class QuoteMachine extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			author: "",
			quote: "",
			quoteID: "",
		}
		this.getNewQuote = this.getNewQuote.bind(this);
	}

	getNewQuote(){
		let newQuoteID = "";
		do{
			newQuoteID = Math.floor(Math.random()*quotes.length);
		}while(this.state.quoteID == newQuoteID);
		this.setState({
			author: quotes[newQuoteID].author,
			quote: quotes[newQuoteID].quote,
			quoteID: newQuoteID
		})
	}

    render(){
        return <>
		    <div id="quote-box">
		    	<div id="text">{this.state.quote}</div>
		    	<div id="author">{this.state.author}</div>
		    	<a id="tweet quote" href="https://www.twitter.com/intent/tweet" target="_blank">Tweet</a>
				<button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
		    </div>
	</>
    }
}
