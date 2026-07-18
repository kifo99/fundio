import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { Section } from '../../components/section/Section.jsx';
import { CardGrid } from '../../components/card/CardGrid.jsx';
import { ProductCard } from '../../components/product-card/ProductCard.jsx';
import { useNavigate } from 'react-router';
import './home.scss';
export function Home() {
  const dispatch = useDispatch();
  const backTextRef = useRef();
  const aboutRef = useRef();
  const navigate = useNavigate();

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
          <ProductCard
            imgUrl={
              '../../../public/img/home-images/andres-carreno-RqS7r2CzL68-unsplash.jpg'
            }
            productName={'Tomato'}
            price={'2.2'}
          />
          <ProductCard
            imgUrl={
              '../../../public/img/home-images/andres-carreno-RqS7r2CzL68-unsplash.jpg'
            }
            productName={'Tomato'}
            price={'2.2'}
          />
          <ProductCard
            imgUrl={
              '../../../public/img/home-images/andres-carreno-RqS7r2CzL68-unsplash.jpg'
            }
            productName={'Tomato'}
            price={'2.2'}
          />
          <ProductCard
            imgUrl={
              '../../../public/img/home-images/andres-carreno-RqS7r2CzL68-unsplash.jpg'
            }
            productName={'Tomato'}
            price={'2.2'}
          />
          <ProductCard
            imgUrl={
              '../../../public/img/home-images/andres-carreno-RqS7r2CzL68-unsplash.jpg'
            }
            productName={'Tomato'}
            price={'2.2'}
          />
          <ProductCard
            imgUrl={
              '../../../public/img/home-images/andres-carreno-RqS7r2CzL68-unsplash.jpg'
            }
            productName={'Tomato'}
            price={'2.2'}
          />
          <ProductCard
            imgUrl={
              '../../../public/img/home-images/andres-carreno-RqS7r2CzL68-unsplash.jpg'
            }
            productName={'Tomato'}
            price={'2.2'}
          />
          <ProductCard
            imgUrl={
              '../../../public/img/home-images/andres-carreno-RqS7r2CzL68-unsplash.jpg'
            }
            productName={'Tomato'}
            price={'2.2'}
          />
        </CardGrid>
      </Section>
      <Section>
        <h1>Section 1</h1>
      </Section>
    </article>
  );
}
