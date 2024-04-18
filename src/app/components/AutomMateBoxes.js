import Image from "next/image"
import icon_flow_chart from "../../../public/icon_flow_chart.svg"
import icon_automated_process from "../../../public/icon_automated_process.svg"
import icon_artificial_intelligence from "../../../public/icon_artificial_intelligence.svg"

export default function AutomMateBoxes(){
    return <>
            <div id="fourme-optimize-title">
                <div className="grid-center flex-row-center">
                    <div className="col-4-10 text-center">
                        <h2 className="mtb">How Autom Mate boost your Services</h2>
                        <div className="text-1 bold">Autom Mate is providing a state-of-the-art hyper-automation platform in the convergence between integration platform as a service (iPaaS), Robot Process Automation (RPA) and Artificial Intelligence (AI).</div>
                    </div>
                </div>
            </div>

            <div id="fourme-optimize-boxes">
                <div className="grid-center">

                        <div className="col-1-5 autom-mate-box">
                            <Image src={icon_flow_chart} width={160} height={90} alt="Service Engagement Experience Icon"></Image>
                            <div className="text-2 red">Start It</div>
                            <p className="bold pt">Gear 1:</p>
                            <h4 className="ptb">Service Engagement Experience</h4>
                            <p>Autom Mate allows you with unprecedented easy an intuitive user interface to build and maintain flows of data between your key applications. It is the glue that makes your key applications working together in meaningful flows that accelerate your digital transformation. Autom Mate provide ready made libraries of connectors to common application platforms and it allows you to extend the library with your own applications without writing a single line of code. Automating your flows not only increase your productivity it also reduces errors in your business flows. </p>
                        </div>

                        <div className="col-5-9 autom-mate-box">
                            <Image src={icon_automated_process} width={160} height={90} alt="Service Operations and Delivery Experience Icon"></Image>
                            <div className="text-2 red">Build It</div>
                            <p className="bold pt">Gear 2:</p>
                            <h4 className="ptb">Service Operations and Delivery Experience</h4>
                            <p>We understand that service operations and delivery are the backbone of any successful business. Autom Mate allows you to automate your operational processes and your service delivery to your customers. Integration with legacy applications can be done via robotics functionality mirroring user behaviors combined with application integrations. Autom Mate can help transform your operations by automating up to 50% of your service tasks. </p>
                        </div>

                        <div className="col-9-13 autom-mate-box">
                            <Image src={icon_artificial_intelligence} width={160} height={90} alt="Service Integration & Intelligence Icon"></Image>
                            <div className="text-2 red">Run It</div>
                            <p className="bold pt">Gear 3:</p>
                            <h4 className="ptb">Service Integration & Intelligence</h4>
                            <p>Service Technology Optimization becomes your strategic advantage, and every day brings new opportunities to elevate your service operations to the next level. Step into the future where robots don&apos;t just do, but think. Amplify your tech capabilities, without the hefty developer price tags. Autom Mate&apos;s future-proof automation & integration capabilities are here to completely transform your service technology.</p>
                            <p className="bold">Frequent Integrations by domain:</p>   
                        </div>

                </div>
            </div>
    
    </>
}      
            