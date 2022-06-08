import styled from "styled-components";

export const SUserItem = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  /* max-width: 600px; */
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 1fr;
  text-align: center;
  margin: 10px 0;
  font-size: 1rem;
  padding: 15px 0px;
  border-bottom: 1px solid rgb(23, 39, 61);
  background-image: linear-gradient(to right, rgb(5, 10, 14, 0.8), rgb(23, 39, 61, 0.9));
  .user-item-user {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .user-info-btn {
      position: relative;
      margin-left: 20px;
      button {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: white;
        border: none;
        background-color: #1b77f0;
        border-radius: 50%;
        padding: 10px;
        font-size: 1rem;
      }
      .user-info-icon:hover {
        transform: scale(1.1);
        color: green;
      }
      .info-container {
        z-index: 1;
        position: absolute;
        left: 0%;
        background-color: rgba(9, 11, 16, 1);
        color: white;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid rgb(55, 120, 232);
        box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
          0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
          0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
        width: 400px;
        margin: 0 auto;
        font-size: 0.8rem;
      }
    }
  }
  .delete {
    cursor: pointer;
    .delete-btn:hover {
      color: red;
      transform: scale(1.1);
    }
  }
`;
