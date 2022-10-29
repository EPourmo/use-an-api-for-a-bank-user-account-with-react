import PropTypes from "prop-types";

export default function Background(props) {
  return <div className="main bg-dark">{props.children}</div>;
}

Background.propTypes = {
  children: PropTypes.node,
};
