import { Link } from 'next-view-transitions'
// import Link from "next/link";

export default function SolutionUsm() {
    return (
    <>
    <div className="wide">

        <section>
            <div className="grid">
        <h3 className="col-12">Unified Service Management (USM)</h3>
            </div>

            <div id="solution-usm" className="grid">
        <div className="col-1-9">
            <div className="text-1">
                In today&apos;s fast-paced and interconnected world, effective management of service delivery is crucial for organizations across industries. Whether it is IT (Information Technology) services, customer support, or facility management, the ability to deliver high-quality services efficiently can make or break a business. 
                <br></br>
                At its core, USM is a universal methodological approach to managing service delivery. It provides organizations with a simple standardized management system to effectively oversee their people, resources, processes, and services. By explicitly defining a service management architecture, USM establishes a set of rules and guidelines for organizing and governing a service organization. This architecture serves as the foundation for building a successful service organization, allowing for local adaptations while maintaining consistency in decision-making and service delivery.  
                <br></br>
                By adopting a simple standardized management system, organizations gain control over their processes, tools, and services, leading to increased quality, efficiency, and productivity as a business outcome. 
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
                        <a href={'/download/An Introduction to USM.pdf'} target="_blank" className="btn-download zero" download="An Introduction to USM">
                            <div className="counter">An Introduction to USM – Document </div>
                            <span className="material-symbols-rounded">download</span>
                        </a>
                    </li>
                    <li>
                        <a href={'/download/ESM the tool providers new cash cow.pdf'} target="_blank" className="btn-download zero" download="ESM the tool providers new cash cow">
                            <div className="counter">ESM the tool providers new cash cow – Document</div>
                            <span className="material-symbols-rounded">download</span>
                        </a>
                    </li>
                    <li>
                        <a href={'/download/ESM with USM 20 guidelines.pdf'} target="_blank" className="btn-download zero" download="ESM with USM 20 guidelines">
                            <div className="counter">ESM with USM 20 guidelines – Document</div>
                            <span className="material-symbols-rounded">download</span>
                        </a>
                    </li>
                    <li>
                        <a href={'/download/Government as a service provider.pdf'} target="_blank" className="btn-download zero" download="Government as a service provider">
                            <div className="counter">Government as a service provider – Document</div>
                            <span className="material-symbols-rounded">download</span>
                        </a>
                    </li>
                    <li>
                        <a href={'/download/Demystifying the term process.pdf'} target="_blank" className="btn-download zero" download="Demystifying the term process">
                            <div className="counter">Demystifying the term process – Document</div>
                            <span className="material-symbols-rounded">download</span>
                        </a>
                    </li>
                </ul>
            </div>

            

                
          
        </div>
            </div>
        </section>

        

    </div>
    </>
  );
}