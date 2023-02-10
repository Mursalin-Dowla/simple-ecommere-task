import React from "react";
import play from "../../images/Play button.png";
import main1 from "../../images/Classy_Main 1.png";
import vector from "../../images/Vector633.png";
import glutanfree from "../../images/gluten-free 1.png";
import usda from "../../images/usda_organic 1.png";
import happy from "../../images/happycamp069 1.png";
import spoon from "../../images/baking1.png";
import vegan from '../../images/vegan.png';
import nosugar from '../../images/nosugar.png';
import allergy from '../../images/allergenic.png'

const Home = () => {
  return (
    <div>
      <div className="relative min-h-screen">
        <div className="absolute top-[100px] left-[44px] left-50">
          <h1 className="text-5xl font-bold uppercase">
            Eat Organic & <br /> Gluten Free Healthy Food
          </h1>
          <p className="text-xl font-semibold mt-2">
            We supply hight quality organic & gluten free product
          </p>
          <div className="flex">
            <div>
              <button className="bg-[#01BFD7] text-xs font-semibold text-white rounded-full mt-10 px-5 py-4">
                Try Our Sampler Pack
              </button>
            </div>
            <div className="mt-4 ml-5">
              <img className="w-22 h-24" src={play} alt="" />
            </div>
            <div className="mt-14 text-gray-500 font-semibold text-xs">
              About Happy Campers
            </div>
          </div>
        </div>
        <div className="absolute top-[20px] right-[95px] z-40">
          <img className="h-[580px] w-[580px] z-40" src={main1} alt="" />
        </div>
        <div className="absolute  top-[200px] left-0 right-0 z-0">
          <div className="relative">
            <div className="flex mt-[270px] ml-12">
              <img
                className="w-[133px] h-[84px] z-10"
                src={glutanfree}
                alt="glutanfree"
              />
              <img
                className="w-[80px] h-[84px] ml-5 z-10"
                src={usda}
                alt="usda"
              />
            </div>
            <div className="absolute top-[-270px] right-0 left-0">
              <img className="z-0" src={vector} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-3">
        <div class="col-span-2">
          <img className="w-[800px] h-[520px]" src={happy} alt="happycamp" />
        </div>

        <div class="mt-[-35px]">
          <div className="text-3xl font-bold uppercase">
            <h1>
              Choke-Full OF <br /> Anicent Whole Grains
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-14">
              <div className="w-[15%]">
                <img className="h-10 w-10" src={spoon} alt="spoon" />
              </div>
              <div className="w-[60%]">
                <h1 className="font-semibold text-md text-xs">Made from Ancient Whole Grains</h1>
                <p className="font-normal text-gray-500 text-xs mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit.Donectincidunt lectus tellus mi, porta proin dui 
                  ornare etiam.
                </p>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="w-[15%]">
                <img className="h-10 w-10" src={vegan} alt="spoon" />
              </div>
              <div className="w-[60%]">
                <h1 className="font-semibold text-md text-xs">Vegan</h1>
                <p className="font-normal text-gray-500 text-xs mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit.Donectincidunt lectus tellus mi, porta proin dui 
                  ornare etiam.
                </p>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="w-[15%]">
                <img className="h-10 w-10" src={nosugar} alt="spoon" />
              </div>
              <div className="w-[60%]">
                <h1 className="font-semibold text-md text-xs">No Sugar Added Flavors</h1>
                <p className="font-normal text-gray-500 text-xs mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit.Donectincidunt lectus tellus mi, porta proin dui 
                  ornare etiam.
                </p>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="w-[15%]">
                <img className="h-10 w-10" src={allergy} alt="spoon" />
              </div>
              <div className="w-[60%]">
                <h1 className="font-semibold text-md text-xs">Free From Top 8 Food Allergens</h1>
                <p className="font-normal text-gray-500 text-xs mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                  elit.Donectincidunt lectus tellus mi, porta proin dui 
                  ornare etiam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
