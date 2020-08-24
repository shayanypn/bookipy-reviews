import React from 'react';
import Moment from 'react-moment';
import thumbDown from '../../icons/thumb-down.svg';
import thumbUp from '../../icons/thumb-up.svg';
import { iconsMap } from '../../constant';
import './main.css';

const Review = ({
	headline,
	score,
	channel,
	comment,
	positiveFeedback,
	negativeFeedback,
	author,
	publishedAt,
	onClick = () => null,
}) => (
  <article>
    <header>
      <span 
      	className="badge"
      	onClick={() => onClick('score', score)}
      >
      	<b>{score}</b>/5
      </span>
      <img 
      	src={iconsMap[channel]}
      	alt="website name"
      	onClick={() => onClick('channel', channel)}
      />
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
