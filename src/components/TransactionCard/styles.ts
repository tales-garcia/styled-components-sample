import styled from 'styled-components';

interface ContainerProps {
    status: string;
}

export const Container = styled.section<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    border-radius: 6px;
    border: 2px solid ${props => props.status};
    color: ${props => props.status};

    padding: 16px 18px;
    background-color: #ebebeb;

    & + section {
        margin-top: 16px;
    }
`;