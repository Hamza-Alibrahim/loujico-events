"use client";

import { motion } from "framer-motion";

const Page = () => {
  const projects = [
    {
      category: "مشاريع ضخمة",
      projects: [
        {
          title: "نور الرياض - بوابة الدرعية",
          description: "أكبر مهرجان ضوئي في المنطقة",
          icon: "✨",
          features: [
            "تصميم وتنفيذ أكبر عرض ضوئي في المنطقة",
            "إدارة الفعاليات الضخمة على مستوى عالمي",
            "تنسيق العروض البصرية والصوتية المتكاملة",
          ],
          color: "from-burning-flame to-orange-400",
        },
        {
          title: "فورميلا 1 - الواجهة البحرية جدة",
          description: "أكبر حدث رياضي دولي",
          icon: "🏎️",
          features: [
            "تنظيم وإدارة الفعاليات المصاحبة للسباق",
            "تصميم وتشغيل مناطق العرض والتجمع",
            "تنسيق الخدمات اللوجستية للحدث الدولي",
          ],
          color: "from-blue-fantastic to-blue-600",
        },
      ],
    },
    {
      category: "معارض متخصصة",
      projects: [
        {
          title: "معرض الكتاب - جامعة الأميرة نورة",
          description: "أكبر معرض كتاب جامعي",
          icon: "📚",
          features: [
            "تصميم وتنظيم أكبر معرض كتاب على مستوى الجامعات",
            "إدارة الفعاليات الثقافية المصاحبة",
            "تنسيق مشاركة دور النشر والكتاب",
          ],
          color: "from-truffle-trouble to-red-600",
        },
        {
          title: "معرض العطور - روشن اكسبو",
          description: "تجربة شمية فريدة",
          icon: "🌸",
          features: [
            "تصميم تجربة شمية تفاعلية فريدة",
            "تنظيم مناطق العرض والتجارب الحسية",
            "إدارة العلامات التجارية العالمية",
          ],
          color: "from-purple-500 to-purple-600",
        },
      ],
    },
    {
      category: "مؤتمرات دولية",
      projects: [
        {
          title: "المؤتمر السعودي الصيني",
          description: "مؤتمر اقتصادي رفيع المستوى",
          icon: "🤝",
          features: [
            "تنظيم مؤتمر اقتصادي دولي رفيع المستوى",
            "إدارة جلسات الحوار والتفاوض",
            "تنسيق الخدمات للوفود الرسمية",
          ],
          color: "from-green-500 to-emerald-600",
        },
        {
          title: "بلاك هات",
          description: "مؤتمر تقني متخصص",
          icon: "💻",
          features: [
            "تنظيم مؤتمر تقني متخصص في الأمن السيبراني",
            "إدارة ورش العمل والجلسات التقنية",
            "تنسيق مشاركة الخبراء الدوليين",
          ],
          color: "from-gray-600 to-gray-800",
        },
      ],
    },
  ];

  // Optimized variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-40 bg-linear-to-br from-blue-fantastic to-abyssal-blue text-palladian overflow-hidden">
        {/* PERFORMANCE: Static background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-burning-flame/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-truffle-trouble/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              مشاريعنا
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-burning-flame font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut" as const,
              }}
            >
              إنجازات نفتخر بها... تجارب نصنعها
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects by Category */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-4">
              محفظة إنجازاتنا
            </h2>
            <p className="text-lg text-palladian/70">
              مجموعة مختارة من أبرز مشاريعنا التي تعكس خبرتنا وتميزنا في صناعة
              الفعاليات
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="space-y-16 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                transition={{ delay: categoryIndex * 0.15 }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-burning-flame mb-3">
                    {category.category}
                  </h3>
                  <div className="w-20 h-1 bg-burning-flame mx-auto rounded-full" />
                </div>

                {/* Projects in this Category */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-5 sm:p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                      variants={projectVariants}
                      transition={{
                        delay: categoryIndex * 0.15 + projectIndex * 0.08,
                      }}
                    >
                      {/* Decorative Corner */}
                      <div
                        className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-br ${project.color} rounded-bl-3xl opacity-20`}
                      />

                      {/* Project Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-linear-to-r ${project.color} flex items-center justify-center text-xl text-white shrink-0 transition-transform duration-300 group-hover:scale-110`}
                        >
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-palladian mb-1">
                            {project.title}
                          </h3>
                          <p className="text-burning-flame font-semibold text-base mb-2">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center gap-2 text-palladian/90 text-sm"
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                              delay: 0.3 + featureIndex * 0.06,
                            }}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${project.color} shrink-0`}
                            />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-fantastic">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-4">
              مستعد لبدء مشروعك القادم؟
            </h2>
            <p className="text-lg text-palladian/70 mb-6">
              دعنا نصنع معاً تجربة استثنائية تليق بتميزك
            </p>

            {/* PERFORMANCE: CSS-based CTA button */}
            <button className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="relative z-10">اتصل بنا الآن</span>

              {/* CSS shine effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

              {/* CSS pulse effect */}
              <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
            </button>
          </motion.div>
        </div>
      </section>

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
    </div>
  );
};

export default Page;
