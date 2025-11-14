"use client";

import { motion } from "framer-motion";

const Page = () => {
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

  // Optimized variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const departmentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
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
              فريقنا
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
              قوتنا الحقيقية... فريق عمل متميز
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-4">
              فريق العمل - قوتنا الحقيقية
            </h2>
            <p className="text-lg text-palladian/70 leading-relaxed">
              نخبة من الخبراء والمتخصصين الذين يجمعون بين الإبداع والخبرة لتحقيق
              رؤى عملائنا وتحويل الأفكار إلى إنجازات ملموسة
            </p>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <motion.div
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-fantastic backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-palladian/20 group relative overflow-hidden flex-1 min-w-[120px] sm:min-w-32 md:min-w-[150px] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  variants={statsVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-burning-flame/10 to-truffle-trouble/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="text-lg sm:text-xl mb-2 text-center">
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <div className="text-xl sm:text-2xl font-bold text-burning-flame mb-1 text-center">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-palladian font-semibold text-xs sm:text-sm text-center">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Departments Section */}
      <section className="py-20 bg-blue-fantastic">
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
              تخصصات فريقنا
            </h2>
            <p className="text-lg text-palladian/70">
              مجموعة متكاملة من المواهب والخبرات تعمل بتناغم لتحقيق التميز
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamDepartments.map((department, index) => (
              <motion.div
                key={index}
                className="bg-abyssal-blue rounded-2xl shadow-xl border border-palladian/20 p-5 sm:p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                variants={departmentVariants}
                transition={{
                  delay: Math.floor(index / 3) * 0.1 + (index % 3) * 0.05,
                }}
              >
                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-br ${department.color} rounded-bl-3xl opacity-20`}
                />

                {/* Department Header */}
                <div className="text-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-r ${department.color} flex items-center justify-center text-xl text-white mb-3 mx-auto transition-transform duration-300 group-hover:scale-110`}
                  >
                    {department.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-palladian mb-1">
                    {department.title}
                  </h3>

                  <p className="text-burning-flame font-semibold text-base">
                    {department.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {department.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-2 text-palladian/90 text-sm"
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        delay: 0.2 + featureIndex * 0.06,
                      }}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${department.color} shrink-0`}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-abyssal-blue">
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
              انضم إلى قائمة عملائنا المميزين
            </h2>
            <p className="text-lg text-palladian/70 mb-6 max-w-2xl mx-auto">
              دع فريقنا المتميز يخدمك ويحول أفكارك إلى إنجازات حقيقية
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {/* Contact Button */}
              <a
                href="tel:+963996320963"
                className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">تواصل مع فريقنا</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
              </a>

              {/* Projects Button */}
              <a
                href="/projects"
                className="bg-blue-fantastic text-palladian px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-palladian relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">شاهد إنجازاتنا</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-palladian/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </a>
            </div>
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
