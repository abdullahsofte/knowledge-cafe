import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, hendleAddToBookmark }) => {
    const { cover_photo, title, author_image, author_name, hashtag, post_date, reading_time } = blog;

    return (
        <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <img src={cover_photo} alt="Cover" className="w-full object-cover" />

            <div className="p-4">
                <div className="flex items-center justify-between space-x-3 mb-4">
                    <div className='flex'>
                        <img src={author_image} alt={author_name} className="w-10 h-10 rounded-full" />
                        <div className="text-sm text-gray-600 ms-4">
                            <p className="font-semibold">{author_name}</p>
                            <p>{post_date} (4 Days ago)</p>
                        </div>
                    </div>
                    <div className="ml-auto text-gray-500">
                        <span >{reading_time}</span>
                        <button className='ms-2 text-xl' onClick={hendleAddToBookmark}><FaBookmark></FaBookmark></button>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-2 border-l-4 border-blue-400 pl-2">
                    {title}
                </h2>

                <div className="flex space-x-2 text-sm text-gray-500 mb-2">
                    <span className="hover:underline">{hashtag}</span>
                </div>

                <a href="#" className="text-blue-500 hover:underline text-sm">Mark as read</a>

            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        cover_photo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author_image: PropTypes.string.isRequired,
        author_name: PropTypes.string.isRequired,
        hashtag: PropTypes.string.isRequired,
        post_date: PropTypes.string.isRequired,
        reading_time: PropTypes.string.isRequired
    }).isRequired
};

export default Blog;
