import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { logout } from '../../store/authSlice';
import './home.scss';
export function Home() {
  const dispatch = useDispatch();

  return (
    <article className="home-scroll-wrapper">
      <section
        className="home-scroll-section"
        style={{
          backgroundImage:
            "url('/img/home-images/tomasz-filipek-joOVC9d-jis-unsplash.jpg')",
        }}
      >
        <h1>This is section</h1>
      </section>
      <section
        className="home-scroll-section"
        style={{
          backgroundImage:
            "url('/img/home-images/dan-meyers-IQVFVH0ajag-unsplash.jpg')",
        }}
      >
        <h1>This is section</h1>
      </section>
      <section
        className="home-scroll-section"
        style={{
          backgroundImage:
            "url('/img/home-images/jacopo-maiarelli--gOUx23DNks-unsplash.jpg')",
        }}
      >
        <h1>This is section</h1>
      </section>
      <section
        className="home-scroll-section"
        style={{
          backgroundImage:
            "(url'/img/home-images/maximilian-muller-cFYt748c9xY-unsplash.jpg')",
        }}
      >
        <h1>This is section</h1>
      </section>
      <section
        className="home-scroll-section"
        style={{
          backgroundImage:
            "(url'/img/home-images/shelley-pauls-Zaiuy5dKeCk-unsplash.jpg')",
        }}
      >
        <h1>This is section</h1>
      </section>
    </article>
  );
}
