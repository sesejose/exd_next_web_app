import Link from "next/link";

export default function SolutionUsm() {
    return (
    <>
    <div className="wide">

        <div className="grid">
        <h3 className="col-12">Unified Service Management (USM)</h3>
        </div>
    <div id="solution-usm" className="grid">
        <div className="col-1-9">
            <div className="text-1">
                In today&apos;s fast-paced and interconnected world, effective management of service delivery is crucial for organizations across industries. Whether it&apos;s IT services, customer support, or facility management, the ability to deliver high-quality services efficiently can make or break a business. 
                <br></br>
                At its core, USM is a universal methodological approach to managing service delivery. It provides organizations with a simple standardized management system to effectively oversee their people, resources, processes, and services. By explicitly defining a service management architecture, USM establishes a set of rules and guidelines for organizing and governing a service organization. This architecture serves as the foundation for building a successful service organization, allowing for local adaptations while maintaining consistency in decision-making and service delivery. 
                <br></br>
                By adopting a simple standardized management system, organizations gain control over their processes, tools and services, leading to increased quality, efficiency and productivity as a business outcome. 
                <br></br>
                USM provides a clear and simple method for managing services, allowing organizations to deliver consistent and high-quality service experiences for employees and customers. 
                <br></br>
                For more information about USM - USM Portal - 
                <Link href={'https://usm-portal.com/?lang=en'} target="_blank" className="text-link">
                    The unified management system for all service providers - USM Portal (usm-portal.com)
                </Link>            
            </div>

            </div>
            <div className="col-10-13">
            <div>
                <ul className="our-services">
                    <li className="bold">Our USM Services:</li> 
                    <li>USM Training </li>
                    <li>USM Coaching</li>
                    <li>USM Assessments</li>
                </ul>
            </div>

            <div >
                <ul className="our-services">
                    <li className="bold">USM Downloads from the USM Portal:</li>
                    <li>
                        <Link href={'http://google.com'} target="_blank" className="btn-download zero">
                            <div className="counter">An Introduction to USM – Document </div>
                            <span className="material-symbols-rounded">download</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'http://google.com'} target="_blank" className="btn-download zero">
                            <div className="counter">ESM the tool providers new cash cow – Document</div>
                            <span className="material-symbols-rounded">download</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'http://google.com'} target="_blank" className="btn-download zero">
                            <div className="counter">ESM with USM 20 guidelines – Document</div>
                            <span className="material-symbols-rounded">download</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'http://google.com'} target="_blank" className="btn-download zero">
                            <div className="counter">Government as a service provider – Document</div>
                            <span className="material-symbols-rounded">download</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'http://google.com'} target="_blank" className="btn-download zero">
                            <div className="counter">Demystifying the term process – Document</div>
                            <span className="material-symbols-rounded">download</span>
                        </Link>
                    </li>
                </ul>
            </div>

            

                
          
        </div>
    </div>

    </div>
    </>
  );
}