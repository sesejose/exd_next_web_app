import Image from "next/image"
import icon_flow_chart from "../../../public/icon_flow_chart.svg"
import icon_automated_process from "../../../public/icon_automated_process.svg"
import icon_artificial_intelligence from "../../../public/icon_artificial_intelligence.svg"

export default function AutomMateBoxes(){
    return <>
            <div id="fourme-optimize-title" className="wide">
                <section className="grid">
                    <div className="col-1-5">
                        <h3 className="mtb">How Autom Mate boost your Services</h3>
                    </div>
                    <div className="col-6-13">
                        <div className="text-1 bold pb-medium">Autom Mate is providing a state-of-the-art hyper-automation platform in the convergence between integration platform as a service (iPaaS), Robot Process Automation (RPA) and Artificial Intelligence (AI).</div>
                        <div className="pb">
                        Autom Mate is a web-based automation platform that is developed to help you create an automation process for ease of use by all types of users independent of technical level in the Cloud or On-Premises. It includes solutions that automate or integrate IT and business processes or applications. 
                        </div>
                        <div>
                        Autom Mate has ready to use library actions that meet all your business needs and are expanding every day. You can design your automation process to automate your manual process with these actions easily by using the drag-drop menu. This capability makes automation of all business processes easier, faster, and more cost-efficient. After developing your process, you can enable them with attended and unattended robots. Thus, you can get rid of the process that you do manually and routinely that do not add value to you. 
                        </div>
                    </div>
                </section>
            </div>

            <div id="fourme-optimize-boxes" className="wide">
                <section className="grid-center gap-5">

                        <div className="col-1-5 autom-mate-box">
                            <Image src={icon_flow_chart} width={160} height={90} alt="Service Engagement Experience Icon"></Image>
                            <div className="text-2 red">Start It</div>
                            {/* <p className="bold pt">Gear 1:</p> */}
                            <h4 className="ptb">Service Engagement Experience</h4>
                            <p>Autom Mate allows you with unprecedented easy an intuitive user interface to build and maintain flows of data between your key applications. It is the glue that makes your key applications working together in meaningful flows that accelerate your digital transformation. Autom Mate provide ready made libraries of connectors to common application platforms and it allows you to extend the library with your own applications without writing a single line of code. Automating your flows not only increase your productivity it also reduces errors in your business flows. </p>
                        </div>

                        <div className="col-5-9 autom-mate-box">
                            <Image src={icon_automated_process} width={160} height={90} alt="Service Operations and Delivery Experience Icon"></Image>
                            <div className="text-2 red">Build It</div>
                            {/* <p className="bold pt">Gear 2:</p> */}
                            <h4 className="ptb">Service Operations and Delivery Experience</h4>
                            <p>We understand that service operations and delivery are the backbone of any successful business. Autom Mate allows you to automate your operational processes and your service delivery to your customers. Integration with legacy applications can be done via robotics functionality mirroring user behaviors combined with application integrations. Autom Mate can help transform your operations by automating up to 50% of your service tasks. </p>
                        </div>

                        <div className="col-9-13 autom-mate-box">
                            <Image src={icon_artificial_intelligence} width={160} height={90} alt="Service Integration & Intelligence Icon"></Image>
                            <div className="text-2 red">Run It</div>
                            {/* <p className="bold pt">Gear 3:</p> */}
                            <h4 className="ptb">Service Integration & Intelligence</h4>
                            <p>Service Technology Optimization becomes your strategic advantage, and every day brings new opportunities to elevate your service operations to the next level. Step into the future where robots don&apos;t just do, but think. Amplify your tech capabilities, without the hefty developer price tags. Autom Mate&apos;s future-proof automation & integration capabilities are here to completely transform your service technology.</p>
                            <p className="bold">Frequent Integrations by domain:</p>   
                        </div>

                </section>
            </div>
    
    </>
}      
            