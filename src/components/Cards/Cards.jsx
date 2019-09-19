import React from "react";
const Cards = (React.FC = props => {
	return (
		<>
			<div className='cards'>
				<img src={props.img} alt='' />
				<p>{props.content}</p>
				<div className='pad-top'>
					<a href={props.url} target="_blank" className='button'>
						Leia mais...
					</a>
				</div>
			</div>
		</>
	);
});

export default Cards;
