export const ControllerType = {
    CREATE: "Create",
    UPDATE: "Update",
    DELETE: "Delete"
  }
  
function Controller (props) {
    const result = [<li key={ControllerType.CREATE}><a href='/create' onClick={event => {
      event.preventDefault();
      props.setSelectedController(ControllerType.CREATE)
    }}>{ControllerType.CREATE}</a></li>];
  
    if (props.selectedID != null) {
      result.push(<li key={ControllerType.UPDATE}><a href='/update' onClick={event => {
        event.preventDefault();
        props.setSelectedController(ControllerType.UPDATE)
      }}>{ControllerType.UPDATE}</a></li>);
  
      result.push(<li key={ControllerType.DELETE}>{ControllerType.DELETE}</li>);
    }
  
    return <ul>
      {result}
    </ul>
}

export default Controller;
