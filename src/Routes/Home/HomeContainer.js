// "Container - Presenter Pattern"
// Container has data and state, container gets api, container does all the logic
// Presenter is just a functional components that just shows data

import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from "api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }

    async componentDidMount() {
        try {
          const {
            data: { results: nowPlaying }
          } = await moviesApi.nowPlaying();
          console.log(nowPlaying)
          const {
            data: { results: upcoming }
          } = await moviesApi.upcoming();
          console.log(upcoming)
          const {
            data: { results: popular }
          } = await moviesApi.popular();
          console.log(popular)
          
          this.setState({
            nowPlaying,
            upcoming,
            popular
          });
          
        } catch {
          this.setState({
            error: "Can't find Movie information."
          });
        } finally {
          this.setState({
            loading: false
          });
        }
      }
    
    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        return (
            <HomePresenter 
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        )
    }
}