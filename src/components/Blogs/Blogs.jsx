import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ( {hendleAddToBookmark}) => {
    const [blogs, setBlogs]  = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <p>blogs here {blogs.length}</p>

            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    hendleAddToBookmark={hendleAddToBookmark}
                    ></Blog>)
            }
            
        </div>
    );
};

export default Blogs;