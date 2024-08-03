import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new React', body: 'lorem ipsum...', author: 'gen16', id: 1 },
    { title: 'Welcome JavaScript!', body: 'lorem ipsum...', author: 'gen27', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'gen28', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;