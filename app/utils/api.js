// utils/api.js

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiClient = {
    login: async (email, password) => {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        return response.json();
    },

    verifyToken: async (token) => {
        const response = await fetch(`${API_URL}/auth/verify`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.ok;
    }
};

export const wishlistAPI = {
    join: async (data) => {
        try {
            const response = await fetch(`${API_URL}/waitlist/join`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong');
            }

            return result;
        } catch (error) {
            throw error;
        }
    },
};

export const wishlistAPIUser = {
    // Get all users
    getUsers: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/waitlist/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch users');
            }

            return data;
        } catch (error) {
            throw error;
        }
    },

    // Update user status
    updateUserStatus: async (userId, status) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/wishlist/users/${userId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to update status');
            }

            return data;
        } catch (error) {
            throw error;
        }
    }
};

export const authAPI = {
    login: async (credentials) => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Invalid email or password');
            }

            return data;
        } catch (error) {
            throw error;
        }
    },

    verifyToken: async (token) => {
        try {
            const response = await fetch(`${API_URL}/auth/verify`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.ok;
        } catch (error) {
            return false;
        }
    },

    // Helper methods for managing authentication state
    saveAuthData: (token, userData, rememberMe, email, password) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify(userData));

        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email || '');
            localStorage.setItem('rememberedPassword', password || '');
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
            localStorage.removeItem('rememberMe');
        }
    },

    clearAuthData: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
        localStorage.removeItem('rememberMe');
    },

    getStoredAuthData: () => {
        return {
            token: localStorage.getItem('token'),
            userData: JSON.parse(localStorage.getItem('userData') || '{}'),
            rememberedEmail: localStorage.getItem('rememberedEmail'),
            rememberedPassword: localStorage.getItem('rememberedPassword'),
            rememberMe: localStorage.getItem('rememberMe') === 'true'
        };
    }
};