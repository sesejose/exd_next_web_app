import { Link } from 'next-view-transitions'
// import Link from "next/link"

export default function FourmeAttributes() {
    return (
        <>
        <div className="wide ptb-mobile-medium">

            <div id="fourme-attributes-title">

                <div className="grid-center">

                    <div className='col-1-8'>
                        <h3>Elevate Your Service Management Experience with 4me</h3> 
                        <div className='text-2 bold'>Easy Implementation, Advanced Automation, and Complete Enterprise Readiness</div>
                        {/* <h3 className="col-1-8">Unlock the power of seamless Service Management with 4me</h3> */}
                    </div> 
          
                    <div className="col-10-13">
                      <Link href={"/contact"} className="btn-purple">
                          <div className="text-2">Schedule a Demo</div>
                          <span className="material-symbols-rounded">arrow_forward</span>
                      </Link>
                    </div>
                
                </div>
            
            </div>

            <div id="fourme-attributes">
                <div className="fourme-attributes-container">
                {/* <div className="grid"> */}

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
                            <div className="text-1 bold">Streamlined Service Procurement</div>
                            <p>Discover the simplicity of our WebShop on 4me. Easily procure services and access resources with a user-friendly interface. Simplify service procurement for enhanced productivity.</p>
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

                        {/* More attributes  */}

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Low Code and Out-of-the-Box Capabilities</div>
                            <p>Leverage the power of low-code development and out-of-the-box features to customize and extend your service management solutions effortlessly.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Cloud-Based Delivery</div>
                            <p>Enjoy the benefits of cloud-based delivery, ensuring flexibility, scalability, and reliability for your service management needs.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">AI-Led Automation</div>
                            <p>Harness the power of artificial intelligence throughout the platform, automating repetitive tasks and enhancing operational efficiency.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Service-Centric Approach</div>
                            <p>Embrace a service-centric approach to ITSM and ESM, focusing on delivering value to end-users and aligning services with business objectives.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Integrated Knowledge Base</div>
                            <p>Access a comprehensive knowledge base seamlessly integrated into the platform, empowering users with relevant information and insights.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">SaaS, Multi-Tenant Architecture</div>
                            <p>Benefit from a SaaS, multi-tenant architecture, providing a secure and scalable environment for your service management operations.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Enterprise-Ready Certification</div>
                            <p>Ensure compliance with industry standards and regulations, with enterprise-ready certifications including ITIL competencies, SOC2, and ISO certifications.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Expanded Functionality</div>
                            <p>Extend the functionality of 4me beyond ITSM, with comprehensive ESM capabilities for HR, Finance, Marketing, and IT services.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Post-Sales Support</div>
                            <p>Receive dedicated post-sales support, including certifications, ongoing support, and services to optimize your service management journey.</p>
                        </div>

                        <div className="fourme-attribute p">
                            <div className="text-1 bold">Global Partner Network</div>
                            <p>Access a global partner network spanning various verticals, providing expertise and support for your service management initiatives.</p>
                        </div>


                </div>
            </div>

        </div>
        </>
    )
}