import React from 'react';
import DetailPresenter from "./DetailPresenter";
import moviesApi, tvApi from "api";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const {location: { pathname }} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        }
    }
    

    async componentDidMount() {
        // receives props from 'Router'
        const {
            match: {
                params: { id }
            },
            history: { push },
            location: { pathname }
        } = this.props;

        const { isMovie } = this.state;

        const parsedId = parseInt(id);
        if (isNan(parsedId)) {
            return push("/");
        }

        let result = null;
        try {
            if (isMovie) {
                const {data: result } = await moviesApi.movieDetail(parsedId);
            } else {
                const {data: result } = await tvApi.showDetail(parsedId);
            }
        } catch {
            this.setState({
                error: "Can't find anything."
            })
        } finally {
            this.setState({
                loading: false,
                result
                })
        }
    }

    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter 
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}