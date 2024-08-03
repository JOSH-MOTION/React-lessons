
import BlogList from "./BlogList";

const Home = () => {
  const blogs = [
    { title: 'My new React', body: 'lorem ipsum...', author: 'gen16', id: 1 },
    { title: 'Welcome Java!', body: 'lorem ipsum...', author: 'gen27', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'gen28', id: 3 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'gen29', id: 4 }
  ];
  

  return (
    <div className="home">
      <BlogList joe={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;