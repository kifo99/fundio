import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { logout } from '../../store/authSlice';
import { Section } from '../section/Section.jsx';
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
      <Section variant="about" propRef={aboutRef}>
        <div className="about" ref={aboutRef}>
          <div className="about__title">
            <h1>Who are we?</h1>
            <p></p>
          </div>
        </div>
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
