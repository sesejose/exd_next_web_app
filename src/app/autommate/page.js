import Link from "next/link";
import AutomMateHero from "../components/AutomMateHero";

export default function ProductsIntro() {
    return (
    <>
    <AutomMateHero></AutomMateHero>
    <div className="wide ptb-medium">

        <div id="" className="grid-center">
          <h2 className="col-4-10">How Autom Mate boost your Services</h2>
        </div>
        <div className="grid-center">
          <div className="col-4-10">
            
            <h4>How Autom Mate boost your Services</h4>
            <p>Autom Mate is providing a state-of-the-art hyper-automation platform in the convergence between integration platform as a service (iPaaS), Robot Process Automation (RPA) and Artificial Intelligence (AI).</p>
            
            <h4>Start It</h4>
            <div className="text-2">Gear 1:</div>
            <h3>Service Engagement Experience</h3>
            <p>Autom Mate allows you with unprecedented easy an intuitive user interface to build and maintain flows of data between your key applications. It is the glue that makes your key applications working together in meaningful flows that accelerate your digital transformation. Autom Mate provide ready made libraries of connectors to common application platforms and it allows you to extend the library with your own applications without writing a single line of code. Automating your flows not only increase your productivity it also reduces errors in your business flows. </p>

            
            <h4>Build It</h4>
            <div className="text-2">Gear 2:</div>
            <h3>Service Operations and Delivery Experience</h3>
            <p>We understand that service operations and delivery are the backbone of any successful business. Autom Mate allows you to automate your operational processes and your service delivery to your customers. Integration with legacy applications can be done via robotics functionality mirroring user behaviors combined with application integrations. Autom Mate can help transform your operations by automating up to 50% of your service tasks. </p>

            
            <h4>Run It</h4>
            <div className="text-2">Gear 3:</div>
            <h3>Service Integration & Intelligence</h3>
            <p>Service Technology Optimization becomes your strategic advantage, and every day brings new opportunities to elevate your service operations to the next level. Step into the future where robots don&apost just do, but think. Amplify your tech capabilities, without the hefty developer price tags. Autom Mate’s future-proof automation & integration capabilities are here to completely transform your service technology.</p>
            <p className="bold">Frequent Integrations by domain:</p>           


          </div>
        </div>

    </div>
    </>
  );
}