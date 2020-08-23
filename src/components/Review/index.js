import React from 'react';
import Moment from 'react-moment';
import thumbDown from '../../icons/thumb-down.svg';
import thumbUp from '../../icons/thumb-up.svg';
import AIRBNB from '../../icons/AIRBNB.svg';
import BOOKINGCOM from '../../icons/BOOKINGCOM.svg';
import HOLIDU from '../../icons/HOLIDU.svg';
import './main.css';

const iconMap = {
	'AIRBNB': AIRBNB,
	'BOOKINGCOM': BOOKINGCOM,
	'HOLIDU': HOLIDU
};

const Review = ({
	headline,
	score,
	channel,
	comment,
	positiveFeedback,
	negativeFeedback,
	author,
	publishedAt
}) => (
  <article>
    <header>
      <span className="badge"><b>{score}</b>/5</span>
      <img src={iconMap[channel]} alt="website name" />
      <h5>{headline}</h5>
    </header>
    <summary>
      <p>{comment}</p>
      <ul>
      	{positiveFeedback && <li><img src={thumbUp} alt="agree point" /> {positiveFeedback}</li> }
      	{negativeFeedback && <li><img src={thumbDown} alt="disagree point" /> {negativeFeedback}</li> }
      </ul>
    </summary>
    <footer>
      <strong>{author}</strong>
      <time>
      	Reviewed <Moment format="DD MMM YYYY" element="span">{publishedAt}</Moment>
      </time>
    </footer>
  </article>
)

export default Review;
