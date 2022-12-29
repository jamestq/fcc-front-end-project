import React from 'react';
import {marked} from 'marked';
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';

export default class MarkdownPreivew extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            input: '',
            output: this.firstLoad(),
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value,
            output: parse(sanitizeHtml(marked.parse(event.target.value)))
        })
    }

    firstLoad(){
        return <>
            <h1>Type in the textarea to parse a markdown</h1>
            <h2>This app uses marked, sanitize-html and html-react-parser to parse the markdown</h2>
            <a href="https://marked.js.org/">Link to marked</a>
            <br></br>
            <a href="https://www.npmjs.com/package/sanitize-html">Link to sanitize-html</a>
            <br></br>
            <a href="https://www.npmjs.com/package/html-react-parser">Link to html-react-parser</a>
            <br></br>
            <code>

            </code>
        </>
    }

    render(){

        return <div id="markdown-preview">
            <textarea name="editor" id="editor" cols="30" rows="10" onChange={(event) => this.handleChange(event)}  value={this.state.input}>
            </textarea>
            <div id="preview">{this.state.output}</div>
        </div>
    }
}