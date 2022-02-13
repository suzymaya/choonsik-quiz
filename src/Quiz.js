import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submit } from "./redux/modules/quiz";
import {Container, Title, Highlight, SelectGroup, Select} from "./elements";

const Quiz = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const problems = useSelector((state) => state.quiz.problems);
	const userAnswers = useSelector((state) => state.quiz.userAnswers);

	console.log(problems);
	console.log(userAnswers);

	const submitAnswer = (userAnswer) => {
		if (userAnswers.length <= problems.length) {
			dispatch(submit(userAnswer));
		} else {
			
		}
	};

	React.useEffect(() => {
		if (userAnswers.length === problems.length) {
			navigate("/result", {replace: true});
			return;
		}
	},[userAnswers]);

	return (
		<Container>
			<h1><Highlight>
					{userAnswers.length === problems.length
					? problems.length
					: userAnswers.length + 1
					}번
				</Highlight></h1>
			
			<Title>
				{
					userAnswers.length === problems.length 
					? problems[problems.length-1].question 
					: problems[userAnswers.length].question
				}
			</Title>
			<SelectGroup>
				<Select onClick={() => submitAnswer(true)}>O</Select>
				<Select onClick={() => submitAnswer(false)}>X</Select>
			</SelectGroup>
		</Container>
	);
};

export default Quiz;
