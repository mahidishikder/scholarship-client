import { motion } from "framer-motion";

function ExtraSection1() {
  return (
    <section
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/white-abstract-background_23-2148549641.jpg?t=st=1739892122~exp=1739895722~hmac=58ae94fe6d64083f710aee921ec8940be79e7f6a1a29356cd975960355abf751&w=1380')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-200 opacity-60 dark:opacity-80 dark:bg-slate-900"></div>

      <motion.h2
        className="sm:text-4xl  text-3xl font-bold text-center mb-10 relative z-10 text-[#4946EC] dark:text-white/90"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Universities
      </motion.h2>

      <div className="grid grid-cols-1 max-w-screen-2xl  mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 relative z-10">
        {/* University Cards */}
        {[
          {
            name: "Harvard University",
            img: "https://www.oxfordscholastica.com/wp-content/uploads/2023/07/cambridge-college.jpg",
          },
          {
            name: "Stanford University",
            img: "https://drascoedu.com/wp-content/uploads/2022/01/notre-dame-university-campus-1024x683.jpg",
          },
          {
            name: "MIT",
            img: "https://www.troy.edu/_assets/sharing/troy-campus.jpg",
          },
          {
            name: "Oxford University",
            img: "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2021/10/30/bigstock-the-curzon-hall-is-a-british-r-237225406-1593951367020.jpeg",
          },
        ].map((university, index) => (
          <motion.div
            key={index}
            className="bg-white shadow shadow-blue-600 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* University Image with Opacity Hover Effect */}
            <img
              src={university.img}
              alt={university.name}
              className="w-full h-40 object-cover transition-opacity duration-300  hover:opacity-70"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {university.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExtraSection1;
