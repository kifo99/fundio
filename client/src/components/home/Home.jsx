import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { logout } from '../../store/authSlice';
import { Section } from '../section/Section.jsx';
import './home.scss';
export function Home() {
  const dispatch = useDispatch();

  return (
    <article className="section--wrapper">
      <Section
        variant="hero"
        imgUrl="/img/home-images/tomasz-filipek-joOVC9d-jis-unsplash.jpg"
      >
        <div className="section__title">
          <h1>Supporting Local Businesses, Together</h1>
        </div>
        <div className="section__body">
          <button>JOIN US</button>
        </div>
      </Section>
      <Section>
        <h1>Section 1</h1>
      </Section>
      <Section imgUrl="/img/home-images/jacopo-maiarelli--gOUx23DNks-unsplash.jpg">
        <h1>Section 1</h1>
      </Section>
      <Section>
        <h1>Section 1</h1>
      </Section>
    </article>
  );
}
{
  /* <section
        className="home-scroll-section"
        style={{
          backgroundImage:
            "url('/img/home-images/tomasz-filipek-joOVC9d-jis-unsplash.jpg')",
        }}
      >
        <h1>Section Number 1</h1>
      </section>
      <section
        className="home-scroll-section"
        style={{
          backgroundImage:
            "url('/img/home-images/dan-meyers-IQVFVH0ajag-unsplash.jpg')",
        }}
      >
        <h1>Section Number 2</h1>
      </section>
      <section
        className="home-scroll-section"
        style={{
          backgroundImage:
            "url('/img/home-images/jacopo-maiarelli--gOUx23DNks-unsplash.jpg')",
        }}
      >
        <h1>Section Number 3</h1>
      </section>
      <section
        className="home-scroll-section"
        style={{
          backgroundImage:
            "url('/img/home-images/maximilian-muller-cFYt748c9xY-unsplash.jpg')",
        }}
      >
        <h1>Section Number 4</h1>
      </section> */
}
