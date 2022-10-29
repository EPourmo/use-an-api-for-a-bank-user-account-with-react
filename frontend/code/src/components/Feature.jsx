import PropTypes from "prop-types";

export default function Feature(props) {
  const { image, alternativeText, title, description } = props;
  return (
    <div className="feature-item">
      <img src={image} alt={alternativeText} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

Feature.propTypes = {
  image: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
