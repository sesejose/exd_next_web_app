import { Link } from 'next-view-transitions'
// import Link from "next/link";

export default function ProductsBenefit() {
    return (
    <>
    <div className="wide">        
        <section id="products-benefit">
            <div className="grid flex-column-center">

            <div className="col-3-11">
            <h2 className="ptb">Benefit from our extensive experience in Service Management advisory</h2>
            <div className="text-1 ptb">We guide and facilitate business support functions to leverage technology, making it easy for employees to access help and gain transparency. Explore the transformative potential of our Digital Platforms and embark on a journey to revolutionize your workplace. </div>

            <div className="peter-lasse-container ptb-medium">

                <div className="border-1-purple fit-content m-auto">
                    <div className="flex-column-center">
                        <div className="profile-picture peter-pic"></div>
                        <div className="flex-column-center">
                            <h4>Peter Ravnholt</h4>
                            <p>Contact me</p>
                            <div href={"mailto:pr@exd.dk"} className="btn-secondary">
                                <div>Contact Peter</div>
                                <span className="material-symbols-rounded">mail</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-1-purple fit-content m-auto">
                    <div className="flex-column-center">
                        <div className="profile-picture lasse-pic"></div>
                        <div className="flex-column-center">
                            <h4>Lasse Koch</h4>
                            <p>Contact Lasse</p>
                            <Link href={"mailto:lk@exd.dk"} className="btn-secondary">
                                <div>Contact Lasse</div>
                                <span className="material-symbols-rounded">mail</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
                


            </div>

            </div>
        </section>    
    </div>

    <div className="wide">
        <section id="products-ready">
            <div className="grid-center">
                <div className="flex-column-center col-4-10">
                    {/* <div>Guiding your digital EX journey</div> */}
                    <h4 className="zero pt-mobile-medium w-100">Ready to transform?</h4>
                    <div className="text-1 ptb">Explore the transformative potential of our Digital Platforms and embark on a journey to revolutionize your workplace.</div>
                    <Link href={"/fourme"} className="btn-10">
                        <div className="text-1">Learn more about 4me</div>
                        <div className="">
                            <span className="material-symbols-rounded">arrow_forward</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    </div>
    
    </>
  );
}