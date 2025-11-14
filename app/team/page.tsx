"use client";

import { motion } from "framer-motion";

const page = () => {
  const teamDepartments = [
    {
      title: "مديرو مشاريع",
      description: "ذوو خبرة على اعلى مستوى",
      icon: "👨‍💼",
      features: [
        "إدارة المشاريع باحترافية عالية",
        "تخطيط استراتيجي متكامل",
        "متابعة دقيقة لسير العمل",
      ],
      color: "from-burning-flame to-orange-400",
    },
    {
      title: "مصممون مبدعون",
      description: "يحولون الأفكار إلى واقع",
      icon: "🎨",
      features: [
        "تصميم مفاهيم إبداعية",
        "تحويل الرؤى إلى تصاميم ملموسة",
        "ابتكار حلول بصرية فريدة",
      ],
      color: "from-blue-fantastic to-blue-600",
    },
    {
      title: "متخصصون في التسويق",
      description: "يخلقون حملات فعالة",
      icon: "📈",
      features: [
        "استراتيجيات تسويقية مبتكرة",
        "تحليل السوق والمنافسة",
        "حملات إعلانية مؤثرة",
      ],
      color: "from-truffle-trouble to-red-600",
    },
    {
      title: "مهندسو ديكور",
      description: "يصممون مساحات إبداعية",
      icon: "🏗️",
      features: [
        "تصميم المساحات بشكل إبداعي",
        "دمج الجمالية مع الوظيفية",
        "تنفيذ مفاهيم التصميم بدقة",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "منسقو فعاليات",
      description: "يديرون التفاصيل بدقة",
      icon: "📅",
      features: [
        "تنظيم الفعاليات بكفاءة عالية",
        "إدارة التفاصيل الدقيقة",
        "ضمان سير الفعاليات بسلاسة",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "مختصون في العلاقات الحكومية",
      description: "يسهلون الإجراءات",
      icon: "🤝",
      features: [
        "تسهيل الإجراءات الرسمية",
        "بناء علاقات استراتيجية",
        "متابعة التراخيص والتصاريح",
      ],
      color: "from-gray-600 to-gray-800",
    },
    {
      title: "فريق علاقات",
      description: "عالي الوصول",
      icon: "🌟",
      features: [
        "شبكة علاقات واسعة النطاق",
        "وصول استراتيجي للشركاء",
        "بناء شراكات مستدامة",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  const teamStats = [
    { number: "50+", label: "فريق متخصص", icon: "👥" },
    { number: "10+", label: "سنوات خبرة متوسطة", icon: "⏳" },
    { number: "95%", label: "رضا العملاء", icon: "⭐" },
    { number: "24/7", label: "دعم متواصل", icon: "🔄" },
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
              فريقنا
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-burning-flame font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              قوتنا الحقيقية... فريق عمل متميز
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              فريق العمل - قوتنا الحقيقية
            </h2>
            <p className="text-lg text-palladian/70 leading-relaxed">
              نخبة من الخبراء والمتخصصين الذين يجمعون بين الإبداع والخبرة لتحقيق
              رؤى عملائنا وتحويل الأفكار إلى إنجازات ملموسة
            </p>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            className="container mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-6">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-fantastic backdrop-blur-sm p-6 rounded-xl border border-palladian/20 group relative overflow-hidden flex-1 min-w-[140px] sm:min-w-40 md:min-w-[180px]"
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px", amount: 0.1 }}
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
                  {/* Hover Effect */}
                  <motion.div className="absolute inset-0 bg-linear-to-br from-burning-flame/10 to-truffle-trouble/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <motion.div
                    className="text-xl sm:text-2xl mb-3 text-center"
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Number */}
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

                  {/* Label */}
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
        </div>
      </section>

      {/* Team Departments Section */}
      <section className="py-20 bg-blue-fantastic">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              تخصصات فريقنا
            </h2>
            <p className="text-lg text-palladian/70">
              مجموعة متكاملة من المواهب والخبرات تعمل بتناغم لتحقيق التميز
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamDepartments.map((department, index) => (
              <motion.div
                key={index}
                className="bg-abyssal-blue rounded-2xl shadow-xl border border-palladian/20 p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{
                  duration: 0.8,
                  delay: Math.floor(index / 3) * 0.1 + (index % 3) * 0.1,
                }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${department.color} rounded-bl-3xl opacity-20`}
                />

                {/* Department Header */}
                <div className="text-center mb-6">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-linear-to-r ${department.color} flex items-center justify-center text-2xl text-white mb-4 mx-auto`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay:
                        Math.floor(index / 3) * 0.1 + (index % 3) * 0.1 + 0.3,
                    }}
                  >
                    {department.icon}
                  </motion.div>

                  <motion.h3
                    className="text-xl sm:text-2xl font-bold text-palladian mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay:
                        Math.floor(index / 3) * 0.1 + (index % 3) * 0.1 + 0.4,
                    }}
                  >
                    {department.title}
                  </motion.h3>

                  <motion.p
                    className="text-burning-flame font-semibold text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay:
                        Math.floor(index / 3) * 0.1 + (index % 3) * 0.1 + 0.5,
                    }}
                  >
                    {department.description}
                  </motion.p>
                </div>

                {/* Features List */}
                <motion.ul
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay:
                      Math.floor(index / 3) * 0.1 + (index % 3) * 0.1 + 0.6,
                  }}
                >
                  {department.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-3 text-palladian/90"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay:
                          Math.floor(index / 3) * 0.1 +
                          (index % 3) * 0.1 +
                          0.7 +
                          featureIndex * 0.1,
                      }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-linear-to-r ${department.color} shrink-0`}
                      />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              انضم إلى قائمة عملائنا المميزين
            </h2>
            <p className="text-lg text-palladian/70 mb-8 max-w-2xl mx-auto">
              دع فريقنا المتميز يخدمك ويحول أفكارك إلى إنجازات حقيقية
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:+963996320963"
                className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-transparent relative overflow-hidden group w-full sm:w-auto"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="relative z-10">تواصل مع فريقنا</span>
                {/* Button Shine Effect */}
                <motion.div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full w-full transition-transform duration-1000" />
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
              </motion.a>

              <motion.a
                href="/projects"
                className="bg-blue-fantastic text-palladian px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-transparent relative overflow-hidden group w-full sm:w-auto"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="relative z-10">شاهد إنجازاتنا</span>
                {/* Button Shine Effect */}
                <motion.div className="absolute inset-0 bg-linear-to-r from-transparent via-palladian/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full w-full transition-transform duration-1000" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
