
function Info(){
    const title = "This is my Title.";
    const showTitle = true;
    if (showTitle){
      return(
      <div>
        {title}      
        <h1>Inventory Management System</h1>
        <p>Best Mangement Service In the World!</p>
      </div>
      )
  
    }
    else{
      return <p>nothing.</p>;
  
    }
  }
  export default Info