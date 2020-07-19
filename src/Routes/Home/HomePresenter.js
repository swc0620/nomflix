import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 20px;
`;

const HomePresenter = ({
    nowPlaying, popular, upcoming, loading, error
}) => loading ? <Loader /> : (
    <Container>
        <Helmet>
            <title>Movies | Nomflix</title>
        </Helmet>

        { loading ? (
            <Loader />
        ) : (
            <Container>
                <Helmet>
                    <title>Movies | Nomflix</title>
                </Helmet>
                {/* '<Section></Section>' is not a condition but a component, so it will always be true */}
                { nowPlaying && nowPlaying.length > 0 && (
                    // children is the elements that are inside the tags in JSX
                    <Section title="Now Playing">
                        { nowPlaying.map(movie => 
                            <Poster 
                                key={ movie.id }
                                id={ movie.id }
                                imageUrl={ movie.poster_path }
                                title={ movie.original_title }
                                rating={ movie.vote_average }
                                year={ movie.release_date && movie.release_date.substring(0, 4) }
                                isMovie={ true }
                            />
                        ) }
                    </Section>
                ) }
                { upcoming && upcoming.length > 0 && (
                    <Section title="Upcoming Movies">
                        { upcoming.map(movie => 
                            <Poster 
                                key={ movie.id }
                                id={ movie.id }
                                imageUrl={ movie.poster_path }
                                title={ movie.original_title }
                                rating={ movie.vote_average }
                                year={ movie.release_date && movie.release_date.substring(0, 4) }
                                isMovie={ true }
                            />
                        ) }
                    </Section>
                ) }
                { popular && popular.length > 0 && (
                    <Section title="Popular Movies">
                        { popular.map(movie => 
                            <Poster 
                                key={ movie.id }
                                id={ movie.id }
                                imageUrl={ movie.poster_path }
                                title={ movie.original_title }
                                rating={ movie.vote_average }
                                year={ movie.release_date && movie.release_date.substring(0, 4) }
                                isMovie={ true }
                            />
                        ) }
                    </Section>
                ) }
                { error && <Message color="#e74c3c" text={ error }></Message> }

            </Container>
        )
    }

        
    </Container>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcomfing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;