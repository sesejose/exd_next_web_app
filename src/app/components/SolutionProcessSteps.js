'use client'

import Link from "next/link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function SolutionProcessSteps() {
  return (
    <>
    <div className="wide">
      
      <section id="process" className="grid">
        {/* Om os  */}
        <div className="col-3-11">
            <p className="red">Our Collaborative Journey</p>
            <h4>Transforming Visions into Reality</h4>

            <p className="ptb-medium">
            Embark on a collaborative journey with EXD (Experience Design), where we transform your vision into a digital reality. From framing value propositions to embracing digital adoption, our seamless process ensures innovation and collaboration. Let us shape the future together. 
            </p>

          <Accordion>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><h4>Value Framing</h4></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Value framing is the part of our engagement where we align with the customer why the initiative is relevant and how it creates value. We emphasize with the customer to understand the context, identify the stakeholders, and ensure that we document a clear value proposition/vision for how the initiative will create value in the future.​</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><h4>Flow of Work​</h4></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>As we understand Value Framing and the stakeholders, we need to get familiar with the Flow of Work to be transformed into a Digital Product. In this iteration we discuss and visualize how people, tasks and authorizations are involved and how they create value to different stakeholders.<br></br>As digital transformation is heavily dependent on good data, we need to understand the current data quality to establish the required flow of information needed to deliver the agreed value. This is also crucial for reports and dashboards required to manage the digital product in the future.​</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><h4>Digital Adoption​</h4></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>As we are getting insights to the Flow of Work and the information related to it, we start building the Digital Product as an iterative development approach. As part of insight and development iterations we document the requirements to be used for testing and verifications.<br></br>Along the way we ensure rapid demonstrations and dialogs to validate and clarify identified opportunities, constraints and decisions supporting each identified requirement.​</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><h4>Digital Realization​</h4></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>As requirements and the Digital Product are being finalized, we will start the handover and testing of the solution. This will include activities like communication & training, support readiness, testing & validation, and clear plan for the go-live activities. As the go-live is completed a model feedback loop is established to catch issues, feedback and enhancements captured from users & stakeholders. Priorities, plans and communication for how to implement suggested features and issues are established as part of the Operating Model for the new digital product.​</p>
              </AccordionItemPanel>
            </AccordionItem>
            
           
          </Accordion>

         
        </div>
      </section>
        
    </div>
    </>
  );
}