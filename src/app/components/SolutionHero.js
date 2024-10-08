import Link from "next/link";
import Image from "next/image";
// import home_arrow_btn_hero from "../../../public/home_arrow_btn_hero.svg"

export default function SolutionHero() {
  return (
    <>
    <div className="wide">
      <section className="heros-container grid-center">
        <div className="solution-hero-image col-8-13"></div>
        <div className="solution-hero-text col-1-8">
          <h2 className="mb-medium">We offer solutions tailored to elevate your service experience</h2>
          <div className="text-1 mtb-medium">At Experience Design, we understand that a seamless and effective service experience involves more than individual initiatives; it&apos;s about the end-to-end journey. Our approach is inspired by Porter&apos;s model, recognizing the interconnectedness of primary and supporting activities. We strive to make your customers and employees not just effective but also happy, transcending departmental silos to deliver world-class products and services right within the digital service experience.</div>
        </div>
      </section>
      </div>
    </>
  );
}