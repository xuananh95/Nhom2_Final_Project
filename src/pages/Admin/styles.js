import styled from "styled-components";

export const SAdmin = styled.div`
  background-color: rgba(9, 11, 16, 0.8);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid rgb(55, 120, 232);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background-image: linear-gradient(to right, rgb(5, 10, 14, 0.8), rgb(23, 39, 61, 0.9));
  .admin-page-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px;
    .admin-logo {
      margin-right: 20px;
    }
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .user-item-header {
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 1fr;
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
    color: rgb(55, 120, 232);
    border-radius: 5px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgb(23, 39, 61);
  }
`;
