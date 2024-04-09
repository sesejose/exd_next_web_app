// 'use client'

import Link from "next/link";
import Image from "next/image";

import one from "../../../public/screens/one.png"
import two from "../../../public/screens/two.png"
import three from "../../../public/screens/three.png"
import four from "../../../public/screens/four.png"
import five from "../../../public/screens/five.png"
import six from "../../../public/screens/six.png"


export default function FourmeMobile(){
  return (
    <>
    <div className="wide ptb-large">
            <div id="fourme-mobile" className="grid-center">
                
                    <Image src={one} alt={"4me"} width={"195"} height={"422"} className="col-1-3 screen"/>
                
                
                <Image src={two} alt={"4me"} width={"195"} height={"422"} className="col-3-5 screen"/>
                
                
                <Image src={three} alt={"4me"} width={"195"} height={"422"} className="col-5-7 screen"/>
                
                
                <Image src={four} alt={"4me"} width={"195"} height={"422"} className="col-7-9 screen"/>
                
                
                <Image src={five} alt={"4me"} width={"195"} height={"422"} className="col-9-11 screen"/>
                
                
                <Image src={six} alt={"4me"} width={"195"} height={"422"} className="col-11-13 screen"/>
                
            </div>

            <div className="grid-center">
                <div className="col-4-10 flex-column-center text-center">
                    <h3 className="mtb">The Versatile 4me Platform</h3>
                    <p>The 4me platform redefines service accessibility, catering to the evolving demands of a mobile workforce. With a dedicated app for employees and managers, 4me empowers users to seamlessly search, submit requests, manage approvals, stay updated, and access valuable insights and knowledge for products and services – all while on the move. This dynamic capability positions 4me as a cornerstone in supporting the future hybrid workplace. The 4me App, coupled with the self-service portal, consolidates interactions into a single point of contact for employees, fostering a frictionless and enriching Employee Experience.</p>
                    <a href="http://4me.com" target="_blank" className="btn-secondary">
                      <div className="">Visite the 4me official website</div>
                    </a>
                </div>
            </div>
    
    </div>
    </>
  );
}

        