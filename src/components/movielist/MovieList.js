import React from 'react';
import { connect } from "react-redux";
import { doFetchMovies } from "./actions";
import "../style/custom-style.css"
import { Button } from '@material-ui/core';
import { Votes } from "./MovieVotes";


class MovieList extends React.Component {

  constructor(props) {
    super(props)

  }
  componentWillMount() {
    this.props.onFetchMovies();
  }

  render() {
    const { movieData } = this.props;
    if (movieData && movieData.length > 0) {
      return <div className="root-container">
        {movieData.map((mov,index) => {
          return <div className="movie-card"> <div className="container-child">
            <div className="movie">
            <Votes movie={mov} key={index} />
              <img src={mov.posterurl} className="movie-poster" />
              <tbody>
              <th>{mov.title}</th>
                <tr className="movie-genre">
                  <td>Genre :</td>
                  <td>{mov.genres.join()}</td>
                </tr>
                <tr className="movie-genre">
                  <td>Title</td>
                  <td>{mov.title} - {mov.year}</td>
                </tr>
                <tr className="movie-genre">
                  <td>Cast :</td>
                  <td>{mov.actors.join()}</td>
                </tr>
                <tr className="movie-genre">
                  <td>IMDb Rating :</td>
                  <td>{mov.imdbRating}</td>
                </tr>
                <tr className="movie-genre">
                  <td>Release Date :</td>
                  <td>{mov.releaseDate}</td>
                </tr>
              </tbody>
            </div>
          </div>
            <div className="movie-tralier" color="pr" onClick={() => window.open(mov.trailer)}>Watch Trailer</div>

          </div>
        })}
      </div>;
    } else return <span>No movie </span>;
  }
}

const mapStateToProps = (state) => {
  return {
    movieData: state.movieData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchMovies: () => (dispatch(doFetchMovies())),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);