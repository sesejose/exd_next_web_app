import Link from "next/link"

export default function FourmeOptimize() {
    return (
        <>
        <div className="wide zero">

            <div id="fourme-optimize-title">
                <div className="grid-center flex-row-center">
                    <h3 className="col-3-11">Optimize Service Performance and Value</h3>                
                </div>
            </div>

            <div id="fourme-optimize-boxes">
                <div className="fourme-optimize-container">

                        <div className="fourme-optimize p">
                            <div className="text-1 bold">Elevated Service Valuation</div>
                            <p>Keeping tabs on the value each service brings is a pivotal aspect, and 4me simplifies this tracking process.</p>
                        </div>

                        <div className="fourme-optimize p">
                            <div className="text-1 bold">Insightful Command Center</div>
                            <p>Navigate through 4me&apos;s intuitive dashboard, a centralized hub providing comprehensive insights into every facet of your services.</p>
                        </div>

                        <div className="fourme-optimize p">
                            <div className="text-1 bold">Harmony Between Finance and IT</div>
                            <p>4me establishes a unified narrative, harmonizing the dialogue between finance and IT, ensuring a shared understanding of objectives.</p>
                        </div>

                        <div className="fourme-optimize p">
                            <div className="text-1 bold">Streamlined Collaboration Beyond Boundaries</div>
                            <p>With 4me&apos;s innovative architecture, collaboration extends effortlessly beyond organizational borders, fostering seamless data exchange and partnership.</p>
                        </div>

                </div>
            </div>

            <div id="fourme-try">
            <div className="grid flex-column-center text-center gap-2">
                <div className="col-3-11">
                    <h3 className="ptb">Experience 4me in Action</h3>
                    <div className="text-1 ptb">Unlock the potential of 4me by scheduling a personalized demonstration or initiating a one-on-one consultation. Let us guide you through the features and advantages that could transform your service management.</div>
                    <Link href={"/products"} className="btn-purple m-auto">
                        <div className="text-2">Book Your 4me Experience</div>
                        <div className="">
                            <span className="material-symbols-rounded">arrow_forward</span>
                        </div>
                    </Link>
                </div>
            </div>
            </div>
            
        </div>
        </>
    )
}