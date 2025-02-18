
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function Blog() {




  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6 transition-colors duration-300">
      <Helmet>
        <title>Blog</title>
      </Helmet>

     

      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Our Blog
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Stay updated with the latest news, articles, and insights about technology, education, and self-improvement.
      </motion.p>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <button className="px-4 py-2 bg-[#4946EC] text-white rounded-md hover:bg-white hover:ring-2 hover:text-black/90 hover:ring-[#4946EC] transition">
              Read More
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const blogPosts = [
  {
    title: 'The Future of Technology',
    excerpt:
      'Discover how advancements in technology are shaping the future and impacting our daily lives.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/future-tech-main-1488909020.jpg',
  },
  {
    title: 'Top Study Hacks for Students',
    excerpt:
      'Learn effective study hacks to enhance your productivity and achieve academic success.',
    image: 'https://infinitylearn.com/surge/wp-content/uploads/2024/02/Top-10-Study-Hacks-to-Score-High-in-CBSE-Class-6-copy.jpg',
  },
  {
    title: 'The Importance of Mental Health',
    excerpt:
      'Understand the significance of mental health and how to maintain a positive mindset.',
    image: 'https://www.qaizenx.com/wp-content/uploads/2022/03/Blog-thumbnail-07.png',
  },
  {
    title: 'Mastering Time Management',
    excerpt:
      'Practical tips and strategies to manage your time effectively and achieve your goals.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSbnmr4HwDXtE2_DYx5_Shz__nzfm45DwMw&s',
  },
  {
    title: 'Exploring the World of AI',
    excerpt:
      'An introduction to artificial intelligence and its potential to revolutionize industries.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxPzwFUxaxfLUs6x_l2TbX_L1NqOYCHi69XXe_sEcsgQcB_1lBoFpQ9CkIun5rTF59RQ&usqp=CAU',
  },
  {
    title: 'How to Stay Motivated',
    excerpt:
      'Tips to keep yourself motivated and focused on achieving your dreams.',
    image: 'https://startupguide.hbs.edu/wp-content/uploads/2020/01/shutterstock_1184556739.jpg',
  },
];

export default Blog;
