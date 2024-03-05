import Link from "next/link";
// import Image from "next/image";
// import home_arrow_btn_hero from "../../../public/home_arrow_btn_hero.svg"

export default function HomeRevolutioning() {
  return (
    <>
    <div className="wide">

        <div id="home-revolution">

            <div className="grid-center">
               
                <div className="home-revolution-image col-8-13"></div>
                <div className="home-revolution-text col-1-8">
                <h2 className="zero">Revolutionizing your workplace experience</h2>
                <div className="text-1 zero">At EXD, we believe in transforming the way your organization operates. Our solutions are crafted with a commitment to simplifying complexities, fostering innovation, and optimizing the digital employee experience. </div>
                <Link href={"/solution"} className="btn-10">
                    <div className="text-2">Discover how!</div>
                    <div className="">
                        <span className="material-symbols-rounded">arrow_forward</span>
                    </div>
                    {/* <Image src={home_arrow_btn_hero} width={68} height={68} alt="Image"></Image> */}
                </Link>
                </div>                

            </div>

            <div className="home-revolution-benefits wide">
                <div className="grid p-mobile-medium">
                        <div className="col-1-4">
                            <div className="text-1 bold">Seamless Integration</div>
                            <div className="zero"><p>Our solutions seamlessly integrate into your workflow, ensuring a cohesive and unified experience for your employees.</p></div>
                        </div>
                        <div className="col-4-7">
                            <div className="text-1 bold">Scalability</div>
                            <div className="zero"><p>Designed to grow with your business, our solutions are scalable, adapting to the evolving needs of your organization.</p></div>
                        </div>
                        <div className="col-7-10">
                            <div className="text-1 bold">User-Centric Approach</div>
                            <div className="zero"><p>Putting your employees at the center, our user-centric approach ensures that every solution enhances their daily experience.</p></div>
                        </div>
                        <div className="col-10-13">
                            <div className="text-1 bold">Innovative Design</div>
                            <div className="zero"><p>Innovation is at the heart of what we do. Our solutions leverage cutting-edge design to streamline processes and enhance productivity.</p></div>
                        </div>
                </div>
            </div>
        </div>

    </div>
    </>
  );
}