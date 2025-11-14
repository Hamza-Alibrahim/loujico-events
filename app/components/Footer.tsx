"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-linear-to-t from-blue-fantastic to-abyssal-blue text-palladian relative overflow-hidden"
      dir="rtl"
    >
      {/* Footer Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-burning-flame/5 rounded-full blur-2xl"
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
          className="absolute top-10 left-10 w-24 h-24 bg-truffle-trouble/5 rounded-full blur-2xl"
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
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-burning-flame rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">ي</span>
                </div>
                <h3 className="text-xl font-bold">مؤسسة يوسف اللوجي</h3>
              </div>
              <p className="text-palladian/80 leading-relaxed mb-6 max-w-md text-right">
                شريكك الاستراتيجي نحو التميز في إدارة الفعاليات والمعارض. نقدم
                حلولاً متكاملة تجمع بين الإبداع والدقة.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { name: "تويتر", icon: "🐦", href: "#" },
                  { name: "لينكد إن", icon: "💼", href: "#" },
                  { name: "انستغرام", icon: "📷", href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-palladian/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-palladian/20 hover:bg-burning-flame/20 hover:border-burning-flame/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-6 text-burning-flame text-right">
                روابط سريعة
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { name: "الرئيسية", href: "#home" },
                  { name: "عن الشركة", href: "#about" },
                  { name: "خدماتنا", href: "#services" },
                  { name: "مشاريعنا", href: "#projects" },
                  { name: "اتصل بنا", href: "#contact" },
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="w-fit text-palladian/80 hover:text-burning-flame transition-colors duration-300 flex items-center gap-2 group text-right"
                    >
                      <span>{link.name}</span>
                      <span className="group-hover:-translate-x-1 transition-transform duration-300">
                        ←
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold mb-6 text-burning-flame text-right">
                خدماتنا
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  "إدارة الفعاليات الشاملة",
                  "تنظيم وتصميم الفعاليات",
                  "تشغيل المعارض والأجنحة",
                  "التسويق والترويج",
                ].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="text-right"
                  >
                    <span className="text-palladian/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-burning-flame rounded-full shrink-0" />
                      <span>{service}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold mb-6 text-burning-flame text-right">
                معلومات الاتصال
              </h4>
              <div className="flex flex-col gap-4">
                <motion.div
                  className="flex items-center flex-row-reverse gap-3 justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="text-right">
                    <p className="text-palladian/70 text-sm">هاتف</p>
                    <p className="font-medium">963996320963+</p>
                  </div>
                  <div className="w-10 h-10 bg-palladian/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-burning-flame">📞</span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center flex-row-reverse gap-3 justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="text-right">
                    <p className="text-palladian/70 text-sm">بريد إلكتروني</p>
                    <p className="font-medium">info@yousefallouji.com</p>
                  </div>
                  <div className="w-10 h-10 bg-palladian/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-burning-flame">📧</span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center flex-row-reverse gap-3 justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <div className="text-right">
                    <p className="text-palladian/70 text-sm">عنوان</p>
                    <p className="font-medium leading-relaxed">
                      أبو رمانة – دمشق - سوريا
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-palladian/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-burning-flame">🏢</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-palladian/20 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-palladian/70 text-sm text-center md:text-right order-2 md:order-1">
              © {currentYear} مؤسسة يوسف اللوجي التجارية. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm order-1 md:order-2">
              <a
                href="#"
                className="text-palladian/70 hover:text-burning-flame transition-colors duration-300"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-palladian/70 hover:text-burning-flame transition-colors duration-300"
              >
                شروط الخدمة
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
