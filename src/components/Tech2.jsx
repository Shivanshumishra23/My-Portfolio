
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants";



const Tech2 = () => {
  return (
    <div className="flex flew-row flex-wrap justify-center gap-10">
    {technologies.map((technology)=>(
        <div className="w-28 h-28" key={technology.name}>
        <img src={technology.icon2} />
          </div>
      ))}
      
    </div>
  )
}

export default  SectionWrapper(Tech2 ,"tech");