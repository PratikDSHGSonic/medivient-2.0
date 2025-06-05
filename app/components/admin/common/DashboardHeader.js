"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogOut } from 'lucide-react'; // Make sure to install lucide-react if not already installed

export default function DashboardHeader() {
    const router = useRouter();

    const handleLogout = () => {
        // Clear all stored data
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        // localStorage.removeItem('rememberedEmail');
        // localStorage.removeItem('rememberedPassword');
        // localStorage.removeItem('rememberMe');
        
        // Redirect to signin page
        router.push('/signin');
    };

    return (
        <header className="bg-white shadow-md">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="cursor-pointer">
                            <Image
                                src="/Logo Name Only Navy.png"
                                alt="Tangle Logo"
                                width={200}
                                height={150}
                                // className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Logout Button */}
                    <div>
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ff6900] hover:bg-[#ff8533] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6900] transition-colors duration-200"
                        >
                            <LogOut className="mr-2 -ml-1 h-4 w-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}