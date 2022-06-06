import styled from "styled-components";

export const SUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .user-info {
    margin: 0 auto;
    margin-top: 20px;
    width: 100%;
    max-width: 1000px;
    background-color: rgba(9, 11, 16, 0.8);
    color: white;
    border: 1px solid rgb(55, 120, 232);
    min-height: 378px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    .item-left {
      flex: 1;
      text-align: center;
      width: 100%;
      .profile-pic {
        color: transparent;
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: all 0.3s ease;
        .-label {
          cursor: pointer;
          height: 150px;
          width: 150px;
<<<<<<< HEAD
          border-radius: 50%;
          border: 1px solid rgb(55, 120, 232);
=======
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
        }
        .ava {
          position: absolute;
          object-fit: cover;
          width: 150px;
          height: 150px;
          box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          z-index: 0;
<<<<<<< HEAD
          border: 1px solid rgb(55, 120, 232);
=======
          border: 1px solid black;
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
        }
        &:hover {
          .-label {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 10000;
            transition: background-color 0.2s ease-in-out;
            border-radius: 50%;
            margin-bottom: 0;
          }
        }
        span {
          display: inline-flex;
          padding: 0.2em;
          height: 2em;
        }
      }
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .item-right {
      flex: 2;
      width: 100%;
      min-height: 320px;
      display: flex;
      flex-direction: column;
<<<<<<< HEAD
      align-items: flex-start;
      justify-content: center;
      font-size: 23px;
=======
      align-items: center;
      justify-content: center;
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
      .btn-group {
        width: 100%;
        margin-top: 25px;
        margin-bottom: 5px;
        display: flex;
<<<<<<< HEAD
        justify-content: center;
=======
        justify-content: space-around;
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
      }

      .profile-images {
        position: absolute;
<<<<<<< HEAD
        width: 600px;
=======
        width: 400px;
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
        padding: 5px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
        .images-header {
          width: 100%;
<<<<<<< HEAD
          /* display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center; */
          text-align: center;
          h2 {
            /* flex: 5; */
            /* text-align: center; */
          }
          .exit {
            cursor: pointer;
            /* display: flex;
=======
          display: flex;
          flex-direction: row;
          align-items: center;
          h2 {
            flex: 5;
            text-align: right;
          }
          .exit {
            cursor: pointer;
            display: flex;
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
            justify-content: flex-end;
            margin-left: 5px;
            flex: 1;
            width: 100%;
            display: flex;
<<<<<<< HEAD
            justify-content: flex-end; */
            position: absolute;
            top: 15px;
            right: 10px;
          }
          .exit:hover {
            color: orange;
=======
            justify-content: flex-end;
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
          }
        }
        .image-row {
          display: flex;
          flex-direction: row;
          button {
            cursor: pointer;
            width: fit-content;
            height: fit-content;
            border-radius: 50%;
            display: inline-block;
            margin: 5px;
            .pic {
              border-radius: 50%;
            }
<<<<<<< HEAD
            .pic:hover {
              transform: scale(1.3);
              color: rgba(0, 0, 0, 0.5);
              z-index: -1;
            }
=======
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
          }
        }
      }
    }
  }
  .user-history {
    margin-top: 20px;
    width: 100%;
<<<<<<< HEAD
    max-width: 1000px;
=======
    max-width: 700px;
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
    border: 1px solid rgb(55, 120, 232);
    border-radius: 5px;
    text-align: center;
    background-color: rgba(9, 11, 16, 0.8);
    padding: 10px;
<<<<<<< HEAD
    font-size: 23px;
    margin-bottom: 45px;
=======
>>>>>>> fd48fb0555e1f3eb5537fc722cd1036dc1a4dcbe
  }
`;
