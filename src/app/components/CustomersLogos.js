import logo0 from "../../../public/logos_clients/logo_novo_nordisk.svg"
import logo1 from "../../../public/logos_clients/logo_milestone.svg"
import logo2 from "../../../public/logos_clients/logo_det.svg"
import logo3 from "../../../public/logos_clients/logo_drc.svg"
import logo4 from "../../../public/logos_clients/logo_7_eleven.svg"
import logo5 from "../../../public/logos_clients/logo_fuji_film.svg"
import logo6 from "../../../public/logos_clients/logo_multilot.svg"
import logo7 from "../../../public/logos_clients/logo_nne.svg"
import logo8 from "../../../public/logos_clients/logo_nets.svg"
import logo9 from "../../../public/logos_clients/logo_region_hovedstaden.svg"
import Image from "next/image"
import Link from "next/link"

export const logos = [logo0, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]

console.log(logos);

export default function CustomersLogos() {
    return (
        <>
        <div className="wide">

            <div id="customers-logos" className="grid-blog">

                <div className="flex-row-center"><Image src={logos[0]} width={160} height={90} alt="customer"></Image></div>
                <div className="flex-row-center"><Image src={logos[1]} width={160} height={90} alt="customer"></Image></div>
                <div className="flex-row-center"><Image src={logos[2]} width={160} height={90} alt="customer"></Image></div>
                <div className="flex-row-center"><Image src={logos[3]} width={160} height={90} alt="customer"></Image></div>
                <div className="flex-row-center"><Image src={logos[4]} width={160} height={90} alt="customer"></Image></div>
                <div className="flex-row-center"><Image src={logos[5]} width={160} height={90} alt="customer"></Image></div>
                <div className="flex-row-center"><Image src={logos[6]} width={160} height={90} alt="customer"></Image></div>
                <div className="flex-row-center"><Image src={logos[7]} width={160} height={90} alt="customer"></Image></div>
                <div className="flex-row-center"><Image src={logos[8]} width={160} height={90} alt="customer"></Image></div>
                <div className="flex-row-center"><Image src={logos[9]} width={160} height={90} alt="customer"></Image></div>
                
            </div>

            <div className="grid-center">

                <div className="flex-column-center col-4-10">
                    
                        <div className="text-center text-1">
                        We understand that each business is unique, and our team is dedicated to empathizing with our clients, unraveling their challenges, and delivering tailored solutions. Our commitment to excellence extends beyond our services; it&apos;s ingrained in our culture.
                        </div>
                        <div>
                        <Link href={"/about"} className="btn-purple">
                            <div className="text-1">Meet Our Team</div>
                                <div className="">
                                <span className="material-symbols-rounded">arrow_forward</span>
                            </div>
                        </Link>
                        </div>
                        
                    </div>

            </div>

        </div>
        </>
    );
}