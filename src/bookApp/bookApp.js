import React, { Component } from 'react';
import './bookApp.js';
import InputContainer from './inputContainer/inputContainer';
import Book from './book/book'

export default class BookApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInputs: {
                q: '',
                printType: 'all',
                filter: 'none'
            },
            error: null,
            books: {}
        };
    }

    createURL() {
        const searchURL = 'https://www.googleapis.com/books/v1/volumes';
        const key = 'key=AIzaSyBPZQom0pURAb_6rm3k1CSupVqhfnMpewA';
        const params = Object.keys(this.state.userInputs)
            .map(key => `${key}=${this.state.userInputs[key]}`)
            .filter(param => param !== 'filter=none');
        params.push(key)
        const paramString = params.join('&');
        return `${searchURL}?${paramString}`;
    }

    getData() {
        fetch(this.createURL())
            .then(res => {
                if (!res.ok)
                    throw new Error('Something went wrong. Please try again later')
                return res.json();
            })
            .then(data => this.setState({ book: data.items }))
            .catch(err => this.setState({ error: err.message }));
    }

    setUserInput(input) {
        const state = Object.assign({}, this.state);
        state.userInputs.q = input.split(' ').join('+');
        this.setState(state);
    }

    setFilter(key, value) {
        const userInputs = Object.assign({}, this.state.userInputs);
        userInputs[key] = value;
        this.setState({ userInputs });
    }

    render() {
        return (
            <main>
                <InputContainer
                    submitHandler={e => this.getData(e)}
                    inputHandler={input => this.setUserInput(input)}
                    changeHandler={(key, value) => {
                        this.setFilter(key, value);
                    }}
                />
                {Object.defineProperties(this.state.books).length === 0 &&
                this.state.books.constructor === Object ? (
                    ''
                ) : (
                    <Book books={this.state.books} />
                )}
            </main>
        )
    }
}