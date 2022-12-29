import React from 'react';
import {marked} from 'marked';
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';

export default class MarkdownPreivew extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            input: '',
            output: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value,
            output: parse(sanitizeHtml(marked.parse(event.target.value)))
        })
    }

    render(){

        return <div id="markdown-preview">
            <textarea name="editor" id="editor" cols="30" rows="10" onChange={(event) => this.handleChange(event)}  value={this.state.input}>
            </textarea>
            <div id="preview">{this.state.output}</div>
        </div>
    }
}