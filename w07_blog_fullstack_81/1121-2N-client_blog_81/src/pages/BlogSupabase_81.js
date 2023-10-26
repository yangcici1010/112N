import { useState, useEffect } from "react";
import { supabase } from "../db/clientSupabase"


const BlogSupabase_81 = () => {
    const [name, setName] = useState('YangPeiCih')
    const [id, setId] = useState(209410181)
    const [blogs, setBlogs] = useState([]);

    const fetchBlogsFromSupabase = async () => {
        try {

            let { data, error } = await supabase
                .from('card_81')
                .select('*')

            console.log('blogs data', data);
            setBlogs(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchBlogsFromSupabase();
    }, []);
    return (
        <section className="blogs">
            <div className="section-title">
                <h2>Blogs From Supabase</h2>
                <h3>{name},{id}</h3>
            </div>
            <div className="blogs-center">
                {blogs.map((item) => {
                    const { id, img, remote_url, title, category, descrip } = item;
                    return (
                        <article key={id} className="blog">
                            <img
                                src={img}
                                alt="Coffee photo"
                                className="img blog-img"
                            />
                            <div className="blog-content">
                                <span>{category}<i className="fa-solid fa-mug-saucer"></i></span>
                                <h3>{title}</h3>
                                <p>{descrip}</p>
                                <a href="#">read more</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogSupabase_81