import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { Testimonial } from '../store/slices/testimonialsSlice';
import { addTestimonial, updateTestimonial, setError } from '../store/slices/testimonialsSlice';

export default function Temoignages() {
  const dispatch = useDispatch();
  const testimonials = useSelector((state: RootState) => state.testimonials.testimonials);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [newTestimonial, setNewTestimonial] = useState<Testimonial>({
    id: new Date().getTime().toString(),
    name: '',
    message: '',
    rating: 5,
    date: new Date().toISOString(),
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    message: '',
  });

  const validateForm = () => {
    const errors = {
      name: '',
      message: '',
    };

    if (!newTestimonial.name) {
      errors.name = 'Le nom est requis';
    }

    if (!newTestimonial.message) {
      errors.message = 'Le message est requis';
    } else if (newTestimonial.message.length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addTestimonial(newTestimonial));
      setNewTestimonial({
        id: new Date().getTime().toString(),
        name: '',
        message: '',
        rating: 5,
        date: new Date().toISOString(),
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Témoignages</h1>

      {isAuthenticated && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Laisser un témoignage</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Nom</label>
              <input
                type="text"
                value={newTestimonial.name}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, name: e.target.value })
                }
                className={`w-full px-3 py-2 rounded bg-gray-700 text-white ${
                  formErrors.name ? 'border-red-500' : 'border-gray-600'
                }`}
              />
              {formErrors.name && (
                <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                value={newTestimonial.message}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, message: e.target.value })
                }
                className={`w-full px-3 py-2 rounded bg-gray-700 text-white ${
                  formErrors.message ? 'border-red-500' : 'border-gray-600'
                }`}
                rows={4}
              />
              {formErrors.message && (
                <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Note</label>
              <select
                value={newTestimonial.rating}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, rating: parseInt(e.target.value) })
                }
                className="w-full px-3 py-2 rounded bg-gray-700 text-white border-gray-600"
              >
                <option value="1">1 étoile</option>
                <option value="2">2 étoiles</option>
                <option value="3">3 étoiles</option>
                <option value="4">4 étoiles</option>
                <option value="5">5 étoiles</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Soumettre
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">
                  {new Date(testimonial.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-yellow-400 mx-1 ${
                      star <= testimonial.rating ? 'opacity-100' : 'opacity-20'
                    }`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-300">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
