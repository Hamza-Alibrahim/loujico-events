"use client";

import { motion } from "framer-motion";

const page = () => {
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
              إنجازاتنا
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-burning-flame font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              أرقام تدل على تميزنا
            </h2>
            <p className="text-lg text-palladian/70">
              إحصائيات حقيقية تعكس حجم ثقة عملائنا ومدى التزامنا بالتميز
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${achievement.color} rounded-bl-3xl opacity-20`}
                />

                {/* Achievement Content */}
                <div className="text-center relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-linear-to-r ${achievement.color} flex items-center justify-center text-2xl text-white mb-4 mx-auto`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {achievement.icon}
                  </motion.div>

                  {/* Number */}
                  <motion.h3
                    className="text-3xl sm:text-4xl font-bold text-burning-flame mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.4,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {achievement.number}
                  </motion.h3>

                  {/* Label */}
                  <motion.h4
                    className="text-xl font-bold text-palladian mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  >
                    {achievement.label}
                  </motion.h4>

                  {/* Description */}
                  <motion.p
                    className="text-palladian/80 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  >
                    {achievement.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Scope Section */}
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
              نطاق عملنا الجغرافي
            </h2>
            <p className="text-lg text-palladian/70">
              انتشار عالمي يضمن وصول خدماتنا إلى كل مكان
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {geographicScope.map((scope, index) => (
              <motion.div
                key={index}
                className="bg-abyssal-blue rounded-2xl shadow-xl border border-palladian/20 p-6 sm:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${scope.color} rounded-bl-3xl opacity-20`}
                />

                {/* Scope Content */}
                <div className="text-center relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-linear-to-r ${scope.color} flex items-center justify-center text-2xl text-white mb-4 mx-auto`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    {scope.icon}
                  </motion.div>

                  {/* Region Title */}
                  <motion.h3
                    className="text-2xl font-bold text-palladian mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  >
                    {scope.region}
                  </motion.h3>

                  {/* Locations List */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  >
                    {scope.locations.map((location, locationIndex) => (
                      <motion.div
                        key={locationIndex}
                        className="flex items-center justify-center gap-3 text-palladian/90 group/location"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + 0.6 + locationIndex * 0.1,
                        }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-linear-to-r ${scope.color} shrink-0`}
                        />
                        <span className="text-lg font-medium group-hover/location:text-burning-flame transition-colors duration-300">
                          {location}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
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
              دعنا نضيف إنجازاً جديداً إلى سجل إنجازاتك
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
                <span className="relative z-10">اتصل بنا الآن</span>
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
                <span className="relative z-10">شاهد مشاريعنا</span>
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
