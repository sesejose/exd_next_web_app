// 'use client'

import Link from "next/link";
import Image from "next/image";

import one from "../../../public/screens/one.png"
import two from "../../../public/screens/two.png"
import three from "../../../public/screens/three.png"
import four from "../../../public/screens/four.png"
import five from "../../../public/screens/five.png"
import six from "../../../public/screens/six.png"
import exd_portal_homepage from "../../../public/screens/exd_portal_homepage.jpeg"
import exd_portal_my_services from "../../../public/screens/exd_portal_my_services.jpeg"
import exd_portal_new_request from "../../../public/screens/exd_portal_new_request.jpeg"
import screens_mobile from "../../../public/screens/screens_mobile.png"




export default function FourmeMobile(){
  return (
    <>
    <div className="wide">
            <div id="fourme-mobile" className="grid-center">
              <div className="col-7-13 flex-row-center">

                <Image src={screens_mobile} alt={"4me"} width={"1561"} height={"1217"} className="screen"/>

                {/* <Image src={exd_portal_homepage} alt={"4me"} width={"320"} height={"568"} className="screen center-50"/>
                <Image src={exd_portal_my_services} alt={"4me"} width={"240"} height={"426"} className="screen left-50"/>
                <Image src={exd_portal_new_request} alt={"4me"} width={"240"} height={"426"} className="screen right-50"/> */}

              </div>


              <div className="col-1-6">

                <h3 className="mtb">The Versatile 4me Platform</h3>
                <p>The 4me platform redefines service accessibility, catering to the evolving demands of a mobile workforce. With a dedicated app for employees and managers, 4me empowers users to seamlessly search, submit requests, manage approvals, stay updated, and access valuable insights and knowledge for products and services – all while on the move. This dynamic capability positions 4me as a cornerstone in supporting the future hybrid workplace. The 4me App, coupled with the self-service portal, consolidates interactions into a single point of contact for employees, fostering a frictionless and enriching Employee Experience.</p>
                <a href="https://www.4me.com/it-service-management/self-service/" target="_blank" className="btn-secondary">
                  <div className="">More About Mobile Platform here</div>
                </a>

              </div>
                
                {/* <Image src={one} alt={"4me"} width={"195"} height={"422"} className="col-1-3 screen"/>
                
                
                <Image src={two} alt={"4me"} width={"195"} height={"422"} className="col-3-5 screen"/>
                
                
                <Image src={three} alt={"4me"} width={"195"} height={"422"} className="col-5-7 screen"/>
                
                
                <Image src={four} alt={"4me"} width={"195"} height={"422"} className="col-7-9 screen"/>
                
                
                <Image src={five} alt={"4me"} width={"195"} height={"422"} className="col-9-11 screen"/>
                
                
                <Image src={six} alt={"4me"} width={"195"} height={"422"} className="col-11-13 screen"/> */}
                
            </div>

            {/* <div className="grid-center">
                <div className="col-4-10 flex-column-center text-center">
                    <h3 className="mtb">The Versatile 4me Platform</h3>
                    <p>The 4me platform redefines service accessibility, catering to the evolving demands of a mobile workforce. With a dedicated app for employees and managers, 4me empowers users to seamlessly search, submit requests, manage approvals, stay updated, and access valuable insights and knowledge for products and services – all while on the move. This dynamic capability positions 4me as a cornerstone in supporting the future hybrid workplace. The 4me App, coupled with the self-service portal, consolidates interactions into a single point of contact for employees, fostering a frictionless and enriching Employee Experience.</p>
                    <a href="http://4me.com" target="_blank" className="btn-secondary">
                      <div className="">Visite the 4me official website</div>
                    </a>
                </div>
            </div> */}
    
    </div>
    </>
  );
}

        