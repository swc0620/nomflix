import React from 'react';
import SearchPresenter from "./SearchPresenter";
import { moviesApi } from "api";
import { tvApi } from 'api';

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    }

    handleSubmit = (event) => {
        // In React, by default, pressing enter key is submit. We need to intercept that event. 
        event.preventDefault();
        
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({
                loading: true
            })
        try {
            const {
                data: { results: movieResults }
            } = await moviesApi.search(searchTerm);
            const {
                data: { results: tvResults }
            } = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            })
        } catch {
            this.setState({
                error: "Can't find results."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    updateTerm = (event) => {
        const { target: { value }} = event;
        this.setState({
            searchTerm: value
        })
    }

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return (
            <SearchPresenter 
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        )
    }
}