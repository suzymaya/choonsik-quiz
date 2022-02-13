// initial state (optional)
const initialState = {
	problems: [
		{
			question: "춘식이는 수컷이다",
			answer: false
		},
		{
			question: "춘식이가 제일 좋아하는 음식은 고구마다",
			answer: true
		},
		{
			question: "춘식이는 프로도의 찐친이다",
			answer: false
		},
		{
			question: "춘식이는 Next Level 댄스에서 ㄷ자를 만들 수 있다",
			answer: false
		},
		{
			question: "춘식이 바지는 파란색이다",
			answer: false
		}
	],
	userAnswers: []		
};

// Actions
const CREATE = "quiz/CREATE";
const SUBMIT = "quiz/SUBMIT";
const RESET = "quiz/RESET";

// Action Creators
export function create(question, answer) {
	return { type: CREATE, question, answer };
}

export function submit(userAnswer) {
	return {type: SUBMIT, userAnswer}
}

export function reset() {
	return {type: RESET}
}

// Reducer
export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case "quiz/CREATE":
			return {
				...state,
				problems: [
					...state.problems, 
					{
						question: action.question, 
						answer: action.answer
					}
				]
			};
		case "quiz/SUBMIT":
			return {...state, userAnswers: [...state.userAnswers, action.userAnswer]};
 		case "quiz/RESET":
			return {...state, userAnswers: []};
		default:
			return state;
	}
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
