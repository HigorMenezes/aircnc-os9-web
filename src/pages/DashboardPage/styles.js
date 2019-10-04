import styled from "styled-components";

export const Container = styled.div`
  .spot-list {
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin-bottom: 3rem;

    li {
      display: flex;
      flex-direction: column;

      header {
        width: 100%;
        height: 12rem;

        img {
          border-radius: 0.4rem;
          min-width: 100%;
          max-width: 100%;
          min-height: 100%;
          max-height: 100%;
        }
      }

      strong {
        margin-top: 1rem;
        font-size: 2.4rem;
        color: #444;
      }

      span {
        font-size: 1.5rem;
        color: #999;
      }
    }
  }
`;
