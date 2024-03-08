import Link from "next/link";
import Image from "next/image";
// import home_arrow_btn_hero from "../../../public/home_arrow_btn_hero.svg"

export default function HeroHome() {
  return (
    <>
    <div className="wide">
      <div className="heros-container grid-center">
        <div className="home-hero-image col-8-13"></div>
        <div className="home-hero-text col-1-7">
          <h1>Liberate your team&apos;s potential</h1>
          <h4>By removing the unproductive friction of internal assistance, we release the full potential of your employees. </h4>
          <Link href={"/solution"} className="btn">
            <div className="text-1 bold">Explore Our Solution</div>
            <div className="icon-bg-gradient">
                <span className="material-symbols-rounded">arrow_forward</span>
            </div>
            {/* <Image src={home_arrow_btn_hero} width={68} height={68} alt="Image"></Image> */}
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}