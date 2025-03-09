import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white min-h-screen font-bold">
      <section className="h-screen flex flex-col justify-center items-center text-center p-10">
        <motion.h1
          className="text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bem-vindo à Nossa Agência
        </motion.h1>
        <motion.p
          className="mt-4 text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Criatividade e inovação para levar sua marca ao próximo nível.
        </motion.p>
      </section>
    </div>
  );
}