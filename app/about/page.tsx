"use client";

import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
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
              عن الشركة
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-burning-flame font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              نصنع الفرق من خلال التميز والإبداع
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section with Stats */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision & Mission Cards */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mx-auto mb-20">
            {/* Vision Card */}
            <motion.div
              className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-8 sm:p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-burning-flame/20 rounded-bl-3xl" />

              <motion.div
                className="text-4xl mb-6 text-burning-flame"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                👁️
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-bold text-palladian mb-6">
                رؤيتنا
              </h2>

              <motion.p
                className="text-lg text-palladian/80 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                أن نكون الشريك الأكثر ثقة وابتكاراً في صناعة الفعاليات والمعارض
                محلياً وإقليمياً.
              </motion.p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-8 sm:p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-truffle-trouble/20 rounded-bl-3xl" />

              <motion.div
                className="text-4xl mb-6 text-truffle-trouble"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                🎯
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-bold text-palladian mb-6">
                رسالتنا
              </h2>

              <motion.p
                className="text-lg text-palladian/80 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                تقديم حلول إبداعية شاملة تحول أفكار عملائنا إلى تجارب واقعية
                استثنائية، من خلال فريق عمل محترف وتنفيذ دقيق واستخدام أحدث
                التقنيات.
              </motion.p>
            </motion.div>
          </div>

          {/* Stats Cards - Same style as home page */}
          <motion.div
            className="container mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { number: "+200", label: "مشروع مكتمل", icon: "🚀" },
                { number: "50+", label: "فريق متخصص", icon: "👥" },
                { number: "95%", label: "رضا العملاء", icon: "⭐" },
                { number: "5+", label: "سنوات خبرة", icon: "⏱️" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-fantastic backdrop-blur-sm p-6 rounded-xl border border-palladian/20 group relative overflow-hidden flex-1 min-w-[140px] sm:min-w-40 md:min-w-[180px]"
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

      {/* Work Culture Section */}
      <section className="py-20 bg-blue-fantastic">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              ثقافة العمل
            </h2>
            <p className="text-lg text-palladian/70">
              قيمنا الأساسية التي تميزنا وترشدنا في كل ما نقوم به
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {[
              {
                title: "الابتكار في كل ما نقدمه",
                icon: "💡",
                description:
                  "نبحث دائماً عن طرق جديدة ومبتكرة لتقديم حلول فريدة",
                color: "from-burning-flame to-orange-400",
              },
              {
                title: "الدقة في التنفيذ",
                icon: "🎯",
                description:
                  "نهتم بأدق التفاصيل لضمان الجودة والكمال في التنفيذ",
                color: "from-blue-fantastic to-blue-600",
              },
              {
                title: "الشفافية في التعامل",
                icon: "🔍",
                description: "الصراحة والوضوح أساس علاقتنا مع العملاء والشركاء",
                color: "from-green-500 to-emerald-600",
              },
              {
                title: "الالتزام بالمواعيد",
                icon: "⏰",
                description:
                  "نحترم مواعيدنا ونلتزم بتسليم المشاريع في وقتها المحدد",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "الجودة في الخدمة",
                icon: "⭐",
                description:
                  "نسعى للتميز في كل خدمة نقدمها لتجاوز توقعات العملاء",
                color: "from-truffle-trouble to-red-600",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-abyssal-blue rounded-xl shadow-lg border border-palladian/20 p-6 group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-linear-to-r ${value.color} flex items-center justify-center text-2xl text-white mb-4 mx-auto`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {value.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-palladian mb-3 text-center">
                  {value.title}
                </h3>

                <p className="text-palladian/80 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
