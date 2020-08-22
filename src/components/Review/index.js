import React from 'react';
import thumbDown from '../../icons/thumb-down.svg';
import thumbUp from '../../icons/thumb-up.svg';
import AIRBNB from '../../icons/AIRBNB.svg';
import './main.css';

const Review = () => {
  return (
    <article>
    	<header>
			<span className="badge"><b>4.3</b>/5</span>
			<img src={AIRBNB} alt="website name" />
			<h5>Very nice host, and quite chill place.!</h5>
    	</header>
    	<summary>
			<p>Morbi porttitor nisl ipsum, a facilisis purus euismod eu. Praesent consequat interdum nisi ut auctor. Sed posuere est porta neque pretium viverra. Nulla vel finibus nulla.</p>
			<ul>
				<li><img src={thumbUp} alt="agree point" /> Nulla dictum ligula ac tortor egestas, sit amet ullamcorper risus sollicitudin. Morbi vitae leo accumsan, interdum ligula non, placerat ligula. Ut faucibus congue purus, vitae semper</li>
				<li><img src={thumbDown} alt="disagree point" /> Nulla dictum ligula ac tortor egestas, sit amet ullamcorper risus sollicitudin. Morbi vitae leo accumsan, interdum ligula non, placerat ligula. Ut faucibus congue purus, vitae semper</li>
			</ul>
    	</summary>
		<footer>
			<strong>Alissa Stacey</strong>
			<time>Reviewed 13 December 2019</time>
		</footer>
    </article>
  );
}

export default Review;
