export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm kelvin</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            As an experienced web developer, I specialize in creating dynamic
            and responsive websites that deliver exceptional user experiences.
            With a robust background in both front-end & back-end, I bring a
            holistic approach to building web applications that are not only
            visually appealing but also functionally robust and optimized for
            performance. I have a proven track record of working with a variety
            of technologies including HTML, CSS, JavaScript, React, and Node.js
          </p>
        </div>
        <a href="tel:+2349019121785" className="btn btn-primary">
          Get In Touch
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero-img.svg" alt="Hero Section" />
      </div>
    </section>
  );
}
