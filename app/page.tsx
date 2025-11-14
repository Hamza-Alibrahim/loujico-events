/* eslint-disable react-hooks/purity */
"use client";

import { motion } from "framer-motion";

const Page = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-fantastic to-abyssal-blue relative overflow-hidden">
      {/* Optimized Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-burning-flame/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Responsive Main Background Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-40 h-40 md:w-64 md:h-64 bg-burning-flame/10 rounded-full blur-2xl md:blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-truffle-trouble/10 rounded-full blur-2xl md:blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Responsive Grid Pattern */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #EEE9DF 1px, transparent 1px),
            linear-gradient(to bottom, #EEE9DF 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px", // Smaller on mobile
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-[500px]:px-4 sm:px-6 lg:px-8 text-center text-palladian relative z-10 py-40">
        {/* Responsive Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {"مؤسسة يوسف اللوجي التجارية".split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="inline-block ml-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Responsive Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-burning-flame mb-6 sm:mb-8 font-semibold relative inline-block px-4"
            whileHover={{ scale: 1.03 }}
          >
            شريكك في إدارة الفعاليات
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-burning-flame"
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            />
          </motion.p>
        </motion.div>

        {/* Responsive Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            نحو آفاق إبداعية... حيث تصبح الأفكار واقعاً ملموساً
          </motion.p>
        </motion.div>

        {/* Responsive Introduction Card */}
        <motion.div
          className="max-w-3xl mx-auto mb-12 sm:mb-16 min-[500px]:px-4 sm:px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.div
            className="bg-palladian/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-palladian/20 text-palladian relative overflow-hidden"
            whileHover={{
              boxShadow: "0 0 20px rgba(255, 177, 98, 0.3)",
            }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-burning-flame to-truffle-trouble"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            />
            <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
              &quot;مؤسسة يوسف اللوجي التجارية&quot; - شريكك الاستراتيجي نحو
              التميز في إدارة الفعاليات والمعارض. نقدم حلولاً متكاملة تجمع بين
              الإبداع والدقة لتحويل رؤيتك إلى تجربة استثنائية تترك أثراً دائماً.
            </p>
          </motion.div>
        </motion.div>

        {/* Responsive Stats Section */}
        <motion.div
          className="max-w-6xl mx-auto min-[500px]:px-4 sm:px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-burning-flame"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, type: "spring" }}
          >
            لماذا نحن الخيار الأمثل؟
          </motion.h2>

          {/* Improved Cards Container with Flex Wrap */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { number: "+200", label: "مشروع ناجح", icon: "🚀" },
              { number: "95%", label: "معدل رضا العملاء", icon: "⭐" },
              { number: "95%", label: "إنجاز في الوقت المحدد", icon: "⏱️" },
              { number: "50+", label: "فريق عمل متخصص", icon: "👥" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-palladian/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-palladian/20 group relative overflow-hidden flex-1 min-w-[140px] sm:min-w-40 md:min-w-[200px]"
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
              >
                {/* Hover Effect */}
                <motion.div className="absolute inset-0 bg-linear-to-br from-burning-flame/10 to-truffle-trouble/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <motion.div
                  className="text-xl sm:text-2xl mb-2 sm:mb-3 text-center"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.15, duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-burning-flame mb-2 sm:mb-3 text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.4 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.number}
                </motion.div>

                {/* Responsive Label */}
                <motion.div
                  className="text-palladian font-semibold text-xs sm:text-sm md:text-base leading-tight text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 + index * 0.15 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Responsive CTA Button */}
        <motion.div
          className="mt-8 sm:mt-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.button
            className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-transparent relative overflow-hidden group w-full sm:w-auto"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="relative z-10">تواصل معنا</span>

            {/* Button Shine Effect */}
            <motion.div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
