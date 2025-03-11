"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = ["English", "हिन्दी", "मराठी"];

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <nav className="flex items-center space-x-6 ml-auto">
          <Link href="/" className="text-sm font-medium text-white hover:text-primary">
            Home
          </Link>
          <Link href="/login" className="text-sm font-medium text-white hover:text-primary">
            Login
          </Link>
          <Link href="/help" className="text-sm font-medium text-white hover:text-primary">
            Help
          </Link>
           
          <Link href="/contact" className="text-sm font-medium text-white hover:text-primary">
            Contact Us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Languages className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((language, index) => (
                <DropdownMenuItem key={index}>{language}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white">
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}

