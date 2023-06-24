import PropTypes from "prop-types";
import { ButtonStyled, ButtonText } from "./Button.styled";

const Button = ({
  page,
  setCurrentPageNumber,
  userId,
  checkSubscription,
  isFollowed,
}) => {
  return (
    <ButtonStyled
      type="button"
      onClick={() => {
        if (page === "main") {
          setCurrentPageNumber((currentPageNumber) => (currentPageNumber += 1));
          return;
        }

        if (checkSubscription) {
          checkSubscription(userId);
          return;
        }
      }}
      isFollowed={isFollowed}
    >
      {isFollowed && <ButtonText>Following</ButtonText>}
      {page === "tweet" && !isFollowed && <ButtonText>Follow</ButtonText>}
      {page === "main" && <ButtonText>Load More</ButtonText>}
    </ButtonStyled>
  );
};

Button.propTypes = {
  page: PropTypes.string.isRequired,
  setCurrentPageNumber: PropTypes.func,
  userId: PropTypes.string,
  checkSubscription: PropTypes.func,
  isFollowed: PropTypes.bool,
};

export default Button;
