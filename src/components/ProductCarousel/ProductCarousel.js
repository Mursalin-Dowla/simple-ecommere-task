import React,{ useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';



export default function ProductCarousel() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <FontAwesomeIcon icon={faAngleLeft} />
                        </ButtonBack>
                        <div className="w-[80%] h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                            
                            <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[0]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[0]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[0]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[0]?.description}</p>
                                            </div>
                                             <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[1]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[1]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[1]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[1]?.description}</p>
                                            </div>
                                            <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[2]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[2]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[2]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[2]?.description}</p>
                                            </div>
                                            <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[3]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[3]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[3]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[3]?.description}</p>
                                            </div>
                                            <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[4]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[4]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[4]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[4]?.description}</p>
                                            </div>
                                            <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[5]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[5]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[5]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[5]?.description}</p>
                                            </div>
                                            <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[1]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[1]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[1]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[1]?.description}</p>
                                            </div>
                                            <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[3]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[3]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[3]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[3]?.description}</p>
                                            </div>
                                            <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[5]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[5]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[5]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[5]?.description}</p>
                                            </div>
                                            <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button> 
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto  flex-col">
                                            <div>

                                            <img src={products[0]?.img} alt="black chair and white table" className="object-cover object-center w-full" />
                                            </div>
                                            <div className="text-center">
                                            <h1 className="font-bold mt-2">{products[0]?.name}</h1>
                                            <p className="text-[#ABC480] mt-2">${products[0]?.price}</p>
                                            <p className="text-xs text-gray-500 mt-2">{products[0]?.description}</p>
                                            </div>
                                            <button className="border border-[#ABC480] text-[#ABC480] p-2 rounded-full mt-5 hover:text-[white] hover:bg-[#ABC480]">Add To Cart</button> 
                                        </div>
                                    </Slide>
                            </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <FontAwesomeIcon icon={faAngleRight} />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
