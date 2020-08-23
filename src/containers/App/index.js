import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Review from '../../components/Review';
import Filter from '../../components/Filter';
import { fetchReviews, addFilter, removeFilter } from '../../actions';
import './main.css';

const App = ({ dispatch, reviews, filters }) => {

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch, filters]);

  return (
    <div className="container">
      <main>
        <header>
          <h4>ID: 091021</h4>  
          <h1>La Casa de las Flores</h1>
        </header>
        <section>
          <h2>{reviews.length} {`Review${reviews.length > 1 ? 's' : ''}`}</h2>
          {(filters && filters.length) ? (<Filter
            items={filters}
            onClick={(filter) => dispatch(removeFilter(filter))}
          />) : null}
          {reviews.map((review, index) =>
              <Review
                key={index}
                {...review}
                onClick={(type, value) => dispatch(addFilter({type, value}))}
              />
          )}
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
  filters: state.review.filters,  
}))(App);
