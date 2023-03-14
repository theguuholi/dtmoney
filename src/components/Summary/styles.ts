import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1120px;
    margin-top: -10rem;
    margin-left: auto;
    margin-right: auto;

    div{
        background: var(--shape);
        padding: 1.5rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background{
            background: var(--green);
            color: #fff;
        }
    }
`;