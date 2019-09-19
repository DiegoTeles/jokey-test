import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "semantic-ui-react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import { jokey as jokeyAction } from "../../store/duck/jokey/action";
import { useCategory, useSearchJokey } from "../../hooks";

import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";

import Cards from "../../components/Cards/Cards";
import Chuck from "../../assets/img/chuck.png";
import Logo from "../../assets/img/logo.png";

const Main = (React.FC = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(jokeyAction("animal"));
	}, []);

	const category = useCategory();
	const resultSearch = useSearchJokey(search);
	const jokey = useSelector(state => state);
	const [loading, setLoading] = useState(false);
	const [done, setDone] = useState(false);

	const handleChange = event => {
		const value = event.target.value;
		setSearch(value);
	};

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: legoData.default,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const defaultOptions2 = {
		loop: false,
		autoplay: true,
		animationData: doneData.default,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	useEffect(() => {
		setTimeout(() => {
			if (category.data) {
				setLoading(true);
			}
			setTimeout(() => {
				setDone(true);
			}, 1000);
		}, 1200);
	});

	return (
		<>
			{!done ? (
				<FadeIn>
					<div className='cards_intro'>
						<img src={Logo} width={300} />
						<h1>Chuck Jokey</h1>
						{!loading ? (
							<Lottie options={defaultOptions} height={120} width={120} />
						) : (
							<Lottie options={defaultOptions2} height={120} width={120} />
						)}
					</div>
				</FadeIn>
			) : (
				<div className='App'>
					<div className='input-container'>
						<div className='input-container_search'>
							<Input list='jokeys' placeholder='Faça sua busca...' onChange={handleChange} />
							<datalist id='jokeys'>
								{category.data.length &&
									category.data.map((item, index) => {
										return (
											<option key={index} value={item}>
												{item}
											</option>
										);
									})}
							</datalist>
						</div>
						<div className='input-container_notify'>
							{search.length < 3 && <p> A pesquisa deve conter no minimo 3 caracteres!</p>}
						</div>
					</div>
					{resultSearch.data.result && (
						<h3>
							Resultado da busca pelo termo <b className='cards_result'>{search}</b>
						</h3>
					)}
					{resultSearch.data.result ? (
						<div className='cards_container'>
							{resultSearch.isLoading === false &&
								resultSearch.data.result.map(item => {
									return (
										<Cards key={item.id} img={item.icon_url} content={item.value} url={item.url} />
									);
								})}
						</div>
					) : (
						<div className='cards_notfound'>
							<img src={Chuck} width={300} />
							Faça uma pesquisa para começar :D
						</div>
					)}
				</div>
			)}
		</>
	);
});

export default Main;
