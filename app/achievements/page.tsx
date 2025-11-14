"use client";

import { motion } from "framer-motion";

const Page = () => {
  const achievements = [
    {
      number: "95%",
      label: "معدل رضا العملاء",
      icon: "⭐",
      description: "ثقة عملائنا هي شهادتنا الحقيقية على الجودة",
      color: "from-burning-flame to-orange-400",
    },
    {
      number: "90%",
      label: "نسبة إنجاز المشاريع في الوقت المحدد",
      icon: "⏱️",
      description: "نلتزم بالمواعيد ونحترم وقت عملائنا",
      color: "from-blue-fantastic to-blue-600",
    },
    {
      number: "50+",
      label: "فعالية ناجحة",
      icon: "🎯",
      description: "خبرة متراكمة في تنظيم الفعاليات بمختلف أحجامها",
      color: "from-truffle-trouble to-red-600",
    },
    {
      number: "200+",
      label: "مشروع ناجح",
      icon: "🚀",
      description: "محفظة مشاريع غنية تشهد على خبرتنا الواسعة",
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "100,000+",
      label: "زائر في أكبر فعالية",
      icon: "👥",
      description: "قدرة على إدارة الفعاليات الضخمة بأعلى معايير الجودة",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const geographicScope = [
    {
      region: "محلياً",
      locations: [
        "الرياض",
        "جدة",
        "مكة",
        "المدينة المنورة",
        "الدمام",
        "الخبر",
        "دمشق",
      ],
      icon: "🏠",
      color: "from-burning-flame to-orange-400",
    },
    {
      region: "إقليمياً",
      locations: ["ماليزيا", "السعودية", "الإمارات", "سوريا"],
      icon: "🌍",
      color: "from-blue-fantastic to-blue-600",
    },
    {
      region: "عالمياً",
      locations: ["شراكات مع مؤسسات في أوروبا وأمريكا"],
      icon: "🌎",
      color: "from-truffle-trouble to-red-600",
    },
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

  const achievementVariants = {
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

  const scopeVariants = {
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

  const locationVariants = {
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
              إنجازاتنا
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
              أرقام تدل على تميزنا... إنجازات تتحدث عن نفسها
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Stats Section */}
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
              أرقام تدل على تميزنا
            </h2>
            <p className="text-lg text-palladian/70">
              إحصائيات حقيقية تعكس حجم ثقة عملائنا ومدى التزامنا بالتميز
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-5 sm:p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                variants={achievementVariants}
                transition={{ delay: index * 0.1 }}
              >
                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-br ${achievement.color} rounded-bl-3xl opacity-20`}
                />

                {/* Achievement Content */}
                <div className="text-center relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-r ${achievement.color} flex items-center justify-center text-xl text-white mb-3 mx-auto transition-transform duration-300 group-hover:scale-110`}
                  >
                    {achievement.icon}
                  </div>

                  {/* Number */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-burning-flame mb-1">
                    {achievement.number}
                  </h3>

                  {/* Label */}
                  <h4 className="text-lg font-bold text-palladian mb-2">
                    {achievement.label}
                  </h4>

                  {/* Description */}
                  <p className="text-palladian/80 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Geographic Scope Section */}
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
              نطاق عملنا الجغرافي
            </h2>
            <p className="text-lg text-palladian/70">
              انتشار عالمي يضمن وصول خدماتنا إلى كل مكان
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {geographicScope.map((scope, index) => (
              <motion.div
                key={index}
                className="bg-abyssal-blue rounded-2xl shadow-xl border border-palladian/20 p-5 sm:p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                variants={scopeVariants}
                transition={{ delay: index * 0.15 }}
              >
                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-br ${scope.color} rounded-bl-3xl opacity-20`}
                />

                {/* Scope Content */}
                <div className="text-center relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-r ${scope.color} flex items-center justify-center text-xl text-white mb-3 mx-auto transition-transform duration-300 group-hover:scale-110`}
                  >
                    {scope.icon}
                  </div>

                  {/* Region Title */}
                  <h3 className="text-xl font-bold text-palladian mb-4">
                    {scope.region}
                  </h3>

                  {/* Locations List */}
                  <div className="space-y-2">
                    {scope.locations.map((location, locationIndex) => (
                      <motion.div
                        key={locationIndex}
                        className="flex items-center justify-center gap-2 text-palladian/90 group/location"
                        variants={locationVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 + locationIndex * 0.06 }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${scope.color} shrink-0 transition-transform duration-300 group-hover/location:scale-125`}
                        />
                        <span className="text-sm font-medium transition-colors duration-300 group-hover/location:text-burning-flame">
                          {location}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
              دعنا نضيف إنجازاً جديداً إلى سجل إنجازاتك
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {/* Phone Button */}
              <a
                href="tel:+963996320963"
                className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">اتصل بنا الآن</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
              </a>

              {/* Projects Button */}
              <a
                href="/projects"
                className="bg-blue-fantastic text-palladian px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-palladian relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">شاهد مشاريعنا</span>
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
