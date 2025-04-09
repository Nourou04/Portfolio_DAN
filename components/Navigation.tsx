import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';

const Navigation = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            Mon Portfolio
          </Link>
          <div className="space-x-6">
            <Link href="/projets" className="hover:text-gray-300">
              Projets
            </Link>
            <Link href="/temoignages" className="hover:text-gray-300">
              Témoignages
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            {isAuthenticated ? (
              <div className="inline-flex items-center space-x-4">
                <span className="text-gray-300">Bonjour, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                  Connexion
                </Link>
                <Link href="/inscription" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded ml-2">
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation; 