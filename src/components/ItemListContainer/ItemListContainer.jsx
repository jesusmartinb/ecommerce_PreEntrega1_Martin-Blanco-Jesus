import PropTypes from 'prop-types';

const ItemListContainer = ({greeting}) => {
  return (
    <div className="flex justify-center items-center h-80">
      <h2>{greeting}</h2>
    </div>
  )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
}

export default ItemListContainer
