import biografy from "../../services/biografy.js"
import BiografyItem from "../BiografyItem/BiografyItem.jsx"
import "./Biografy.css"


function Biografy() {
  return (
    <div className="biografy-main">
      {
        biografy.map((n) => {
          return <BiografyItem key={n.id} itemId={n.id} title={n.title} description={n.description} />
        })
      }
    </div>
  )
}

export default Biografy