import { Link } from 'next-view-transitions'
// import Link from "next/link";

export default function HomeAdvantagesTitle() {
    return (
      <>
        <div id="" className="">
          <div id="home-advantages-title" className="grid-center">

          <div className="col-1-8">
            <h2>Unlock your path to success</h2>
          </div>
          
          <div className="col-10-13">
            <Link href={"/solution"} className="btn-purple">
                <div className="text-1 bold">Invest in Growth Today!</div>
                <span className="material-symbols-rounded">arrow_forward</span>
            </Link>
          </div>

          </div>
        </div>
      </>
    );
  }