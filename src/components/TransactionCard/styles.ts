import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    border-radius: 6px;
    border: 2px solid #ebebeb;

    padding: 16px 18px;
    background-color: #ebebeb;

    & + section {
        margin-top: 16px;
    }
`;