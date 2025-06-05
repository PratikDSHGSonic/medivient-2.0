"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { authAPI } from '../../../utils/api';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        general: ''
    });
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            router.push('/wishlist');
        }

        return () => {
            setIsLoading(false);
            setIsAuthenticated(false);
        };
    }, [router]);

    useEffect(() => {
        const { rememberedEmail, rememberedPassword, rememberMe } = authAPI.getStoredAuthData();
        
        if (rememberMe) {
            setEmail(rememberedEmail || '');
            setPassword(rememberedPassword || '');
            setRememberMe(true);
        }
    }, []);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setErrors(prev => ({
            ...prev,
            email: '',
            general: ''
        }));
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setErrors(prev => ({
            ...prev,
            password: '',
            general: ''
        }));
    };

    const handleRememberMeChange = (e) => {
        const isChecked = e.target.checked;
        setRememberMe(isChecked);
        
        if (!isChecked) {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('userData');
        }
    };

    const validateInputs = () => {
        const newErrors = {
            email: '',
            password: '',
            general: ''
        };

        let hasErrors = false;

        if (!email) {
            newErrors.email = 'Email is required';
            hasErrors = true;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email';
            hasErrors = true;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            hasErrors = true;
        }

        return hasErrors ? newErrors : null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setErrors({
            email: '',
            password: '',
            general: ''
        });

        const validationErrors = validateInputs();
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);

        try {
            const response = await authAPI.login({ email, password });
            
            authAPI.saveAuthData(
                response.token,
                response.user,
                rememberMe,
                rememberMe ? email : undefined,
                rememberMe ? password : undefined
            );

            setIsAuthenticated(true);
            router.push('/wishlist');
            
        } catch (error) {
            setErrors({
                ...errors,
                general: error.message || 'Something went wrong. Please try again.'
            });
            setIsLoading(false);
        }
    };

    if (isAuthenticated || isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#112d4e]"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-white flex items-center justify-center">
            <div className="w-full max-w-[450px] bg-white rounded-[30px] shadow-xl">
                <div className="flex flex-col items-center rounded-tl-[30px] rounded-tr-[30px] bg-[#ffc83f]">
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src="/Logo Name Only Navy.png"
                            alt="Logo"
                            width={150}
                            height={40}
                        />
                    </Link>
                </div>

                <div className="w-full bg-white rounded-[30px] shadow-xl p-8">
                    {errors.general && (
                        <div className="mb-4 p-3 bg-red-50 text-red-500 text-sm rounded-lg">
                            {errors.general}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 py-8">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl text-[#112d4e] bold">Admin Sign In</h1>
                        </div>
                        
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder={errors.email || "Email"}
                                disabled={isLoading}
                                className={`w-full px-4 py-3 border-b ${
                                    errors.email ? 'border-red-500 placeholder-red-500' : 'border-gray-200'
                                } focus:border-[#112d4e] outline-none text-[#112d4e] disabled:bg-gray-50 disabled:cursor-not-allowed`}
                            />
                            <Mail
                                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400"
                                size={18}
                                color='#112d4e'
                            />
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder={errors.password || "Password"}
                                disabled={isLoading}
                                className={`w-full px-4 py-3 border-b ${
                                    errors.password ? 'border-red-500 placeholder-red-500' : 'border-gray-200'
                                } focus:border-[#112d4e] outline-none text-[#112d4e] disabled:bg-gray-50 disabled:cursor-not-allowed`}
                            />
                            <div
                                onClick={() => !isLoading && setShowPassword(!showPassword)}
                                className={`absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 ${!isLoading && 'cursor-pointer'} select-none`}
                            >
                                {showPassword ? <EyeOff color='#112d4e' size={18} /> : <Eye color='#112d4e' size={18} />}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                disabled={isLoading}
                                className="w-4 h-4 mr-2 border-gray-300 rounded disabled:cursor-not-allowed"
                            />
                            <label htmlFor="remember" className="text-sm text-[#112d4e]">
                                Remember Me
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#ffc83f] text-[#112d4e] py-3 rounded-full hover:bg-[#ffc83f]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#ffc83f]"
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;