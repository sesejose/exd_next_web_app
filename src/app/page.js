//This is the Homepage

import general from "../app/styles/general.css"
import desktop from "../app/styles/general.css"
import HomeHero from "./components/HomeHero";
import HomeAdvantages from "./components/HomeAdvantages";
import HomeRevolutioning from "./components/HomeRevolutioning";
import EmblaCarousel from "./components/EmblaCarousel";
import CarouselLogos from "./components/CarouselLogos"
// import HomeAdvantagesTitle from "./components/HomeAdvantagesTitle";
// import HomeClientStories from "./components/EmblaCarousel";

// OPTIONS is a variable with an empty object (that will be completed later on)
// SLIDE_COUNT is another variable with a value for the times amount of the slides in the carousel
// SLIDES is a variable with the static method "Array.from" that creates a copy of an iterable array - in this case the SLIDE_COUNT (?)
// I pass that array SLIDE and the empty object to be created to the component in the tag !

// Embla Caroulsel
// import '../app/styles/embla.css'
// import general from '../app/styles/general.css'

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const OPTIONS_LOGOS = { loop: true }
const SLIDE_COUNT_LOGOS = 10
const SLIDES_LOGOS = Array.from(Array(SLIDE_COUNT_LOGOS).keys())

export default function Home() {
  return (
    
    <>
      <HomeHero></HomeHero>
      <HomeAdvantages></HomeAdvantages>
      <HomeRevolutioning></HomeRevolutioning>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <CarouselLogos slides={SLIDES_LOGOS} options={OPTIONS_LOGOS} />
    </>
    
  );
}


// It was the First Return from Next when creating the project
//import Image from "next/image";
//import styles from "./page.module.css";
{/* <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main> */}