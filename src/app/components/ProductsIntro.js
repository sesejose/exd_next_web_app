import Link from "next/link";

export default function ProductsIntro() {
    return (
    <>
    <div className="wide ptb-medium">

    <div id="" className="grid">
        <div className="col-1-3">
        <div className="logo-4me-intro"></div>
        </div>
        <div className="col-3-7">
            <div className="pb"><h4>4me</h4></div>
            <div className="text-1 pb">Revolutionize your service management with 4me, a next-generation platform. Seamlessly collaborate with internal and external service providers, ensuring real-time insights and control over the quality and cost of your digital business services.</div>
            
                <Link href={"/fourme"} className="btn-secondary pt">
                    <div className="text-2">Learn more</div>
                    <div className="">
                        <span className="material-symbols-rounded">arrow_forward</span>
                    </div>
                </Link>
            
        </div>

        <div className="col-7-9">
            <div className="logo-autommate-intro"></div>
        </div>
        <div className="col-9-13">
            <div className="pb"><h4>Autom Mate</h4></div>
          <div className="text-1 pb">Discover the power of automation with Autom Mate. Our platform streamlines workflows, accelerates processes, and enhances overall efficiency. Embrace a new era of digital transformation with Autom Mate&aposs innovative solutions.</div>
          <Link href={"/autommate"} className="btn-secondary pt">
                    <div className="text-2">Learn more</div>
                    <div className="">
                        <span className="material-symbols-rounded">arrow_forward</span>
                    </div>
                </Link>
        </div>


    </div>

    </div>
    </>
  );
}