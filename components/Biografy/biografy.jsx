import biografy from "../../services/biografy/biografy"
import BiografyItem from "../biografy-item/BiografyItem"

function biografy() {
  return (
    <>
      {
        news.map((n) => {
          return <BiografyItem key={n.id} itemId={n.id} title={n.title} description={n.description} />
        })
      }
    </>
  )
}

export default biografy