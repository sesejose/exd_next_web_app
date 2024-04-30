
import ProductsBenefit from "../components/ProductsBenfit"
import ProductsHero from "../components/ProductsHero"
import ProductsIntro from "../components/ProductsIntro"
import ProductsParallax from "../components/ProductsParallax"
import ProductsParallaxWindow from "../components/ProductsParallaxWindow"

export default function Products() {
    return (
        <>
            <ProductsHero></ProductsHero>
            <ProductsIntro></ProductsIntro>
            <ProductsParallaxWindow></ProductsParallaxWindow>
            <ProductsParallax></ProductsParallax>
            <ProductsBenefit></ProductsBenefit>
        </>
    )
}