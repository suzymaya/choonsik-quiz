import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {reset} from './redux/modules/quiz';
import {Container, Title, Highlight, Button} from './elements';
import {css} from 'styled-components';

function Score() {
    const dispatch = useDispatch();

    const problems = useSelector((state) => state.quiz.problems);
    const userAnswers = useSelector((state) => state.quiz.userAnswers);
    
    const score = Math.round(problems.filter((prob, index) => {
        return prob.answer === userAnswers[index];
    }).length * (100 / problems.length));

    const resetScore = () => {
        dispatch(reset());
    }

    return (
        <Container>
            <Title><Highlight>{score}점</Highlight>이다냥</Title>
            <ImageBox score={score}/>
            <Link to="/"><Button onClick={() => {resetScore()}}>다시 도전하기</Button></Link>
        </Container>
    );
}

export default Score;

const ImageBox = styled.div`
    width: 180px;
    height: 180px;
    
    ${props => {
        if (props.score <= 50) {
            return css`
                background: url(https://c.tenor.com/RSFvAKQkWJoAAAAC/%EC%B6%98%EC%8B%9D-%EC%B6%98%EC%8B%9D%EC%9D%B4.gif);
            `;
        } else {
            return css`
                background: url(https://c.tenor.com/DtO_BhH5NUAAAAAC/chunsik-%EC%B6%98%EC%8B%9D.gif);
            `;
        }
    }}
    
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
    margin-bottom: 20px;
`;

//high
// https://c.tenor.com/DtO_BhH5NUAAAAAC/chunsik-%EC%B6%98%EC%8B%9D.gif

//mid
// https://c.tenor.com/rwVifx6NU60AAAAC/chunsik-%EC%B6%98%EC%8B%9D.gif

//low
// https://tenor.com/view/%EC%B6%98%EC%8B%9D-%EC%B6%98%EC%8B%9D%EC%9D%B4-chunsik-gif-24452897