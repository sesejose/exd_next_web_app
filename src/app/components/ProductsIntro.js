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
            <div className="text-1 pb">Lorem ipsum dolor sit amet consectetur. Nunc dolor enim purus tempus risus neque sapien amet id. Gravida tempus aliquet tristique lacus pharetra proin nec aliquam gravida.</div>
            
                <Link href={"/fourme"} className="btn-secondary pt">
                    <div className="text-2">Learn more</div>
                    <div className="">
                        <span className="material-symbols-rounded">arrow_forward</span>
                    </div>
                </Link>
            
        </div>

        <div className="col-7-9">
            <div className="logo-outsystems-intro"></div>
        </div>
        <div className="col-9-13">
            <div className="pb"><h4>OutSystems</h4></div>
          <div className="text-1 pb">Lorem ipsum dolor sit amet consectetur. Nunc dolor enim purus tempus risus neque sapien amet id. Gravida tempus aliquet tristique lacus pharetra proin nec aliquam gravida.</div>
          <Link href={"/products"} className="btn-secondary pt">
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