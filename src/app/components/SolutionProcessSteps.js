'use client'

import Link from "next/link";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function SolutionProcessSteps() {
  return (
    <>
    <div className="wide ptb-medium">
      
      <div id="process" className="grid">
        {/* Om os  */}
        <div className="col-3-11">
            <p className="red">Our Collaborative Journey</p>
            <h4>Transforming Visions into Reality</h4>

            <p className="ptb-medium">
            Lorem ipsum dolor sit amet consectetur. Enim rutrum sed eu dignissim aliquam felis nulla diam. In pellentesque amet id diam orci ut orci gravida nunc. Habitant viverra diam sit morbi lacus ante amet eget quis. Lacus netus sit maecenas mi tellus in risus. Lectus amet tortor nisl et urna amet sit vestibulum mauris. Vivamus commodo commodo vivamus nisi in ipsum id orci odio. 
            </p>

          <Accordion>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><h4>Phase 1</h4></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Lorem ipsum dolor sit amet consectetur. Enim rutrum sed eu dignissim aliquam felis nulla diam. In pellentesque amet id diam orci ut orci gravida nunc. Habitant viverra diam sit morbi lacus ante amet eget quis. Lacus netus sit maecenas mi tellus in risus. Lectus amet tortor nisl et urna amet sit vestibulum mauris. Vivamus commodo commodo vivamus nisi in ipsum id orci odio.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><h4>Phase 2</h4></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Lorem ipsum dolor sit amet consectetur. Enim rutrum sed eu dignissim aliquam felis nulla diam. In pellentesque amet id diam orci ut orci gravida nunc. Habitant viverra diam sit morbi lacus ante amet eget quis. Lacus netus sit maecenas mi tellus in risus. Lectus amet tortor nisl et urna amet sit vestibulum mauris. Vivamus commodo commodo vivamus nisi in ipsum id orci odio.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><h4>Phase 3</h4></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Lorem ipsum dolor sit amet consectetur. Enim rutrum sed eu dignissim aliquam felis nulla diam. In pellentesque amet id diam orci ut orci gravida nunc. Habitant viverra diam sit morbi lacus ante amet eget quis. Lacus netus sit maecenas mi tellus in risus. Lectus amet tortor nisl et urna amet sit vestibulum mauris. Vivamus commodo commodo vivamus nisi in ipsum id orci odio.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><h4>Phase 4</h4></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Lorem ipsum dolor sit amet consectetur. Enim rutrum sed eu dignissim aliquam felis nulla diam. In pellentesque amet id diam orci ut orci gravida nunc. Habitant viverra diam sit morbi lacus ante amet eget quis. Lacus netus sit maecenas mi tellus in risus. Lectus amet tortor nisl et urna amet sit vestibulum mauris. Vivamus commodo commodo vivamus nisi in ipsum id orci odio.</p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* New item  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton><h4>Phase 5</h4></AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Lorem ipsum dolor sit amet consectetur. Enim rutrum sed eu dignissim aliquam felis nulla diam. In pellentesque amet id diam orci ut orci gravida nunc. Habitant viverra diam sit morbi lacus ante amet eget quis. Lacus netus sit maecenas mi tellus in risus. Lectus amet tortor nisl et urna amet sit vestibulum mauris. Vivamus commodo commodo vivamus nisi in ipsum id orci odio. </p>
              </AccordionItemPanel>
            </AccordionItem>
           
          </Accordion>

         
        </div>
      </div>
        
    </div>
    </>
  );
}