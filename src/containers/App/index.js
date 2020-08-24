import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Review from '../../components/Review';
import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';
import { fetchReviews, addFilter, removeFilter } from '../../actions';
import './main.css';

const App = ({ dispatch, reviews, filters, total, pages, active_page }) => {

  const getReviews = (page) => dispatch(fetchReviews(page));

  const handlePaging = (page) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getReviews(page.num);
  }  

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, filters]); 

  return (
    <div className="container">
      <main>
        <header>
          <h4>ID: 091021</h4>  
          <h1>La Casa de las Flores</h1>
        </header>
        <section>
          <h2>{total} {`Review${reviews.length > 1 ? 's' : ''}`}</h2>

          <Filter
            items={filters}
            onClick={(filter) => dispatch(removeFilter(filter))}
          />

          {reviews.map((review, index) =>
              <Review
                key={index}
                {...review}
                onClick={(type, value) => dispatch(addFilter({type, value}))}
              />
          )}
        </section>
        <footer className="p-2 d-flex justify-content-center">
          <Pagination
            items={pages}
            active={active_page}
            onClick={handlePaging}
          />
        </footer>
      </main>
    </div>
  );
}

export default connect(state => ({
  reviews: state.items,
  filters: state.filters,
  total: state.total,
  pages: state.pages,
  active_page: state.page
}))(App);
