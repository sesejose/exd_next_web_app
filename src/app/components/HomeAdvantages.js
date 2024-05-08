import HomeAdvantagesTitle from "./HomeAdvantagesTitle";

export default function HomeAdvantages() {
    return (
    <>
    <div className="wide">

      <HomeAdvantagesTitle></HomeAdvantagesTitle>

        <div id="home-advantages" className="grid-center">
          {/* Advantage one */}
  
          <div className="col-1-5 home-advantage-et">
            <div className="icons-gradient icons-advantages">
              <span className="material-symbols-rounded">attach_money</span>
            </div>
            <div className="">
                <p className="red bold">Cost Efficiency Unleashed</p>
                <div className="text-2 bold">Say goodbye to unnecessary operational costs</div>
                <div className="text-1"> Our solution streamlines your processes, ensuring each investment delivers a positive return</div>
            </div>
          </div>
  
          {/* Advantage two  */}
  
          <div className="col-5-9 home-advantage-to">
          <div className="icons-gradient icons-advantages">
              <span className="material-symbols-rounded">chess</span>
            </div>
            <div className="">
                <p className="red bold">Strategic Insights at Your Fingertips</p>
                <div className="text-2 bold">Empower your leadership with invaluable insights making strategic decisions a breeze</div>
              <div className="text-1"> Harness the power of comprehensive analytics for data-driven success</div>
            </div>
          </div>
  
          {/* Advantage three  */}
  
          <div className="col-9-13 home-advantage-tre">
          <div className="icons-gradient icons-advantages">
              <span className="material-symbols-rounded">chart_data</span>
            </div>
            <div className="">
                <p className="red bold">Nurture Talent, Fuel Growth</p>
                <div className="text-2 bold">Craft a workplace that support and satisfies your employees</div>
              <div className="text-1">Enhance talent retention by addressing their needs and fostering professional growth</div>
            </div>
        </div>

        </div>

    </div>
    </>
  );
}