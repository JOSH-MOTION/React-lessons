const BlogList = ({joe}) => {
  //  const blogs1 = props.joe;

  return (
    <div className="blog-list">      
      {joe.map((josh) => (

        <div>
          <h2>{ josh.title }</h2>
         <p>Written by { josh.author }</p> 
          

          
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;


 