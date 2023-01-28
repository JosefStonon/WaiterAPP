// este aquivo é .ts por que nao contem nenhum componente html, tipo <>

import styled from 'styled-components';

export const Container = styled.header`
background: #D73035;
display: flex;
justify-content: center;
height: 198px;
align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-datails {
        h1 {
            color: #fff;
            font-size: 16px;
        }

        h2 {
            font-weight: 400;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
`;


