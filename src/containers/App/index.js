import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Review from '../../components/Review';
import AIRBNB from '../../icons/AIRBNB.svg';
import { fetchReviews } from '../../actions';
import './main.css';

const App = ({ dispatch, reviews, isFiltering }) => {
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className="container">
      <main>
        <header>
          <h4>ID: 091021</h4>  
          <h1>La Casa de las Flores</h1>
        </header>
        <section>
          <h2>{reviews.length} {`Review${reviews.length > 1 ? 's' : ''}`}</h2>
          {isFiltering && (<div>
            <strong className="mr-2">Filtered By:</strong>
            <button type="button" className="btn btn-sm btn-light mr-1 mb-1">
              Score: <b>4.3</b> <span className="badge badge-secondary">X</span>
            </button>
            <button type="button" className="btn btn-sm btn-light mr-1 mb-1">
              <img src={AIRBNB} alt="channel icon" /> <span className="badge badge-secondary">X</span>
            </button>
          </div>)}
          
          {reviews.map((review, index) => <Review key={index} item={review} />)}
        </section>
        <footer className="p-2 d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item disabled">
                <a className="page-link" href="/" tabIndex="-1" aria-disabled="true">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="/">1</a></li>
              <li className="page-item"><a className="page-link" href="/">2</a></li>
              <li className="page-item"><a className="page-link" href="/">3</a></li>
              <li className="page-item">
                <a className="page-link" href="/">Next</a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  );
}

export default connect(state => ({
  reviews: state.review.items,
  isFiltering: state.review.filters.length > 0
}))(App);
