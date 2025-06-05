

"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { wishlistAPIUser } from '../../../utils/api';
import DashboardHeader from '../common/DashboardHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ClipboardX } from 'lucide-react';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [previousPage, setPreviousPage] = useState(1);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/signin');
            return;
        }

        fetchUsers();
    }, [router]);

    const fetchUsers = async () => {
        try {
            const response = await wishlistAPIUser.getUsers();
            setUsers(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to load users');
            console.error('Error fetching users:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchChange = (e) => {
        const newSearchTerm = e.target.value;
        
        if (newSearchTerm) {
            // If starting a new search, store the current page
            if (!searchTerm) {
                setPreviousPage(currentPage);
            }
            setCurrentPage(1);
        } else {
            // If clearing the search, restore the previous page
            setCurrentPage(previousPage);
        }
        
        setSearchTerm(newSearchTerm);
    };

    const getFilteredUsers = () => {
        if (!searchTerm) return users;
        
        return users.filter(user => 
            user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const getCurrentUsers = () => {
        const filteredUsers = getFilteredUsers();
        const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
        
        // Adjust current page if it exceeds the total pages after filtering
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages);
        }
        
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        
        return {
            currentUsers: filteredUsers.slice(indexOfFirstUser, indexOfLastUser),
            totalUsers: filteredUsers.length
        };
    };

    const renderPaginationButtons = () => {
        let pages = [];
        const maxVisiblePages = 4;
    
        if (totalPages <= maxVisiblePages) {
            // If total pages are less than or equal to max visible pages, show all
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always include first page
            pages.push(1);
    
            // Calculate range around current page
            let leftBound = Math.max(2, currentPage - 1);
            let rightBound = Math.min(totalPages - 1, currentPage + 1);
    
            // Add ellipsis if there's a gap after 1
            if (leftBound > 2) {
                pages.push('...');
            }
    
            // Add pages around current page
            for (let i = leftBound; i <= rightBound; i++) {
                pages.push(i);
            }
    
            // Add ellipsis if there's a gap before last page
            if (rightBound < totalPages - 1) {
                pages.push('...');
            }
    
            // Always include last page
            if (totalPages !== 1) {
                pages.push(totalPages);
            }
        }
    
        return pages;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'UTC',
        });
    };

    const { currentUsers, totalUsers } = getCurrentUsers();
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#fff3eb] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff6900]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#fff3eb] flex items-center justify-center">
                <div className="bg-red-100 text-red-700 p-4 rounded-lg">
                    {error}
                </div>
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="min-h-screen bg-[#fff3eb] p-6">
                <DashboardHeader />
                
                 
                <div className="max-w-7xl mx-auto mt-10">
                    <div className="bg-white rounded-[30px] shadow-xl overflow-hidden">
                        <div className="px-6 py-4 bg-[#ffa362]">
                            <h1 className="text-2xl font-semibold text-white">Waitlist Users</h1>
                        </div>

                        <div className="flex flex-col items-center justify-center p-16">
                            <div className="float-animation">
                                <ClipboardX size={80} className="text-gray-400 mb-4" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                                No Waitlist Found
                            </h3>
                            <p className="text-gray-500 text-center max-w-md">
                                There are currently no users in the waitlist. New users will appear here when they join.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fff3eb] p-6">
            <DashboardHeader />
            <div className="max-w-7xl mx-auto mt-10">
                <div className="bg-white rounded-[30px] shadow-xl overflow-hidden">
                    <div className="px-6 py-4 bg-[#ffa362]">
                        <h1 className="text-2xl font-semibold text-white">Waitlist Users</h1>
                    </div>

                    <div className="p-6">
                        <div className="mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search by name or email..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6900] focus:border-transparent"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Full Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Joined On
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {currentUsers.map((user) => (
                                        <tr key={user._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {user.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">
                                                    {user.email}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {formatDate(user.createdAt)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {totalUsers === 0 ? (
                            <div className="text-center py-10">
                                <p className="text-gray-500">No users found matching your search.</p>
                            </div>
                        ) : (
                            <div className="mt-6 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                                <div className="flex flex-1 justify-between sm:hidden">
                                    <button
                                        onClick={goToPreviousPage}
                                        disabled={currentPage === 1}
                                        className={`relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${
                                            currentPage === 1
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={goToNextPage}
                                        disabled={currentPage === totalPages}
                                        className={`relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${
                                            currentPage === totalPages
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        Next
                                    </button>
                                </div>
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">
                                                {((currentPage - 1) * usersPerPage) + 1}
                                            </span> to{' '}
                                            <span className="font-medium">
                                                {Math.min(currentPage * usersPerPage, totalUsers)}
                                            </span>{' '}
                                            of <span className="font-medium">{totalUsers}</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                            <button
                                                onClick={goToPreviousPage}
                                                disabled={currentPage === 1}
                                                className={`relative inline-flex items-center rounded-l-md px-2 py-2 bg-white text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                                                    currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:text-gray-500'
                                                }`}
                                            >
                                                <ChevronLeft className="h-5 w-5" />
                                            </button>
                                            
                                            {renderPaginationButtons().map((page, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => page !== '...' && paginate(page)}
                                                    disabled={page === '...'}
                                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                                        page === '...' 
                                                            ? 'bg-white text-gray-700 cursor-default'
                                                            : currentPage === page
                                                                ? 'z-10 bg-[#ff6900] text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6900]'
                                                                : 'bg-white text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                                                    }`}
                                                >
                                                    {page}
                                                </button>
                                            ))}
                                            
                                            <button
                                                onClick={goToNextPage}
                                                disabled={currentPage === totalPages}
                                                className={`relative inline-flex items-center rounded-r-md px-2 py-2 bg-white text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                                                    currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:text-gray-500'
                                                }`}
                                            >
                                                <ChevronRight className="h-5 w-5" />
                                            </button>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default UsersList;