import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { register, setError } from '../store/slices/authSlice';

export default function Inscription() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const error = useSelector((state: any) => state.auth.error);

  useEffect(() => {
    // Réinitialiser les erreurs au chargement
    setFormErrors({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }, []);

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.name) {
      errors.name = 'Le nom est requis';
    }

    if (!formData.email) {
      errors.email = "L'email est requis";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Email invalide';
    }

    if (!formData.password) {
      errors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      errors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'La confirmation est requise';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      }));
      router.push('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Inscription
        </h2>
        {error && (
          <div className="bg-red-600 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="name">Nom</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-3 py-2 rounded bg-gray-700 text-white ${
                formErrors.name ? 'border-red-500' : 'border-gray-600'
              }`}
              placeholder="Entrez votre nom"
              aria-label="Nom"
              autoComplete="name"
            />
            {formErrors.name && (
              <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-3 py-2 rounded bg-gray-700 text-white ${
                formErrors.email ? 'border-red-500' : 'border-gray-600'
              }`}
              placeholder="Entrez votre email"
              aria-label="Email"
              autoComplete="email"
            />
            {formErrors.email && (
              <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`w-full px-3 py-2 rounded bg-gray-700 text-white ${
                formErrors.password ? 'border-red-500' : 'border-gray-600'
              }`}
              placeholder="Entrez votre mot de passe"
              aria-label="Mot de passe"
              autoComplete="new-password"
            />
            {formErrors.password && (
              <p className="text-red-400 text-sm mt-1">
                {formErrors.password}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="confirmPassword">
              Confirmer le mot de passe
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className={`w-full px-3 py-2 rounded bg-gray-700 text-white ${
                formErrors.confirmPassword ? 'border-red-500' : 'border-gray-600'
              }`}
              placeholder="Confirmez votre mot de passe"
              aria-label="Confirmation du mot de passe"
              autoComplete="new-password"
            />
            {formErrors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                {formErrors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            S'inscrire
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Déjà un compte ?{' '}
          <a href="/login" className="text-blue-400 hover:text-blue-300">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
