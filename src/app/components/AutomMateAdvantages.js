import { Link } from 'next-view-transitions'
// import Link from "next/link"

export default function AutomMateAdvantages() {
    return (
        <>
        <div className="wide zero">

            <section>
                <div id="autom-mate-advantages-title">
                <div className="grid ptb-mobile-medium">
                    <h3 className="col-12">Market Place</h3>                
                </div>
            </div>

            <div id="autom-mate-advantages-boxes">
                <div className="autom-mate-advantages-container">

                        <div className="autom-mate-advantage p">
                            {/* <div className="text-1 bold">Elevated Service Valuation</div> */}
                            <p>Access and download hundreds of ready-to-use automation and integration bots from the Marketplace and deploy them immediately after entering the necessary configuration settings.  
                            </p>
                            <div className='bold'>
                                AI & ML
                            </div>

                        </div>

                        <div className="autom-mate-advantage p">
                            {/* <div className="text-1 bold">Insightful Command Center</div> */}
                            <p>Autom Mate AI Center enables deployment, management, and continuously improves machine learning (ML) models easily. Simply drag and drop ML models into your automation workflows and start automating cognitive processes.No data science background required!
                            </p>
                            <div className='bold'>
                            No / Low Code Platform
                            </div>
                        </div>

                        <div className="autom-mate-advantage p">
                            {/* <div className="text-1 bold">Harmony Between Finance and IT</div> */}
                            <p>Provides to design your process with no coding knowledge so everybody can use Autom Mate. If you need a custom code integration, you can use Python, JavaScript, and PowerShell actions in your automation. You do not need to download a plugin to use them.
                            </p>
                            <div className='bold'>
                            100% Web-Based
                            </div>
                            
                        </div>

                        <div className="autom-mate-advantage p">
                            {/* <div className="text-1 bold">Streamlined Collaboration Beyond Boundaries</div> */}
                            <p>Start to automate instantly without installing any additional software application from anywhere. Access easily from the browser and start to use 
                            </p>
                            <div className='bold'>Easier to Use</div>
                        </div>

                        <div className="autom-mate-advantage p">
                            {/* <div className="text-1 bold">Streamlined Collaboration Beyond Boundaries</div> */}
                            <p>Automate your processes in minutes on the design center with a user-friendly interface. From RPA developers to business users, everybody can use Auto Center to design their company processes easily.
                            </p>
                        </div>



                </div>
            </div>
            </section>

            

            
            
        </div>
        </>
    )
}