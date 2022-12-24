import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

import { Container, CardWrapper, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  const location = useLocation();
  return (
    <Container>
      {products.map(product => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`} state={{ from: location }}>
            <img
              src="https://via.placeholder.com/200x100"
              width="200"
              height="100"
              alt="Standart img"
            />
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

// Proptypes check
ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
