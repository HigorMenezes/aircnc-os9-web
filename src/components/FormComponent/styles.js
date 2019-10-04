import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.4rem;
    color: #444;
    font-weight: bold;
    margin-bottom: 0.8rem;

    span {
      font-weight: normal;
      color: #999;
      font-size: 1.2rem;
    }
  }

  input {
    margin-bottom: 2rem;
    border: 0.1rem solid #ddd;
    border-radius: 0.2rem;
    height: 4.5rem;
    padding: 0 1.5rem;
    font-size: 1.6rem;
  }

  .upload-field {
    label {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 2rem;
      border: 0.1rem dashed #ddd;
      background-size: cover;
      cursor: pointer;
      height: 16rem;

      input {
        display: none;
      }
    }

    label.has-thumbnail {
      border: 0;

      img {
        display: none;
      }
    }
  }
`;
