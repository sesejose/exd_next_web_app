
import Image from "next/image";
import fourme_logo_white from "../../../public/fourme_logo_white.svg";

export default function FourmeAdvantages() {
    return (
        <>
        <div className="wide zero ptb-mobile-medium">

            <section>
                <div id="fourme-advantages-title">

                <div className="grid-center flex-row-center">
                    <h3 className="col-1-7">The 4me Advantages</h3>
                    <Image src={fourme_logo_white} className="col-12-13" width={83} height={28} alt="4me"/>
                </div>
                
                </div>

                <div id="fourme-advantages">
                    <div className="grid">

                        <div className="col-1-7">
                            <div className="fourme-advantage ptb">
                                <h1>01</h1>
                                <p>Why choose 4me? Because it embodies the simplicity, capability, and responsiveness demanded by a modern cloud-based service management platform. 4me caters to the contemporary need for flexible work and on-the-go insights, providing a simple and intuitive experience that delivers ample functionality and information, regardless of location or time.
                                </p>
                            </div>
                            <div className="fourme-advantage ptb">
                                <h1>02</h1>    
                                <p>In response to the lessons learned from complex functionality and license models, 4me takes a different approach. The platform introduces a straightforward and cost-effective functionality and license model, akin to a car wash structure. This clarity ensures transparency in what each plan offers, allowing seamless expansion and adjustment as your organization grows in maturity and size.</p>
                            </div>
                        </div>

                        <div className="col-7-13">
                            <div className="fourme-advantage ptb">
                                <h1>03</h1>
                                <p>For Service Agents immersed in daily structuring and insight-driven work, 4me prioritizes simplicity. The interface and available information are designed to be intuitive, minimizing the need for excessive scrolling.</p>
                            </div>
                            <div className="fourme-advantage ptb">
                                <h1>04</h1>    
                                <p>Last but certainly not least, 4me revolutionizes data sharing and segregation among collaborating parties. What is often a nightmare of integrations and maintenance becomes a streamlined and innovative process within the 4me platform.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            

        </div>
        </>
    )
}