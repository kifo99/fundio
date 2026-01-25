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
          </div>
          <div className="about__body">
            <div className="about__body-title">
              <span>We </span>
              <span>are </span>
              <span>a </span>
              <span>platform </span>
              <span>dedicated </span>
              <span>to </span>
              <span>supporting </span>
              <span>local </span>
              <span>products </span>
              <span>and </span>
              <span>the </span>
              <span>people </span>
              <span>behind </span>
              <span>them, </span>
              <span>connecting </span>
              <span>them </span>
              <span>with </span>
              <span>a </span>
              <span>wider </span>
              <span>market.</span>
            </div>
            <div className="about__body-wrapper">
              <div className="card">
                <h3>What Do We Do?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio dolores velit beatae incidunt assumenda repellat,
                  error esse ad odio voluptates quia unde a vero. Rerum,
                  reiciendis. Error eos velit molestias!
                </p>
              </div>
              <div className="card">
                <h3>What We Represent?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus atque facilis assumenda, id consequuntur aut sint
                  veniam saepe dicta pariatur perspiciatis quibusdam provident
                  distinctio, voluptatibus similique qui, obcaecati praesentium
                  facere?
                </p>
              </div>
              <div className="card">
                <h3>What We Provide?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi alias libero deleniti molestiae expedita dolores enim
                  nobis adipisci eligendi quibusdam, architecto at ut, eos quis,
                  animi fuga magni vero modi?
                </p>
              </div>
            </div>
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
