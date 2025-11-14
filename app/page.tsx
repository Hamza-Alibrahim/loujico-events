/* eslint-disable react-hooks/purity */
"use client";

import { motion } from "framer-motion";

const Page = () => {
  // Optimized variants for better performance
  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-fantastic to-abyssal-blue relative overflow-hidden">
      {/* PERFORMANCE: Reduced particles to 20 with optimized animations */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-burning-flame/30 rounded-full" // Smaller and more transparent
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.7], // Reduced opacity range
            }}
            transition={{
              duration: 8 + Math.random() * 6, // Slower for performance
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* PERFORMANCE: Static background elements - no animation */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 md:w-64 md:h-64 bg-burning-flame/10 rounded-full blur-2xl md:blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-truffle-trouble/10 rounded-full blur-2xl md:blur-3xl" />

      {/* Static Grid Pattern */}
      <div className="absolute inset-0 opacity-5 md:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #EEE9DF 1px, transparent 1px),
            linear-gradient(to bottom, #EEE9DF 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-[500px]:px-4 sm:px-6 lg:px-8 text-center text-palladian relative z-10 py-40">
        {/* SMOOTH: Optimized title with variants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
            {"مؤسسة يوسف اللوجي التجارية".split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: index * 0.08, // Faster staggering
                }}
                className="inline-block ml-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* SMOOTH: Simplified subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          <div className="text-lg sm:text-xl md:text-2xl text-burning-flame mb-6 sm:mb-8 font-semibold relative inline-block px-4">
            شريكك في إدارة الفعاليات
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-burning-flame"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut" as const,
              }}
            />
          </div>
        </motion.div>

        {/* SMOOTH: Optimized text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 px-4 sm:px-6">
            نحو آفاق إبداعية... حيث تصبح الأفكار واقعاً ملموساً
          </p>
        </motion.div>

        {/* PERFORMANCE: Static card with CSS transitions */}
        <motion.div
          className="max-w-3xl mx-auto mb-12 sm:mb-16 min-[500px]:px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          <div className="bg-palladian/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-palladian/20 text-palladian relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <motion.span
              className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-burning-flame to-truffle-trouble"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 0.9,
                ease: "easeOut" as const,
              }}
            />
            <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
              &quot;مؤسسة يوسف اللوجي التجارية&quot; - شريكك الاستراتيجي نحو
              التميز في إدارة الفعاليات والمعارض. نقدم حلولاً متكاملة تجمع بين
              الإبداع والدقة لتحويل رؤيتك إلى تجربة استثنائية تترك أثراً دائماً.
            </p>
          </div>
        </motion.div>

        {/* PERFORMANCE: Optimized stats with variants */}
        <motion.div
          className="max-w-6xl mx-auto min-[500px]:px-4 sm:px-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-12 text-burning-flame"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut" as const,
            }}
          >
            لماذا نحن الخيار الأمثل؟
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {[
              { number: "+200", label: "مشروع ناجح", icon: "🚀" },
              { number: "95%", label: "معدل رضا العملاء", icon: "⭐" },
              { number: "95%", label: "إنجاز في الوقت المحدد", icon: "⏱️" },
              { number: "50+", label: "فريق عمل متخصص", icon: "👥" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-palladian/10 backdrop-blur-sm p-4 sm:p-5 rounded-lg border border-palladian/20 group relative overflow-hidden flex-1 min-w-[120px] sm:min-w-32 md:min-w-40 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                variants={statsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.3 + index * 0.1, // Faster staggering
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-burning-flame/5 to-truffle-trouble/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="text-lg sm:text-xl mb-2 text-center">
                  {stat.icon}
                </div>

                <div className="text-xl sm:text-2xl font-bold text-burning-flame mb-2 text-center">
                  {stat.number}
                </div>

                <div className="text-palladian font-semibold text-xs sm:text-sm leading-tight text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PERFORMANCE: Optimized CTA with CSS transitions */}
        <motion.div
          className="mt-8 sm:mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          <button className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95">
            <span className="relative z-10">تواصل معنا</span>

            {/* CSS-based shine effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

            {/* CSS-based pulse effect */}
            <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
          </button>
        </motion.div>
      </div>

      {/* Add custom animation for pulse */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.02);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Page;
