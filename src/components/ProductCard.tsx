import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image"
import Button from "./ui/Button"

interface IProps {
  product: IProduct;
}

const ProductCard = ({product}:IProps) => {
  const {imageURL, category, colors, description, price, title} = product

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">

      <Image imageURL={imageURL} alt={"Product Name"} className="rounded-tr-md rounded-tl-md h-52 mb-2" />

      <h3>{title}</h3>
      <p className="text-sm" >{txtSlicer(description)}</p>
      
      <div className="flex items-center my-4 space-x-2 ">
      <span className={`w-5 h-5 ${colors[0]} rounded-full cursor-pointer`} />
      <span className={`w-5 h-5 ${colors[1]} rounded-full cursor-pointer`} />
      <span className={`w-5 h-5 ${colors[2]} rounded-full cursor-pointer`} />
      </div>

      <div className="flex items-center justify-between">
        <span>$ {price} </span>
        <div className="flex items-center gap-2">
          <Image imageURL={category.imageURL} alt={"Product Name"} className="w-10 h-10 rounded-full object-center" />
          <span>{category.name}</span>
        </div>
      </div>

      <div className="flex space-x-2 mt-2">
        <Button className="bg-indigo-700 " onClick={()=> console.log("clicked")} >Edit</Button>
        <Button className="bg-red-700 " >Destroy</Button>
      </div>

    </div>
  )
}


export default ProductCard