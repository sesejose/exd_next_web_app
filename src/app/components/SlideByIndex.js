// import HomeClientSlideOne from "../components/HomeClientSlideOne"
// import HomeClientSlideTwo from "../components/HomeClientSlideTwo"
// import HomeClientSlideThree from "../components/HomeClientSlideThree"
// import HomeClientSlideFour from "../components/HomeClientSlideFour"

export const clients = [

    {
    id: 0,
    comment: "“Lorem ipsum dolor sit amet consectetur. Netus proin arcu maecenas ullamcorper fringilla sit commodo sapien quisque. Arcu etiam egestas neque amet eget aliquam tincidunt cras nulla. Urna integer ut bibendum eget sem massa pellentesque. Dolor accumsan amet ac tincidunt mauris.”",
    by: "Name 0",
    },
    
    {
    id: 1,
    comment: "“Lorem ipsum dolor sit amet consectetur. Netus proin arcu maecenas ullamcorper fringilla sit commodo sapien quisque. Arcu etiam egestas neque amet eget aliquam tincidunt cras nulla. Urna integer ut bibendum eget sem massa pellentesque. Dolor accumsan amet ac tincidunt mauris.”",
    by: "Name 1",
    },
    
    {
    id: 2,
    comment: "“Lorem ipsum dolor sit amet consectetur. Netus proin arcu maecenas ullamcorper fringilla sit commodo sapien quisque. Arcu etiam egestas neque amet eget aliquam tincidunt cras nulla. Urna integer ut bibendum eget sem massa pellentesque. Dolor accumsan amet ac tincidunt mauris.”",
    by: "Name 2",
    },

    {
    id: 3,
    comment: "“Lorem ipsum dolor sit amet consectetur. Netus proin arcu maecenas ullamcorper fringilla sit commodo sapien quisque. Arcu etiam egestas neque amet eget aliquam tincidunt cras nulla. Urna integer ut bibendum eget sem massa pellentesque. Dolor accumsan amet ac tincidunt mauris.”",
    by: "Name 3",
    }
    
    ]

// Notice that index here is used in the EmblaCarousel.js ! 
// "%" Returns the remainder of the division --> A number
// ImageByIndex --> Its return is a number !
// The result, dvs the return of the function slideByIndex is --> clients[number] 
// images[number]  --> That number is the position in the array --> that position represent one of the imported images

const SlidesByIndex = (index) => clients[index % clients.length]
      

export default SlidesByIndex
