// import Image from "next/image";
// import ex_clarification from "../../../public/ex_clarification.svg"

export default function SolutionExClarification() {
    return (
    <>
    <div className="wide">

      <div id="solution-ex-clarification">

        <div className="grid">
          <div className="col-1-4">
              <h4>Service Experience clarification</h4>
          </div>
          <div className="col-6-13">
            <div className="text-1">In the realm of Enterprise Service Management, or as we call it, Employee Service Management, we focus on the delivery of tangible, intangible, or combined products that enrich your work life. From salary inquiries to acquiring a new laptop, seeking assistance in hiring or helping a customer, our solutions aim to streamline the entire interaction or friction points before, during, and after product delivery.</div>
          </div>
        </div>

        <div className="grid">
          <div className="ex-clarification">
              {/* <Image src={ex_clarification} className="ex-clarification" width={1512} layout="responsive" ></Image> */}
          </div>
        </div>
      
      </div>


    </div>
    </>
  );
}