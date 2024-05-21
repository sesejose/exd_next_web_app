import { Link } from 'next-view-transitions'
// import Link from "next/link";
import Image from "next/image";
// import home_arrow_btn_hero from "../../../public/home_arrow_btn_hero.svg"

export default function HeroHome() {
  return (
    <>
    <div className="wide">
      <section className="heros-container grid-center">
        <div className="home-hero-image col-7-13"></div>
        <div className="home-hero-text col-1-7">
        <h2>Liberate your potential with Service Management</h2>
          <div className='text-1 bold'>By removing the unproductive friction, we release the full potential of your customers & employees.</div>
          <p>
          Internal or external services can make or break your business regardless of if it is IT, finance, legal, HR or customer facing services. Many services in organizations are often partly manual and error prone in a nest of poorly integrated solutions. We simplify, streamline, and automate your business-critical services and processes.
          </p>
          <Link href={"/solution"} className="btn">
            <div className="text-1 bold">Explore Our Solution</div>
            <div className="icon-bg-gradient">
                <span className="material-symbols-rounded">arrow_forward</span>
            </div>
            {/* <Image src={home_arrow_btn_hero} width={68} height={68} alt="Image"></Image> */}
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}