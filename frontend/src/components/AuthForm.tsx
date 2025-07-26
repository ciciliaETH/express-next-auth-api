'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { login, register } from '@/lib/api';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const schema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

type FormData = {
    email: string;
    password: string;
};

export default function AuthForm({ mode }: { mode: 'login' | 'register' }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    const {
        register: registerForm,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            if (mode === 'login') {
                const response = await login(data.email, data.password);
                localStorage.setItem('token', response.token);
                toast.success('Login successful. Welcome!');
                router.push('/dashboard');
            } else {
                await register(data.email, data.password);
                toast.success('Registration successful. Please login.');
                router.push('/auth/login');
            }
        } catch (error) {
            const err = error as { response?: { data?: { error?: string } } };
            toast.error(err.response?.data?.error || 'Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md bg-[#111] p-8 rounded-2xl backdrop-blur-lg relative z-10">
            <h1 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                {mode === 'login' ? 'Welcome Back' : 'Join Us Today'}
            </h1>

            <div className="space-y-4">
                <div className="relative">
                    <div className="flex items-center bg-[#1A1A1A] rounded-lg px-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <input
                            {...registerForm('email')}
                            type="email"
                            placeholder="Email"
                            className="bg-transparent w-full text-gray-200 focus:outline-none"
                        />
                    </div>
                    {errors.email && (
                        <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                    )}
                </div>

                <div className="relative">
                    <div className="flex items-center bg-[#1A1A1A] rounded-lg px-4 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input
                            {...registerForm('password')}
                            type="password"
                            placeholder="Password"
                            className="bg-transparent w-full text-gray-200 focus:outline-none"
                        />
                    </div>
                    {errors.password && (
                        <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
                    )}
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-lg text-white font-medium bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-300 disabled:opacity-50"
            >
                {loading ? (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                    </div>
                ) : (
                    mode === 'login' ? 'Sign In' : 'Create Account'
                )}
            </button>

            <div className="text-center text-gray-400 text-sm">
                {mode === 'login' ? (
                    <p className="text-gray-500">Don't have an account? <a href="/auth/register" className="text-violet-500 hover:text-violet-400 transition-colors">Create one</a></p>
                ) : (
                    <p className="text-gray-500">Already have an account? <a href="/auth/login" className="text-violet-500 hover:text-violet-400 transition-colors">Sign in</a></p>
                )}
            </div>
        </form>
    );
}
