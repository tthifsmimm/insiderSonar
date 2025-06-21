import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function Navigation() {
  return (
    <nav className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 shadow-lg">
              <span className="text-base font-bold text-white">IS</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                InsiderSonar
              </span>
              <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
                Insider Tracker
              </Badge>
            </div>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group"
            >
              Dashboard
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/wallets" 
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group"
            >
              Wallets
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/coins" 
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group"
            >
              Top Coins
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/leaks" 
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors relative group"
            >
              Insider Leaks
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 