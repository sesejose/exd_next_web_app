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
                <div className="grid-center flex-column-center pb-medium">
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
                                <div className=''>4me&apos;s multi-tenant architecture ensures high reliability and data security, providing a trusted foundation for your service management needs.</div>
                            </div>
                            <div className="flex-column-left">
                                <div className='flex-row-left  bold'>
                                    <span>2</span>
                                    <div>Service Centric Framework</div>
                                </div>
                                <div className=''>Our framework streamlines service delivery, enhancing collaboration between internal and external providers for improved service quality.</div>
                            </div>
                            <div className="flex-column-left">
                                <div className='flex-row-left bold'>
                                    <span>3</span>
                                    <div>Standardisation & Extendability All-in-One</div>
                                </div>
                                <div className=''>4me offers both standardization and customization, enabling you to standardize processes while tailoring capabilities to your specific needs.</div>
                            </div>
                            <div className="flex-column-left">
                                <div className='flex-row-left bold'>
                                    <span>4</span>
                                    <div>Automatic Weekly Upgrades</div>
                                </div>
                                <div className=''>Benefit from 4me&apos;s automatic weekly upgrades, keeping your service management system up-to-date with the latest features without disruptions.</div>
                            </div>
                            <div className="flex-column-left">
                                <div className='flex-row-left bold'>
                                    <span>5</span>
                                    <div>Visible Total Cost of Ownership (TCO)</div>
                                </div>
                                <div className=''>4me provides transparent insights into the total cost of ownership, allowing for better cost management and investment optimization.</div>
                            </div>
                        </div>
                </div>
            </div>
            </section>

            

        </div>
        </>
    )
}