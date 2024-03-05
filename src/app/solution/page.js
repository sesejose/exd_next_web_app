import SolutionHero from "../components/SolutionHero"
import SolutionExClarification from "../components/SolutionExClarification"
import SolutionOfferings from "../components/SolutionOferings"
import SolutionProcessSteps from "../components/SolutionProcessSteps"
import SolutionUsm from "../components/SolutionUsm"
import SolutionReady from "../components/SolutionReady"

export default function Solution() {
    return (
        <>
            <SolutionHero></SolutionHero>
            <SolutionExClarification></SolutionExClarification>
            <SolutionOfferings></SolutionOfferings>
            <SolutionProcessSteps></SolutionProcessSteps>
            <SolutionUsm></SolutionUsm>
            <SolutionReady></SolutionReady>
        </>
    )
}