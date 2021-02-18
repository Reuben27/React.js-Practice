import { useState, useEffect } from "react";
import BlogList from "./BlogList";

//Json server considers the top level property as a resource. It creates end points to interact with them.
//npx json-server --watch data/db.json --port 8000
// /blogs = Get = Fetch all blogs
// /blogs/{id} = Get = Fetch a single blog
// /blogs = Post = Add a new blog
// /blogs/{id} = Delete = Delete a blog
const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data); //State Hook wont cause infinte loops here due to the empty dependency [] in the useEffect.
      })
  }, []);

  return (
    <div className="home">
      {/*blogs is null intially so the below statement only renders when blogs data has been fetched!*/}
      {blogs && <BlogList blogs = {blogs} title = "All Blogs" />}
    </div>
  );
}
 
export default Home;