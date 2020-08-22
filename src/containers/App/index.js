import React from 'react';
import Review from '../../components/Review';
import AIRBNB from '../../icons/AIRBNB.svg';
import './main.css';

const App = () => {
  return (
    <div className="container">
      <main>
        <header>
          <h4>ID: 091021</h4>  
          <h1>La Casa de las Flores</h1>
        </header>
        <section>
          <h2>17 Reviews</h2>
          <div>
            <strong className="mr-2">Filtered By:</strong>
            <button type="button" className="btn btn-sm btn-light mr-1 mb-1">
              Score: <b>4.3</b> <span className="badge badge-secondary">X</span>
            </button>
            <button type="button" className="btn btn-sm btn-light mr-1 mb-1">
              <img src={AIRBNB} alt="channel icon" /> <span className="badge badge-secondary">X</span>
            </button>
          </div>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
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

export default App;
