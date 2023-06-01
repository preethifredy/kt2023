import propTypes from "prop-types";
import Link from "next/link";

import classNames from "classnames";
const ReadMoreLink = ({ color, linkText, link }) => {
    let buttonClassName =
      color === "light"
        ? "text-light"
        : color === "white"
        ? "text-white"
        : color === "yellow"
        ? "text-yellow"
        : "text-black";
    return (
      <Link href={link} className={`${buttonClassName} underline-0 read-more`}>
        <i className="la la-long-arrow-right" />
        {linkText}
      </Link>
    );
  };

const LinkButton = ({
    isAbsolute = false,
    buttonColor,
    isCustom = false,
    link,
    linkText,
  }) => {if (isAbsolute) {
    const buttonClass = classNames({
      "btn-block": true,
      "custom-btn-block": isCustom,
    });

    return (
      <div className={buttonClass}>
        <ReadMoreLink color={buttonColor} linkText={linkText} link={link} />
      </div>
    );
  } else {
    return <ReadMoreLink color={buttonColor} linkText={linkText} link={link} />;
  }
}

LinkButton.propTypes = {
    isAbsolute: propTypes.bool,
    isCustom: propTypes.bool,
    buttonColor: propTypes.string,
    link: propTypes.string.isRequired,
    linkText: propTypes.string.isRequired,
  };

export default LinkButton
