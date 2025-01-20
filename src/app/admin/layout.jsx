"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Layers, Users, Settings,  Grid, Hash } from "lucide-react";
import "../custom-styles.css";

const navItems = [
  // { icon: Layers, label: "Add Content", href: "/admin" },
  { icon: Layers, label: "All Content", href: "/admin/allContents" },
  { icon: Layers, label: "Update Content", href: "/admin" },
  { icon: Grid, label: "Categories", href: "/admin/categories" },
  { icon: Hash, label: "Hashtags", href: "/admin/hashtags" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="min-h-screen neon-background flex">
      <motion.aside
        initial={{ width: 250 }}
        animate={{ width: isSidebarOpen ? 250 : 80 }}
        className="bg-slate-900 text-white p-4 flex flex-col"
      >
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            initial={{ opacity: 1 }}
            animate={{ opacity: isSidebarOpen ? 1 : 0 }}
            className="text-2xl font-bold text-red-400"
          >
            <div>
              <Link href="/" className="text-white mr-4">
                Home
              </Link>
            </div>{" "}
          </motion.h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-red-400 hover:text-red-300"
          >
            {isSidebarOpen ? "<<" : ">>"}
          </button>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-red-500 text-white"
                      : "text-gray-300 hover:bg-red-500/20"
                  }`}
                >
                  <item.icon className="w-6 h-6 mr-2" />
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.aside>
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
