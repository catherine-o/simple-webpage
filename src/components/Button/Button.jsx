import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

export const Button = ({ className, text }) => {
  return (
    <button
      type="button"
      className={
        twMerge(
          "bg-mistralOrange text-white text-nowrap rounded-md px-5 py-2",
          "hover:bg-mistralOrange/80",
          "focus:ring-4 focus:outline-none focus:ring-focusOrange/50",
          className
        )
      }
    >
      {text}
    </button>
  )
};

Button.propTypes = {
  /**
    Extra tailwind classes that can be passed to the button.
    */
  className: PropTypes.string,
  /**
    The text that appears on the button.
    */
  text: PropTypes.string,
};
