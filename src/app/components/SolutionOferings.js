export default function SolutionOfferings() {
    return (
    <>
    <div className="wide">

      <div id="solution-offerings">

        <div className="grid">
              <h3 className="col-12 text-center">Our Solution Offerings</h3>
        </div>

        <div className="grid">
        <div className="col-1-4 offerings-col-container">
              <div>
                <div className="text-1 bold">Digital Platforms</div>
                <div><p>For a remarkable Employee Experience (EX), a robust Digital Platform is indispensable. Our solutions span Digital Platform Selection & Justification, Utilization & Value, Roadmaps, Governance, and Reports & Dashboards, creating a foundation to define, build, and operate digital products supporting EX.</p></div>
              </div>
              <div>
                <div className="text-1 bold">Capabilities</div>
                <div><p>To drive digital products for EX successfully, experience and capabilities are crucial. Our solutions encompass Process Manager/Owner for a Digital Practice, Digital Platform Specialists, Delivery Model for Digital Products, Prototyping (MVP), and Operating Model Concepts (Digital Value Sprint).</p></div>
              </div>
          </div>
          <div className="offerings col-4-10">
              {/* <Image src={ex_clarification} className="ex-clarification" width={1512} layout="responsive" ></Image> */}
          </div>
          <div className="col-10-13 offerings-col-container">
          <div>
                <div className="text-1 bold">Simplification</div>
                <div><p>Establishing a good Employee Experience involves simplifying data, activities, and approvals. Our practical solutions include Asset Data Collection & Maintenance, Data Management, Process Simplification, Process Mapping, Vendor Engagement & Automation, ensuring a streamlined flow of information.</p></div>
              </div>
              <div>
                <div className="text-1 bold">Innovation</div>
                <div><p>Innovation is at the core of progress. Our solutions for digital innovation in EX focus on Identifying and Sharing Ideas, Planning and Prioritizing through the Innovation Horizon, Tracking progress, and Realization & Improvement.</p></div>
              </div>
          </div>
        </div>

      </div>
      
    </div>
    </>
  );
}