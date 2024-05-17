// 'use client'

import Link from "next/link";
import Image from "next/image";

import fourme_siam from "../../../public/fourme_siam.svg"


export default function FourmeSiam(){
  return (
    <>
    <div className="wide">
        <div id="fourme-siam" className="ptb-mobile-medium">

            <div className="grid-center">
                <h2 className="col-3-11">Embracing SIAM for Seamless Service Collaboration</h2>
            </div>

            <div className="grid">
                <p className="col-3-7">
                SIAM, or Service Integration and Management, represents a paradigm shift in managing end-to-end collaboration between internal and external service providers within an organization. As businesses adopt increasingly complex and specialized outsourcing models, the demand for comprehensive insight and control across the entire value chain becomes paramount.<br></br>
                4me stands out as one of the pioneers, embedding the SIAM concept into its architecture and operating model. 
                </p>
                
                <p className="col-7-11">This integration enables organizations to effectively measure and control the quality of products and services end-to-end, mitigating the risk of quality breaches and unmet expectations. With 4me, providers can efficiently service multiple customers from a single service management application.</p>
                
            </div>

            <div id="" className="grid-center">
                <div className="fourme-siam-image col-12"></div>
                    {/* <Image src={fourme_siam} alt={"4me"} width={""} height={""} className="col-12"/> */}
            </div>

        </div>    
    </div>

    
    </>
  );
}

        