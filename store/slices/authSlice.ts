import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  users: User[];
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
  users: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email } = action.payload;
      const existingUser = state.users.find(user => user.email === email);
      
      if (existingUser) {
        state.user = existingUser;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Utilisateur non trouvé";
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    register: (state, action: PayloadAction<{ name: string; email: string; password: string }>) => {
      const { name, email } = action.payload;
      
      const userExists = state.users.some(user => user.email === email);
      
      if (userExists) {
        state.error = "Un compte avec cet email existe déjà";
        return;
      }

      const newUser = {
        id: new Date().getTime().toString(),
        email,
        name,
      };

      state.users.push(newUser);
      state.user = newUser;
      state.isAuthenticated = true;
      state.error = null;
    },
  },
});

export const { login, logout, setError, register } = authSlice.actions;
export default authSlice.reducer;
