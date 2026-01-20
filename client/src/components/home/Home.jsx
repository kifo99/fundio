import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { logout } from '../../store/authSlice';
import { Section } from '../section/Section.jsx';
import './home.scss';
export function Home() {
  const dispatch = useDispatch();
  const backTextRef = useRef();
  return (
    <article className="section--wrapper">
      <Section
        variant="hero"
        imgUrl="/img/home-images/tomasz-filipek-joOVC9d-jis-unsplash.jpg"
        backTextRef={backTextRef}
      >
        <div className="section__title">
          <h1>Supporting Local Businesses</h1>
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
        </div>
        {/* <div className="section__body">
          <button>JOIN US</button>
        </div> */}
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
