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

export const logos = [logo0, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]

console.log(logos);

export default function CustomersLogos() {
    return (
        <>
        <div className="wide">

            <div id="customers-logos" className="grid-center">

                <Image src=""></Image>
                
            </div>

        </div>
        </>
    );
}