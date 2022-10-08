import styled from "styled-components";

export const AboutUs = styled.div`
  padding: 15vh 0;

  img {
    max-width: 900px;
    max-height: 600px;
    /* height: 100%; */
    margin-left: -120px;
  }

  .title {
    text-align: right;
    margin-bottom: 0;
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    place-items: center;
    .info {
      margin-left: 35px;
      p {
        text-align: justify;
        margin-bottom: 30px;
      }
    }
  }
`