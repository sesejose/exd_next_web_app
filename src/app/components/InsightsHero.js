import Link from "next/link";
import Image from "next/image";
// import home_arrow_btn_hero from "../../../public/home_arrow_btn_hero.svg"

export default function InsightsHero() {
  return (
    <>
    <div className="wide">
      <section className="heros-container grid-center">
        <div className="insights-hero-image col-8-13"></div>
        <div className="insights-hero-text col-1-7">
          <h2 className="mb-medium">Join the Conversation!</h2>
          <div className="text-1 mtb-medium">Welcome to our Insights hub, your go-to destination for the latest news, articles, and stories in the world of [Your Company Name]. Explore a wealth of knowledge covering diverse topics ranging from industry trends to customer success stories. Stay informed, inspired, and connected with us.</div>
        </div>
      </section>
    </div>
    </>
  );
}