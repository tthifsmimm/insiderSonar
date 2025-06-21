"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, ArrowUpDown, ExternalLink, Wallet } from "lucide-react";
import { AISearch } from "@/components/ai-search";

// Mock data for all wallets
const allWallets = [
  { 
    id: "1", 
    address: "0x742d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E1C", 
    returns: 2847.5, 
    value: "$12.4M", 
    lastActive: "2 hours ago",
    risk: "Low",
    winRate: 94.2
  },
  { 
    id: "2", 
    address: "0x123d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E2D", 
    returns: 1923.2, 
    value: "$8.7M", 
    lastActive: "5 hours ago",
    risk: "Medium",
    winRate: 87.5
  },
  { 
    id: "3", 
    address: "0x456d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E3E", 
    returns: 1456.8, 
    value: "$15.2M", 
    lastActive: "1 day ago",
    risk: "Low",
    winRate: 91.3
  },
  { 
    id: "4", 
    address: "0x789d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E4F", 
    returns: 1234.1, 
    value: "$6.1M", 
    lastActive: "3 hours ago",
    risk: "High",
    winRate: 76.8
  },
  { 
    id: "5", 
    address: "0xABCd35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E5G", 
    returns: 987.4, 
    value: "$4.2M", 
    lastActive: "6 hours ago",
    risk: "Medium",
    winRate: 82.1
  },
  { 
    id: "6", 
    address: "0xDEFd35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E6H", 
    returns: 756.2, 
    value: "$3.8M", 
    lastActive: "12 hours ago",
    risk: "Low",
    winRate: 89.7
  }
];

export default function WalletsPage() {
  const handleSearch = (query: string, filters: Record<string, unknown>) => {
    console.log("AI Search on Wallets:", query, filters);
    // TODO: Implement wallet-specific search logic
  };

  const handleFollowUp = (query: string) => {
    console.log("Follow-up query on Wallets:", query);
    handleSearch(query, {});
  };

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200";
      case "Medium": return "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200";
      case "High": return "bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200";
      default: return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tracked Insider Wallets
        </h1>
        <p className="text-slate-600 text-lg">
          Monitor high-performing cryptocurrency wallets and their trading activities
        </p>
      </div>

      {/* AI Search Component */}
      <AISearch onSearch={handleSearch} onFollowUp={handleFollowUp} />

      {/* Filters and Search */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Search className="h-5 w-5 text-blue-600" />
          Filters & Search
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Search by wallet address..." 
              className="pl-10 border-slate-300 focus:border-blue-400"
            />
          </div>
          <Select defaultValue="returns">
            <SelectTrigger className="w-[180px] border-slate-300">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="returns">Highest Returns</SelectItem>
              <SelectItem value="value">Portfolio Value</SelectItem>
              <SelectItem value="winrate">Win Rate</SelectItem>
              <SelectItem value="activity">Last Active</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] border-slate-300">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risk</SelectItem>
              <SelectItem value="low">Low Risk</SelectItem>
              <SelectItem value="medium">Medium Risk</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Wallets Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
          <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
            <Wallet className="h-5 w-5 text-blue-600" />
            All Tracked Wallets ({allWallets.length})
          </h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead>
                  <Button variant="ghost" className="h-auto p-0 font-semibold text-slate-700 hover:text-blue-600">
                    Wallet Address
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-auto p-0 font-semibold text-slate-700 hover:text-blue-600">
                    Portfolio Value
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-auto p-0 font-semibold text-slate-700 hover:text-blue-600">
                    Total Returns
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="h-auto p-0 font-semibold text-slate-700 hover:text-blue-600">
                    Win Rate
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allWallets.map((wallet, index) => (
                <TableRow key={wallet.id} className={`hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {wallet.address.slice(2, 4).toUpperCase()}
                        </span>
                      </div>
                      <span className="font-mono text-sm text-slate-700">
                        {wallet.address.slice(0, 10)}...{wallet.address.slice(-8)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-slate-900">{wallet.value}</TableCell>
                  <TableCell>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">
                      +{wallet.returns.toLocaleString()}%
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-slate-900">{wallet.winRate}%</span>
                      <div className="w-16 h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-300" 
                          style={{ width: `${wallet.winRate}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRiskBadgeVariant(wallet.risk)}>
                      {wallet.risk}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-600">{wallet.lastActive}</TableCell>
                  <TableCell>
                    <Link href={`/wallets/${wallet.id}`}>
                      <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 text-blue-600">
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-blue-900">$54.4M</div>
          <p className="text-sm text-blue-700">Total Portfolio Value</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-green-900">+1,384%</div>
          <p className="text-sm text-green-700">Average Returns</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-purple-900">87.1%</div>
          <p className="text-sm text-purple-700">Average Win Rate</p>
        </div>
      </div>
    </div>
  );
} 