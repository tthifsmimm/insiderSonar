"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Users, Zap, ExternalLink } from "lucide-react";
import { AISearch } from "@/components/ai-search";

// Mock data
const topWallets = [
  { id: "1", address: "0x742d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E1C", returns: 2847.5, value: "$12.4M", lastActive: "2 hours ago" },
  { id: "2", address: "0x123d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E2D", returns: 1923.2, value: "$8.7M", lastActive: "5 hours ago" },
  { id: "3", address: "0x456d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E3E", returns: 1456.8, value: "$15.2M", lastActive: "1 day ago" }
];

const popularCoins = [
  { symbol: "ETH", name: "Ethereum", holders: 127, volume: "$45.2M" },
  { symbol: "BTC", name: "Bitcoin", holders: 89, volume: "$32.1M" },
  { symbol: "LINK", name: "Chainlink", holders: 67, volume: "$18.9M" }
];

const topReturns = [
  { symbol: "PEPE", name: "Pepe", returns: 3421.7, holders: 23 },
  { symbol: "SHIB", name: "Shiba Inu", returns: 2156.3, holders: 45 },
  { symbol: "DOGE", name: "Dogecoin", returns: 1892.1, holders: 67 }
];

const recentLeaks = [
  { id: "1", description: "Major whale accumulated 15M USDC on Binance", timestamp: "2 hours ago", type: "accumulation" },
  { id: "2", description: "Insider wallet moved 50 ETH to new address", timestamp: "4 hours ago", type: "transfer" },
  { id: "3", description: "Large LINK position opened by tracked wallet", timestamp: "6 hours ago", type: "buy" }
];

export default function Dashboard() {
  const handleSearch = (query: string, filters: any) => {
    console.log("AI Search:", query, filters);
    // TODO: Implement actual search/filter logic
    // This would typically call an API endpoint that processes the natural language query
    // and returns filtered results for wallets, coins, and leaks
  };

  const handleFollowUp = (query: string) => {
    console.log("Follow-up query:", query);
    // TODO: Handle follow-up queries
    handleSearch(query, {});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Crypto Insider Intelligence
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Track whale movements and discover profitable opportunities before the crowd
        </p>
      </div>

      {/* AI Search Component */}
      <AISearch onSearch={handleSearch} onFollowUp={handleFollowUp} />

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-blue-900">Total Tracked Wallets</h3>
            <Users className="h-5 w-5 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-900">1,247</div>
          <p className="text-xs text-blue-700">+12% from last month</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-green-900">Combined Portfolio Value</h3>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-900">$2.1B</div>
          <p className="text-xs text-green-700">+8.2% from yesterday</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-purple-900">Avg Return Rate</h3>
            <ArrowUpRight className="h-5 w-5 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-purple-900">847%</div>
          <p className="text-xs text-purple-700">Across all tracked wallets</p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-orange-900">Recent Leaks</h3>
            <Zap className="h-5 w-5 text-orange-600" />
          </div>
          <div className="text-3xl font-bold text-orange-900">23</div>
          <p className="text-xs text-orange-700">In the last 24 hours</p>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Wallets by Returns */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Top Wallets by Returns</h2>
              <p className="text-sm text-slate-600">Highest performing insider wallets</p>
            </div>
            <Link href="/wallets">
              <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50">
                View All
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {topWallets.map((wallet) => (
              <div key={wallet.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200">
                <div className="flex-1">
                  <Link href={`/wallets/${wallet.id}`} className="font-mono text-sm text-blue-600 hover:text-blue-800">
                    {wallet.address.slice(0, 10)}...{wallet.address.slice(-8)}
                  </Link>
                  <p className="text-xs text-slate-500">{wallet.lastActive}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-slate-900">{wallet.value}</div>
                  <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">
                    +{wallet.returns.toLocaleString()}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Coins by Popularity */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Most Popular Coins</h2>
              <p className="text-sm text-slate-600">Coins held by most insiders</p>
            </div>
            <Link href="/coins">
              <Button variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50">
                View All
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {popularCoins.map((coin) => (
              <div key={coin.symbol} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-slate-50 to-purple-50 border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{coin.symbol.slice(0, 2)}</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{coin.symbol}</div>
                    <div className="text-xs text-slate-500">{coin.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-slate-900">{coin.volume}</div>
                  <div className="text-xs text-slate-500">{coin.holders} holders</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Coins by Returns */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Top Performing Coins</h2>
              <p className="text-sm text-slate-600">Highest returns from insider activity</p>
            </div>
            <Link href="/coins">
              <Button variant="outline" size="sm" className="border-green-200 hover:bg-green-50">
                View All
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {topReturns.map((coin) => (
              <div key={coin.symbol} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-slate-50 to-green-50 border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{coin.symbol.slice(0, 2)}</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{coin.symbol}</div>
                    <div className="text-xs text-slate-500">{coin.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 mb-1">
                    +{coin.returns.toLocaleString()}%
                  </Badge>
                  <div className="text-xs text-slate-500">{coin.holders} holders</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Insider Leaks */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Recent Insider Leaks</h2>
              <p className="text-sm text-slate-600">Latest insider activity alerts</p>
            </div>
            <Link href="/leaks">
              <Button variant="outline" size="sm" className="border-orange-200 hover:bg-orange-50">
                View All
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {recentLeaks.map((leak) => (
              <div key={leak.id} className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400">
                <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-sm text-slate-700">{leak.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs text-slate-500">{leak.timestamp}</span>
                    <Badge variant="outline" className="text-xs border-orange-200 text-orange-700">
                      {leak.type}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
