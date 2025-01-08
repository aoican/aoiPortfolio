import React , { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import styles from './styles.module.scss';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        markers: false
      }
    })

    tl.to(el, {
      x: -500,
      duration: 0.3,
      ease: "power1.out",
    })

    // // Track scroll direction
    // let lastScroll = 0;

    // // GSAP ScrollTrigger configuration
    // ScrollTrigger.create({
    //   trigger: el,
    //   start: "top bottom", // Animation starts when the element enters the viewport
    //   end: "bottom top", // Animation ends when the element leaves the viewport
    //   onUpdate: (self) => {
    //     const scrollDirection = self.direction; // 1 for down, -1 for up
    //     const movement = scrollDirection === 1 ? 100 : -100; // Left to right for down, right to left for up

    //     gsap.to(el, {
    //       x: `+=${movement}`, // Incremental movement based on scroll direction
    //       duration: 0.3,
    //       ease: "power1.out",
    //     });

    //     lastScroll = self.scroll(); // Update the last scroll position
    //   },
    // });

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 5, yoyo: true });
  
    gsap.set(`.${styles.clientWrapper1}`, { zIndex: 2 });
    gsap.set(`.${styles.clientWrapper2}`, { zIndex: 1 });
  
    timeline.to({}, { duration: 5 });
  
    timeline
      .to(`.${styles.clientWrapper1}`, {
        y: '+=30',
        width: '300px',
        zIndex: 1,
        duration: 1,
        ease: 'power1.inOut',
      })
      .to(
        `.${styles.clientWrapper2}`,
        {
          y: '-=30',
          width: '330px',
          zIndex: 2,
          duration: 1,
          ease: 'power1.inOut',
        },
        '-=1'
      );
  
    timeline.to({}, { duration: 5 });
  
    timeline
      .to(`.${styles.clientWrapper1}`, {
        y: '-=30',
        width: '330px',
        zIndex: 2,
        duration: 1,
        ease: 'power1.inOut',
      })
      .to(
        `.${styles.clientWrapper2}`,
        {
          y: '+=30',
          width: '300px',
          zIndex: 1,
          duration: 1,
          ease: 'power1.inOut',
        },
        '-=1'
      );
  }, []);


  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.violetShape}></div>
        <img
          src="/images/aoi.png"
          alt="Aoi"
          className={styles.backgroundImage}
        />
        <h1 className={styles.aoiText}>AOI</h1>
        <h3 className={styles.head3}>
          UI/UX DESIGNER&nbsp;UI/UX DESIGNER&nbsp;UI/UX DESIGNER&nbsp;UI/UX DESIGNER
        </h3>
        <h1 className={styles.head1}>
          WEB DESIGNER&nbsp;WEB DESIGNER&nbsp;WEB DESIGNER&nbsp;WEB DESIGNER
        </h1>
        <h4 className={styles.head4}>
          developer&nbsp;developer&nbsp;developer&nbsp;developer&nbsp;developer
        </h4>
        <button className={styles.getInTouchButton}>Get in Touch</button>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.extendedSection}>
        <div className={styles.caseStudyWrapper}>
          <div className={styles.imageSection}>
            <img src="\images\18.png" alt="Prototyping" />
          </div>
          <div className={styles.textSection}>
            <h1 className={styles.title}>Case Studies</h1>
            <p className={styles.subtitle}>
              Explore these three distinct case studies to see how I can help you.
            </p>
            <div className={styles.buttonTextWrapper}>
              <button className={styles.learnMoreButton}>
                <span className={styles.arrow1}>&#8594;</span> 
              </button>
              <span className={styles.learnMoreText}>Learn more</span>
            </div>
          </div>
        </div>

        <div className={styles.wordsWithBordersContainer}>
          <div className={styles.wordsWithBorders}>
            <span className={styles.wordWithBorder}>Design</span>
            <span className={styles.wordWithBorder}>Development</span>
            <span className={styles.wordWithBorder}>User Interface</span>
          </div>
          <div className={styles.wordsWithBordersCenter}>
            <span className={styles.wordWithBorder}>Software Engineering</span>
            <span className={styles.wordWithBorder}>Social Media Manager</span>
          </div>
          <div className={styles.wordsWithBordersBottom}>
            <span className={styles.wordWithBorder}>Front-end</span>
            <span className={styles.wordWithBorder}>Graphics</span>
            <button className={styles.buttonWithBorder}>More <span className={styles.arrow}>&#8594;</span></button>
          </div>
        </div>

        <div className={styles.testimonialCarousel}>
          <div className={`${styles.testimonialWrapper} ${styles.clientWrapper1}`}>
            <img className={styles.clientImage} src="/images/client1.png" alt="Client1" />
            <div className={styles.clientComment}>
              <p>"Aoi does it the best in a short amount of time."</p>
                <button className={styles.buttonTestimonial}>Learn more</button>
            </div>
          </div>

          <div className={`${styles.testimonialWrapper} ${styles.clientWrapper2}`}>
            <img className={styles.clientImage} src="/images/client2.png" alt="Client2" />
            <div className={styles.clientComment}>
              <p>"Incredible experience. Highly recommend them for their professionalism."</p>
                <button className={styles.buttonTestimonial}>Learn more</button>
            </div>
          </div>
        </div>

        <div
          className={styles.circleWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.circle}>
            {isHovered ? (
              <DraftsOutlinedIcon className={styles.emailIcon} />
            ) : (
              <MailOutlineOutlinedIcon className={styles.emailIcon} />
            )}
          </div>
          <div className={styles.textCircle}>
            {Array.from('GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • ').map((char, index) => (
              <span
                key={index}
                className={styles.charCircle}
                style={{
                  transform: `rotate(${index * (360 / 45)}deg)`,
                  transformOrigin: 'center 6.5em',
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.caseStudyWrapper}>
          <div className={styles.imageSection}>
            <img src="\images\18.png" alt="Prototyping" />
          </div>
          <div className={styles.textSection}>
            <h1 className={styles.title}>Case Studies</h1>
            <p className={styles.subtitle}>
              Explore these three distinct case studies to see how I can help you.
            </p>
            <div className={styles.buttonTextWrapper}>
              <button className={styles.learnMoreButton}>
                <span className={styles.arrow1}>&#8594;</span> 
              </button>
              <span className={styles.learnMoreText}>Learn more</span>
            </div>
          </div>
        </div>

        <div className={styles.wordsWithBordersContainer}>
          <div className={styles.wordsWithBorders}>
            <span className={styles.wordWithBorder}>Design</span>
            <span className={styles.wordWithBorder}>Development</span>
            <span className={styles.wordWithBorder}>User Interface</span>
          </div>
          <div className={styles.wordsWithBordersCenter}>
            <span className={styles.wordWithBorder}>Software Engineering</span>
            <span className={styles.wordWithBorder}>Social Media Manager</span>
          </div>
          <div className={styles.wordsWithBordersBottom}>
            <span className={styles.wordWithBorder}>Front-end</span>
            <span className={styles.wordWithBorder}>Graphics</span>
            <button className={styles.buttonWithBorder}>More <span className={styles.arrow}>&#8594;</span></button>
          </div>
        </div>

        <div className={styles.testimonialCarousel}>
          <div className={`${styles.testimonialWrapper} ${styles.clientWrapper1}`}>
            <img className={styles.clientImage} src="/images/client1.png" alt="Client1" />
            <div className={styles.clientComment}>
              <p>"Aoi does it the best in a short amount of time."</p>
                <button className={styles.buttonTestimonial}>Learn more</button>
            </div>
          </div>

          <div className={`${styles.testimonialWrapper} ${styles.clientWrapper2}`}>
            <img className={styles.clientImage} src="/images/client2.png" alt="Client2" />
            <div className={styles.clientComment}>
              <p>"Incredible experience. Highly recommend them for their professionalism."</p>
                <button className={styles.buttonTestimonial}>Learn more</button>
            </div>
          </div>
        </div>

        <div
          className={styles.circleWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.circle}>
            {isHovered ? (
              <DraftsOutlinedIcon className={styles.emailIcon} />
            ) : (
              <MailOutlineOutlinedIcon className={styles.emailIcon} />
            )}
          </div>
          <div className={styles.textCircle}>
            {Array.from('GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • ').map((char, index) => (
              <span
                key={index}
                className={styles.charCircle}
                style={{
                  transform: `rotate(${index * (360 / 45)}deg)`,
                  transformOrigin: 'center 6.5em',
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.aboutMarquee}>
          <span ref={textRef}>ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT</span>
      </div>
      <div className={styles.aboutme}>
        <span>hi</span>
      </div>
    </>
  );
};

export default HomePage;
