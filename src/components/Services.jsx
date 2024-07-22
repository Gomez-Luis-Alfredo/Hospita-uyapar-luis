import { RiMicroscopeLine } from "react-icons/ri";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";


export default function Services() {
    const icon1 = <RiMicroscopeLine fontSize={25} className="bg-backgroundColor"/>
    const icon2 = <MdHealthAndSafety fontSize={25} className="bg-backgroundColor"/>
    const icon3 = <FaHeartbeat fontSize={25} className="bg-backgroundColor"/>
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-20 lg:pt-16">
        <div className="flex flex-col items-center lg:flex-row justify-between">
            <div>
                <h1 className="text-4xl font-semibold text-center lg:text-start">Our Services</h1>
                <p className="mt-2 text-center lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos magnam alias deleniti! Dolores eligendi nostrum eius atque veniam, </p>
            </div>
            <div className="mt-4 lg:mt-0">
                <Button title='See services'/>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pt-14">
            <ServicesCard icon={icon1} title="Lab Test"/>
            <ServicesCard icon={icon2} title="Health Check"/>
            <ServicesCard icon={icon3} title="Heart Health"/>
        </div>
    </div>
  )
}
