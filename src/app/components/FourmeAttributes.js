import Link from "next/link"

export default function FourmeAttributes() {
    return (
        <>
        <div className="wide">

            <div id="fourme-attributes-title">

                <div className="grid-center">
                    
                    <h3 className="col-1-8">Unlock the power of seamless Service Management with 4me</h3>
          
                    <div className="col-10-13">
                      <Link href={"/solution"} className="btn-purple">
                          <div className="text-2">Schedule a Demo</div>
                          <span className="material-symbols-rounded">arrow_forward</span>
                      </Link>
                    </div>
                
                </div>
            
            </div>

            <div id="fourme-attributes">
                <div className="fourme-attributes-container">

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Swift Implementation</div>
                            <p>Unlock a seamless and rapid implementation with 4me. Our projects are known for their brevity and hassle-free execution.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Holistic Service Management</div>
                            <p>Elevate your service portal with 4me, covering ITSM, ESM, and SIAM. Scale effortlessly to an enterprise-wide service platform.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Automatic Maintenance</div>
                            <p>Enjoy maintenance-free operations on 4me&apos;s multi-tenant platform. Centralized updates and features roll out effortlessly.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Complete ITSM Suite</div>
                            <p>Access core ITSM features by default with 4me. From self-service to virtual agents and robust incident management, it&apos;s all inclusive.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Speedy, Reliable Cloud Deployment</div>
                            <p>Experience consistent, high-speed performance through 4me&apos;s cloud deployment. Enjoy zero downtime for reliable service access.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Built-In Security Measures</div>
                            <p>Rest assured with built-in security on AWS cloud, ensuring data integrity and protection against breaches.</p>
                        </div>
                        
                        <div className="fourme-attribute p">
                            <div className="text-1 bold">WebShop</div>
                            <p>Lorem ipsum...........</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Free Expansion Features</div>
                            <p>Unlock a seamless and rapid implementation with 4me. Our projects are known for their brevity and hassle-free execution.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Real-Time KPI Monitoring</div>
                            <p>Monitor KPIs in real-time using the intuitive dashboard. Enhance performance tracking for improved service levels and cost management.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Cost-Free Updates</div>
                            <p>Unlock a seamless and rapid implementation with 4me. Our projects are known for their brevity and hassle-free execution.</p>
                        </div>


                </div>
            </div>

        </div>
        </>
    )
}