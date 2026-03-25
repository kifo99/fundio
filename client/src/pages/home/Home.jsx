import { useRef } from 'react';
import { Section } from '../../components/section/Section.jsx';
import { CardGrid } from '../../components/card/CardGrid.jsx';
import { ProductCard } from '../../components/product-card/ProductCard.jsx';
import { useNavigate } from 'react-router';
import './home.scss';

import { useGetProducts } from '../../queries/product.queries.js';

export function Home() {
  const backTextRef = useRef();
  const navigate = useNavigate();

  const { data: products, productsIsLoading } = useGetProducts();

  if (productsIsLoading) return <div>Loading...</div>;

  return (
    <article className="section--wrapper">
      <Section
        variant="hero"
        imgUrl="/img/home-images/tomasz-filipek-joOVC9d-jis-unsplash.jpg"
        propRef={backTextRef}
      >
        <div className="hero">
          <h1 className="hero__title">Supporting Local Businesses</h1>
          <div className="back__text" ref={backTextRef}>
            <span>T</span>
            <span>O</span>
            <span>G</span>
            <span>E</span>
            <span>T</span>
            <span>H</span>
            <span>E</span>
            <span>R</span>
          </div>
          <div className="hero__button">
            <button onClick={() => navigate('/signup')}>JOIN US</button>
          </div>
        </div>
      </Section>
      <Section>
        <CardGrid title={'Top selling products!'}>
          {!products ? (
            <div>Loading...</div>
          ) : (
            products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  imgUrl={product.productImg}
                  productName={product.productName}
                  price={product.productPrice}
                />
              );
            })
          )}
        </CardGrid>
      </Section>
      <Section>
        <h1>Section 1</h1>
      </Section>
    </article>
  );
}
