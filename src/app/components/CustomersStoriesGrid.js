import Image from "next/image"

import logo0 from "../../../public/logos_clients/logo_novo_nordisk_white.svg"
import logo1 from "../../../public/logos_clients/logo_milestone_white.svg"
import logo2 from "../../../public/logos_clients/logo_det_white.svg"
import logo3 from "../../../public/logos_clients/logo_drc_white.svg"
import logo4 from "../../../public/logos_clients/logo_7_eleven_white.svg"
import logo5 from "../../../public/logos_clients/logo_fuji_film_white.svg"
import logo6 from "../../../public/logos_clients/logo_multilot_white.svg"
import logo7 from "../../../public/logos_clients/logo_nne_white.svg"
import logo8 from "../../../public/logos_clients/logo_nets_white.svg"
import logo9 from "../../../public/logos_clients/logo_region_hovedstaden_white.svg"
import { Link } from 'next-view-transitions'
// import Link from "next/link"

// export const logos = [logo0, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]


export default function CustomersStoriesGrid() {
    return (
        <>
        <div className="wide">

            <div className="grid-stories">

                    {/* 7-Eleven  */}
                    <Link href={"/customers/seven-eleven"} className="customer-story-container">
                        <div className="customer-story-image-container">
                            <div className="customer-story-image seven"></div>
                            <Image src={logo4} className="customer-logo" alt="image"></Image>
                        </div>
                        <div className="customer-story-description">
                            <div className="red text-1">7-Eleven</div>
                            <h4>Support Model Automation</h4>
                            <p>Advisory and implementation of an automated business support model for all 7-Eleven shops in Denmark. Advisory for automation and enhancements of shop services and products with focus on increased customer service.</p>
                        </div>
                    </Link>

                    {/* DRC */}
                    <Link href={"/customers/drc"} className="customer-story-container">
                        <div className="customer-story-image-container">
                            <div className="customer-story-image drc"></div>
                            <Image src={logo3} className="customer-logo" alt="image"></Image>
                        </div>
                        <div className="customer-story-description">
                            <div className="red text-1">Danish Refugee Council</div>
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. A semper mollis facilisis vel scelerisque nec at quis commodo. In a aenean aliquam maecenas condimentum.</p>
                        </div>
                    </Link>

                    {/* Milestone  */}
                    <Link href={"/customers/milestone"} className="customer-story-container">
                        <div className="customer-story-image-container">
                            <div className="customer-story-image milestone"></div>
                            <Image src={logo1} className="customer-logo" alt="image"></Image>
                        </div>
                        <div className="customer-story-description">
                            <div className="red text-1">Milestone Systems</div>
                            <h4>Milestone Systems</h4>
                            <p>Milestone Systems, the leading data-driven video technology company decided to streamline their internal services on the 4me platform. Using a standardized and simplified approach for providing user friendly and intuitive services to their employees has been the key driver for Milestone Systems.</p>
                        </div>
                    </Link>

                    {/* DET */}
                    <Link href={"/customers/det"} className="customer-story-container">
                        <div className="customer-story-image-container">
                            <div className="customer-story-image det"></div>
                            <Image src={logo2} className="customer-logo" alt="image"></Image>
                        </div>
                        <div className="customer-story-description">
                            <div className="red text-1">Dansk El og Teknik</div>
                            <h4>Lorem ipsum</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. A semper mollis facilisis vel scelerisque nec at quis commodo. In a aenean aliquam maecenas condimentum.</p>
                        </div>
                    </Link>

                    

            </div>

        </div>
        </>
    )
}