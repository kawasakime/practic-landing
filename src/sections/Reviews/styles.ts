import styled from "styled-components";

export const Reviews = styled.div`
  padding: 70px 0;

  .title {
    text-align: center;
  }
`;

export const ReviewsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ReviewsContainer = styled.div<{ slidesCount: number; leftPosition: number }>`
  position: relative;
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.slidesCount}, 100%);
  place-items: center;
  margin-top: 50px;
  right: ${(props) => props.leftPosition}%;
  transition: right ${({ theme }) => theme.duration};
`;

export const ImageContainer = styled.div<{ imgUrl: string }>`
  min-height: 150px;
  min-width: 150px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  transform: translateX(-50%);
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center center;
  background-size: cover;
`;

export const ReviewItem = styled.div`
  min-height: 200px;
  height: 100%;
  max-width: 600px;
  min-width: 300px;
  background: ${({ theme }) => theme.colors.primary}08;
  display: flex;
  align-items: center;
  margin-left: 90px;
  padding-right: 15px;
  margin-right: 15px;

  img {
    transform: translateX(-50%);
    max-width: 150px;
    max-height: 150px;
    min-height: 150px;
    min-width: 150px;
    border-radius: 50%;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ItemWrapper = styled.div`
  position: relative;
  margin-left: -50px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Rating = styled.div`
  display: flex;
  font-size: 24px;
  position: absolute;
  top: 0;
  transform: translateY(-50%) translateX(-4px);

  .active {
    fill: #e7d21b;
  }
`;

export const Arrows = styled.div`
  position: relative;
  margin-top: 30px;
  font-size: 30px;
  display: flex;
  justify-content: center;

  & > * {
    fill: ${({ theme }) => theme.colors.primary};
    margin: 0 15px;
    cursor: pointer;
    transition: ${({ theme }) => theme.duration};

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;
