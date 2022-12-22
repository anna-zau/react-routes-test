import { ProductList } from '../components/ProducList/ProducList';
import { getProducts } from '../fakeAPI';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
