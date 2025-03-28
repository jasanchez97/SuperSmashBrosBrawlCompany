function BiografyItem(props){
    return(
      <div id={`item-${props.itemId}`}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    )
  }
  
  export default BiografyItem