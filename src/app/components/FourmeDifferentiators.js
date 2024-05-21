import { Link } from 'next-view-transitions'
// import Link from "next/link"

export default function FourmeDifferentiators() {
    return (
        <>
        <div className="wide">
            
            <section>
                <div id="fourme-differentiators-title">
                <div className="grid flex-column-center">
                    <div className="col-3-11">
                        <h3>What Sets 4me Apart</h3>
                        <div className='text-1 ptb'>Discover the unique advantages that set 4me apart in the realm of service management. Our platform is designed to optimize and enhance the way your organization handles IT and Enterprise Service Management, delivering unparalleled efficiency and value. Here are the key differentiators that make 4me the ultimate choice for your business:</div>
                    </div>
                </div>
            </div>

            <div id="fourme-differentiators">
                    <div className="grid flex-column-center">
                        <div id='pyramid' className="col-1-7">
                            <div className='divisions'>
                                <div className="one">
                                    <span>5</span>
                                </div>
                                <div className="two">
                                    <span>4</span>
                                </div>
                                <div className="three">
                                    <span>3</span>
                                </div>
                                <div className="four">
                                    <span>2</span>
                                </div>
                                <div className="five">
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className='divisions-explained col-7-13'>
                            <div className="flex-column-left">
                                <div className='flex-row-left bold'>
                                    <span>1</span>
                                    <div>Architecture & Trust</div>
                                </div>
                                <div className=''>4me&apos;s robust architecture ensures high reliability and security, built on a multi-tenant platform that guarantees data integrity and privacy. Trust is at the core of our design, providing a dependable foundation for all your service management needs.</div>
                            </div>
                            <div className="flex-column-left">
                                <div className='flex-row-left  bold'>
                                    <span>2</span>
                                    <div>Service Centric Framework</div>
                                </div>
                                <div className=''>Our service-centric framework focuses on the seamless delivery of services. It allows for efficient collaboration between internal and external service providers, ensuring that all aspects of service management are streamlined and integrated, leading to higher service quality and satisfaction.</div>
                            </div>
                            <div className="flex-column-left">
                                <div className='flex-row-left bold'>
                                    <span>3</span>
                                    <div>Standardisation & Extendability All-in-One</div>
                                </div>
                                <div className=''>4me combines standardization with flexibility, offering a unified platform that supports both out-of-the-box functionality and extensive customization. This all-in-one approach allows you to standardize processes while extending capabilities to meet unique business requirements without compromising on performance.</div>
                            </div>
                            <div className="flex-column-left">
                                <div className='flex-row-left bold'>
                                    <span>4</span>
                                    <div>Automatic Weekly Upgrades</div>
                                </div>
                                <div className=''>Stay ahead with 4me&apos;s automatic weekly upgrades, which ensure that you always have the latest features and improvements without any disruption to your operations. This continuous enhancement process keeps your service management system current and competitive.</div>
                            </div>
                            <div className="flex-column-left">
                                <div className='flex-row-left bold'>
                                    <span>5</span>
                                    <div>Visible Total Cost of Ownership (TCO)</div>
                                </div>
                                <div className=''>4me provides complete transparency into the total cost of ownership, helping you manage and forecast expenses effectively. With clear visibility into all cost components, you can make informed decisions and optimize your investments in service management.</div>
                            </div>
                        </div>
                    </div>
            </div>
            </section>

            

        </div>
        </>
    )
}