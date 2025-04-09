import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name) {
      errors.name = 'Le nom est requis';
    }

    if (!formData.email) {
      errors.email = 'L\'email est requis';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Email invalide';
    }

    if (!formData.message) {
      errors.message = 'Le message est requis';
    } else if (formData.message.length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Ici, vous pouvez ajouter la logique d'envoi du formulaire
      alert('Message envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-6">Contactez-moi</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Nom</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-3 py-2 rounded bg-gray-700 text-white ${
                  formErrors.name ? 'border-red-500' : 'border-gray-600'
                }`}
              />
              {formErrors.name && (
                <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3 py-2 rounded bg-gray-700 text-white ${
                  formErrors.email ? 'border-red-500' : 'border-gray-600'
                }`}
              />
              {formErrors.email && (
                <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-3 py-2 rounded bg-gray-700 text-white ${
                  formErrors.message ? 'border-red-500' : 'border-gray-600'
                }`}
                rows={4}
              />
              {formErrors.message && (
                <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Envoyer
            </button>
          </form>
        </div>
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                <p className="text-gray-300">+1 (819) 712-8459</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Adresse email</h3>
                <p className="text-gray-300">dialloabdounourou04@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Réseaux sociaux</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Nourou04?tab=achievements"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdounourou-diallo-5b3196291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
