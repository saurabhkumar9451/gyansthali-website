'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    LayoutDashboard,
    Users,
    GraduationCap,
    CreditCard,
    BookOpen,
    Bell,
    LogOut
} from "lucide-react";

export default function Sidebar() {

    const pathname = usePathname();

    const menus = [

        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/admin/dashboard"
        },

        {
            name: "Students",
            icon: Users,
            path: "/admin/students"
        },

        {
            name: "Admissions",
            icon: GraduationCap,
            path: "/admin/admissions"
        },

        {
            name: "Payments",
            icon: CreditCard,
            path: "/admin/payments"
        },

        {
            name: "Courses",
            icon: BookOpen,
            path: "/admin/courses"
        },

        {
            name: "Notices",
            icon: Bell,
            path: "/admin/notices"
        }

    ];

    return (

        <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0">

            {/* Logo */}

            <div className="h-20 flex items-center justify-center border-b border-slate-700">

                <h1 className="text-2xl font-bold text-green-400">

                    GYANSTHALI

                </h1>

            </div>

            {/* Menu */}

            <div className="mt-6">

                {

                    menus.map((menu) => {

                        const Icon = menu.icon;

                        return (

                            <Link
                                key={menu.name}
                                href={menu.path}
                                className={`flex items-center gap-4 px-6 py-4 transition-all
                                ${pathname === menu.path
                                        ? "bg-blue-600"
                                        : "hover:bg-slate-800"
                                    }`}
                            >

                                <Icon size={20} />

                                <span>

                                    {menu.name}

                                </span>

                            </Link>

                        );

                    })

                }

            </div>

            {/* Logout */}

            <div className="absolute bottom-0 w-full border-t border-slate-700">

                <button
                    className="flex items-center gap-4 px-6 py-4 hover:bg-red-600 w-full transition"
                >

                    <LogOut size={20} />

                    Logout

                </button>

            </div>

        </aside>

    );

}