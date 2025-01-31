import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgFour,
  SaleImgFive,
  saleImgSix,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3   lg:w-1/2 h-[700px] ">
        <Link to="/shop">
          <Image
            className="h-[700px]  w-full object-cover "
            imgSrc={saleImgFour}
          />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-6">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={SaleImgFive}
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgSix} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
