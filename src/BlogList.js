const BlogList = (props) => {
   const blogs1 = props.joe;

  return (
    <div className="blog-list">
      
      {blogs1.map(joe => (

        <div>
          <h2>{ joe.title }</h2>
         <p>Written by { joe.author }</p> 
          

          
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;


 