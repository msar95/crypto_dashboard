
import styled, {css} from "styled-components";

const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    margin-bottom: 50px;
`
const Logo = styled.div`
    font-size: 1.5em;
`
const ControlButtonElem = styled.div`
    cursor:pointer;
    text-transform: capitalize;
    ${props =>  props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
`}
`
function ControlButton ({name, active}){
    return (
        <ControlButtonElem active={active}>
            {name}
        </ControlButtonElem>
    )
}
export default function (){ // Bar -> ist der Container des CSS-Grid
    return <Bar>
        <Logo>CryptoDash</Logo>
        <div/>
        <ControlButton active name="dashboard"/>
        <ControlButton active name="settings"/>
    </Bar> // die Divs sind die Children
}