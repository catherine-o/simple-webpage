import PropTypes from "prop-types";

const Button = ({ classProps, text }) => {
  return (
    <button
      type="button"
      className={`${classProps} text-white bg-mistralOrange text-nowrap hover:bg-mistralOrange/80 focus:ring-4 focus:outline-none focus:ring-focusOrange/50 rounded-md px-4 py-2`}
    >
      {text}
    </button>
  )
};

Button.propTypes = {
  /**
    Extra tailwind classes that can be passed to the button.
    */
  classProps: PropTypes.string,
  /**
    The text that appears on the button.
    */
  text: PropTypes.string,
};

export default Button;
