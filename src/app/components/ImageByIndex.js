import image0 from "../../../public/home-client-0.jpg"
import image1 from '../../../public/home-client-0.jpg'
import image2 from '../../../public/home-client-0.jpg'
import image3 from '../../../public/home-client-0.jpg'

export const images = [image0, image1, image2, image3]

console.log(images);

// Notice that index here is used in the EmblaCarousel.js ! 
// "%" Returns the remainder of the division --> A number
// ImageByIndex --> Its return is a number !
// The result, dvs the return of the function imageByIndex is --> images[number] 
// images[number]  --> That number is the position in the array --> that position represent one of the imported images

const ImageByIndex = (index) => images[index % images.length]      

export default ImageByIndex
