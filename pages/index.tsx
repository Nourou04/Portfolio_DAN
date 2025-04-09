import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8">
           Je me nomme DIALLO ABDOUNOUROU <br />Développeur Web passionné et créatif
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-96 md:h-[400px]"
          >
            <Image
              src="/images/profile/WhatsApp Image 2025-03-27 à 11.09.32_ebafefdd.jpg"
              alt="Photo de profil"
              fill
              className="object-cover rounded-lg"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
            <p className="mb-4">
              Passionné par le développement web, je crée des applications modernes et réactives.
            </p>
            <p>
              Fort d'une expérience dans les technologies web les plus récentes, je m'efforce de
              créer des expériences utilisateur exceptionnelles.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-6">Mes compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="font-semibold">Frontend</h3>
              <ul className="list-disc list-inside mt-2">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>C#</li>
                <li>HTML-CSS-JS</li>
                <li>Java</li>
                <li>SQL</li>

                
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="font-semibold">Backend</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="font-semibold">Outils</h3>
              <ul className="list-disc list-inside mt-2">
                <li>GitHub</li>
                <li>astah-Uml</li>
                <li>VS Code</li>
                <li>Visual Studio</li>
                <li>SSMS</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="font-semibold">Autres</h3>
              <ul className="list-disc list-inside mt-2">
                <li>SEO</li>
                <li>UX/UI</li>
                <li>Responsive Design</li>
                <li>API REST</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
