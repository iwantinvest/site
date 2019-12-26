import React from 'react';
import Head from '../components/head';

const Home = () => {
  return (
    <div>
      <Head title="I want invest: learn what, how and when to invest in"
       ogImage="/static/logo.png" />

      <div className="card">
        <img src="/static/logo.png" alt="I want invest logo" />
        <h1 className="title">Learn what, how and when to invest in</h1>
        <p>
          I want invest — this motivation requires a lot o patience and constant
          learning. You can treat this site as a manual I wish I had when I
          started investing money. Tweet me{' '}
          <a href="//twitter.com/iwantinvest" target="_blank" rel="noopener nofollow">@iwantinvest</a> on Twitter to let
          me know you
        </p>
        <p className="description">
          My name is <a href="//www.kopacki.net" target="_blank" rel="noopener nofollow">Tomasz Kopacki</a>, and I
          created this site to share whatever I was able to learn about
          investing money. It only seems to be an easy thing, but it's not.
          You'll see here a lot of my ideas. I will tell you about my best
          moves, and also about the worst ones!
        </p>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

        .card {
          font-family: 'Open Sans', sans-serif;
          font-size: 16px;
          width: 100%;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .card img {
          max-width: 100%; 
        }
        .title {
          margin: 0;
          width: 100%;
          line-height: 1.15;
          font-size: 2rem;
        }
        p {
          margin: 0;
          padding: 1rem 0 0;
          font-size: 1rem;
          color: #333;
          text-align: justify;
        }
      `}</style>
    </div>
  );
};

export default Home;
