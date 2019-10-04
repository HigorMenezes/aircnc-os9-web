import styled from "styled-components";

export const Container = styled.div`
  > p {
    font-size: 2.2rem;
    line-height: 3rem;
    margin-bottom: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.4rem;
      color: #444;
      font-weight: bold;
      margin-bottom: 0.8rem;
    }

    input {
      margin-bottom: 2rem;
      border: 0.1rem solid #ddd;
      border-radius: 0.2rem;
      height: 4.5rem;
      padding: 0 1.5rem;
      font-size: 1.6rem;
    }
  }

  button.btn {
    border: 0;
    border-radius: 0.2rem;
    height: 4.2rem;
    padding: 0 2rem;
    font-size: 1.6rem;
    font-weight: bold;
    background: #f05a5b;
    color: #fff;
    cursor: pointer;
  }

  button.btn:hover {
    background-color: #e14f50;
  }
`;
