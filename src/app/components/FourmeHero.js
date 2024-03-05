import Link from "next/link";
import Image from "next/image";
// import home_arrow_btn_hero from "../../../public/home_arrow_btn_hero.svg"

export default function FourmeHero() {
  return (
    <>
    <div className="wide">
      <div id="fourme-hero-bg">
        <div className="grid">
          <div className="col-4-10">
            <h2 className="text-center mb-medium">Revolutionize Service Management with 4me</h2>
            <p className="text-center mtb-medium">
              <br></br>Step into the future of Employee Service Management with 4me, a next-generation platform that transcends traditional boundaries. In a world where collaboration is key, 4me seamlessly connects an organization's business support functions and external service providers, fostering a holistic approach to Service Integration and Management (SIAM).

              <br></br>At the core of 4me's innovation is the dismantling of 'silos of excellence.' Here, each business support function typically operates within its defined practices, data storage, and systems for individual employee products and services. 4me breaks down these barriers, creating a unified structure that not only encourages collaboration but also enhances efficiency and data security simultaneously.

              <br></br>4me introduces a groundbreaking principle, encapsulating confidential data for each business support function within a shared activity and data structure. This approach ensures data safety while fostering collaboration. The same data is intelligently reused across functions, reducing the need for extensive integrations and data maintenance. 4me brings a new level of efficiency to the way employees request products and services.

              <br></br>The innovative activity and data structure implemented by 4me simplifies the process of requesting products and services for employees. This results in a high-quality flow of information across business support functions and their suppliers. 4me not only streamlines requests but also elevates the overall flow of information, ensuring optimal service delivery.
            </p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}