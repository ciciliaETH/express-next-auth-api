'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/auth/login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('Logged out successfully');
        router.push('/auth/login');
    };

    return (
        <div className="min-h-screen animate-gradient relative">
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm z-0"></div>
            
            {/* Grid pattern */}
            <div className="fixed inset-0" style={{ 
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
            }}></div>

            <div className="max-w-md mx-auto pt-20 px-4 relative z-10">
                <div className="bg-[#111] p-8 rounded-2xl backdrop-blur-lg relative z-10">
                    <h1 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                        Dashboard
                    </h1>
                    
                    <p className="text-gray-400 mb-8">
                        Welcome! You are successfully logged in.
                    </p>

                    <button
                        onClick={handleLogout}
                        className="w-full py-3 px-4 rounded-lg text-white font-medium bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-300"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
    );
}
