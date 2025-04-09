import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  rating: number;
  date: string;
}

interface TestimonialsState {
  testimonials: Testimonial[];
  error: string | null;
}

const initialState: TestimonialsState = {
  testimonials: [],
  error: null,
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    addTestimonial: (state, action: PayloadAction<Testimonial>) => {
      state.testimonials.push(action.payload);
      state.error = null;
    },
    updateTestimonial: (state, action: PayloadAction<Testimonial>) => {
      const index = state.testimonials.findIndex(
        (t) => t.id === action.payload.id
      );
      if (index !== -1) {
        state.testimonials[index] = action.payload;
        state.error = null;
      }
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { addTestimonial, updateTestimonial, setError } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
