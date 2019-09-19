import { useState, useEffect } from "react";
import { getJokesCategory, getCategory, getSearch } from "../store/duck/jokey/services";

const initialJokey = {
	data: [],
	isLoading: true,
	error: "",
};

const useJokesCategory = category => {
	const [data, setData] = useState(initialJokey);
	const [hasError, setHasError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const callFetchJokey = async () => {
		const setHookState = (_data, _hasError, _isLoading) => {
			setData(_data);
			setHasError(_hasError);
			setIsLoading(_isLoading);
		};

		try {
			setHookState({ ...data }, false, true);
			const result = await getJokesCategory(category);
			setHookState(result, false, false);
		} catch (err) {
			setHookState({ jokey: [] }, true, false);
		}
	};

	return [{ data, hasError, isLoading }, callFetchJokey];
};

const useCategory = () => {
	const [hook, setHook] = useState(initialJokey);

	useEffect(() => {
		(async () => {
			try {
				setHook({ data: [], isLoading: true, error: "" });

				const response = await getCategory();
				console.log("hook :", response);
				setHook({ data: response, isLoading: false, error: "" });
			} catch (err) {
				return setHook({ data: [], isLoading: false, error: err });
			}
		})();
	}, []);
	return hook;
};

const useSearchJokey = filters => {
	const [hook, setHook] = useState(initialJokey);
	useEffect(() => {
		(async () => {
			try {
				setHook({ data: [], isLoading: true, error: "" });
				const response = await getSearch(filters);
				setHook({
					data: response,
					isLoading: false,
					error: "",
				});
			} catch (error) {
				setHook({ data: [], isLoading: true, error: error });
			}
		})();
	}, [filters]);
	return hook;
};

export { useJokesCategory, useCategory, useSearchJokey };
