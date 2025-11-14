"use client";

import { motion } from "framer-motion";

const page = () => {
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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-40 bg-linear-to-br from-blue-fantastic to-abyssal-blue text-palladian overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-burning-flame/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-32 h-32 bg-truffle-trouble/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              مشاريعنا
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-burning-flame font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              محفظة إنجازاتنا
            </h2>
            <p className="text-lg text-palladian/70">
              مجموعة مختارة من أبرز مشاريعنا التي تعكس خبرتنا وتميزنا في صناعة
              الفعاليات
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-20 max-w-6xl mx-auto">
            {projects.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                {/* Category Header */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: categoryIndex * 0.2 + 0.3,
                  }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-burning-flame mb-4">
                    {category.category}
                  </h3>
                  <div className="w-24 h-1 bg-burning-flame mx-auto rounded-full" />
                </motion.div>

                {/* Projects in this Category */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.8,
                        delay: categoryIndex * 0.2 + projectIndex * 0.1,
                      }}
                      whileHover={{ y: -5 }}
                    >
                      {/* Decorative Corner */}
                      <div
                        className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${project.color} rounded-bl-3xl opacity-20`}
                      />

                      {/* Project Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-linear-to-r ${project.color} flex items-center justify-center text-2xl text-white shrink-0`}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay:
                              categoryIndex * 0.2 + projectIndex * 0.1 + 0.3,
                          }}
                        >
                          {project.icon}
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3
                            className="text-xl sm:text-2xl font-bold text-palladian mb-2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay:
                                categoryIndex * 0.2 + projectIndex * 0.1 + 0.4,
                            }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p
                            className="text-burning-flame font-semibold text-lg mb-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay:
                                categoryIndex * 0.2 + projectIndex * 0.1 + 0.5,
                            }}
                          >
                            {project.description}
                          </motion.p>
                        </div>
                      </div>

                      {/* Features List */}
                      <motion.ul
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.2 + projectIndex * 0.1 + 0.6,
                        }}
                      >
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center gap-3 text-palladian/90"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay:
                                categoryIndex * 0.2 +
                                projectIndex * 0.1 +
                                0.7 +
                                featureIndex * 0.1,
                            }}
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-linear-to-r ${project.color} shrink-0`}
                            />
                            <span className="text-sm sm:text-base">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-fantastic">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              مستعد لبدء مشروعك القادم؟
            </h2>
            <p className="text-lg text-palladian/70 mb-8">
              دعنا نصنع معاً تجربة استثنائية تليق بتميزك
            </p>
            <motion.button
              className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-transparent relative overflow-hidden group w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="relative z-10">اتصل بنا الآن</span>

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
    </div>
  );
};

export default page;

{
  /** 
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              أرقام تدل على تميزنا
            </h2>
            <p className="text-lg text-palladian/70">
              إحصائيات حقيقية تعكس حجم ثقة عملائنا بخدماتنا
            </p>
          </motion.div>

          <motion.div
            className="container mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { number: "200+", label: "مشروع ناجح", icon: "🚀" },
                { number: "50+", label: "عميل راضٍ", icon: "😊" },
                { number: "95%", label: "نسبة إنجاز الوقت", icon: "⏱️" },
                { number: "5+", label: "سنوات خبرة", icon: "⭐" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-abyssal-blue backdrop-blur-sm p-6 rounded-xl border border-palladian/20 group relative overflow-hidden flex-1 min-w-[140px] sm:min-w-40 md:min-w-[180px]"
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                >
                  
                  <motion.div className="absolute inset-0 bg-linear-to-br from-burning-flame/10 to-truffle-trouble/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  
                  <motion.div
                    className="text-xl sm:text-2xl mb-3 text-center"
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>

                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-burning-flame mb-2 text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {stat.number}
                  </motion.div>

                  <motion.div
                    className="text-palladian font-semibold text-sm md:text-base text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + index * 0.15 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div> */
}
