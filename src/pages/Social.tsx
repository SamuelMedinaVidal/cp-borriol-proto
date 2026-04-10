import { Camera, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80', likes: 124, comments: 8  },
  { id: 2, image: 'https://images.unsplash.com/photo-1563823293883-2070c7913501?auto=format&fit=crop&w=400&q=80', likes: 89,  comments: 5  },
  { id: 3, image: 'https://images.unsplash.com/photo-1522204481512-b2fdff00ae4a?auto=format&fit=crop&w=400&q=80', likes: 256, comments: 17 },
  { id: 4, image: 'https://images.unsplash.com/photo-1549556204-7a1a2b0c2a52?auto=format&fit=crop&w=400&q=80', likes: 145, comments: 11 },
  { id: 5, image: 'https://images.unsplash.com/photo-1588693959892-710d0fcd6dd2?auto=format&fit=crop&w=400&q=80', likes: 312, comments: 24 },
  { id: 6, image: 'https://images.unsplash.com/photo-1620610360634-106c55cc1aa8?auto=format&fit=crop&w=400&q=80', likes: 178, comments: 13 },
];

export const Social = () => {
  return (
    <div className="min-h-screen bg-neutralMuted dark:bg-dk-bg py-16 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 flex flex-col items-center"
        >
          <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1 rounded-full mb-6">
            <div className="bg-white dark:bg-dk-surface p-4 rounded-full">
              <Camera size={48} className="text-textTitle dark:text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-textTitle dark:text-white uppercase mb-4">Redes Sociales</h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' as const }}
            className="h-1 w-20 bg-secondary dark:bg-dk-purple mx-auto mb-4 origin-left rounded-full"
          ></motion.div>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl">
            Síguenos para no perderte las mejores jugadas, piruetas y el día a día de nuestro gran club deportivo en Borriol.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-16">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square group overflow-hidden rounded-sm bg-gray-200 dark:bg-dk-surface2">
              <img
                src={post.image}
                alt="Social Post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer">
                <div className="flex gap-6 text-white font-bold text-lg">
                  <span className="flex items-center gap-2">
                    <Heart fill="white" size={22} /> {post.likes}
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle fill="white" size={22} /> {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-gradient-to-r from-secondary to-pink-500 hover:from-secondary/80 hover:to-pink-400 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform text-lg uppercase tracking-wide flex items-center gap-3"
          >
            <Camera size={24} /> Síguenos en Instagram
          </a>
        </div>
      </div>
    </div>
  );
};
