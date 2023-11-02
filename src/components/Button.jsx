import { arrowRight } from "../assets/icons"

const Button = () => {
  return (
    <button type='button' className="flex py-4 px-12  justify-between gap-2 items-center text-white" >
    Shop Now
    <img
      src={arrowRight}
      alt="arrow"
    />
</button>
  )
}

export default Button