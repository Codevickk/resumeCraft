import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HomeLink = styled(Link)`
    background : #F9E1E1;
    display: inline-block;
    padding: 10px 15px;
    font-size: 25px;
    border-radius: 50%;
    border: none;
    color: #AF4242;
    margin-top: 40px;
    box-shadow: 0px 8px 40px rgba(95, 48, 226, 0.1);
    position: absolute;
    top: -70px;
    right: -0px;
    transition: background .3s linear;

    &:hover {
        background: #FCD3D3
    }
`;
