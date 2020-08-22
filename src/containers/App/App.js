import React from 'react';
import Review from '../../components/Review';
import './app.css';
import AIRBNB from '../../icons/AIRBNB.svg';

const App = () => {
  return (
    <div class="container">
      <main>
        <header>
          <h4>ID: 091021</h4>  
          <h1>La Casa de las Flores</h1>
        </header>
        <section>
          <h2>17 Reviews</h2>
          <div>
            <strong class="mr-2">Filtered By:</strong>
            <button type="button" class="btn btn-sm btn-light mr-1 mb-1">
              Score: <b>4.3</b> <span class="badge badge-secondary">X</span>
            </button>
            <button type="button" class="btn btn-sm btn-light mr-1 mb-1">
              <img src={AIRBNB} alt="channel icon" /> <span class="badge badge-secondary">X</span>
            </button>
          </div>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </section>
        <footer class="p-2 d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  );
}

export default App;
