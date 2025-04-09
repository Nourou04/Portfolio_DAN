import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navigation from './Navigation';
import { RootState } from '../store';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-200">React</span>
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-200">Next.js</span>
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-200">Tailwind CSS</span>
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-200">Redux</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <div className="flex flex-col justify-center items-center space-y-4">
              <a href="https://github.com/Nourou04" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/abdounourou-diallo-5b3196291/" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <div className="flex flex-col space-y-2">
                <a href="mailto:dialloabdounourou04@gmail.com" className="text-blue-400 hover:text-blue-300">dialloabdounourou04@gmail.com</a>
                <a href="tel:+18197128459" className="text-blue-400 hover:text-blue-300">+1 (819) 712-8459</a>
              </div>
              <p className="mt-4">&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
