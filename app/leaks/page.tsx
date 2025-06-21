"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Zap, AlertTriangle, TrendingUp, DollarSign, Clock, ExternalLink } from "lucide-react";
import { AISearch } from "@/components/ai-search";

// Mock data for insider leaks
const leaks = [
  {
    id: "1",
    timestamp: "2024-01-15 14:32:18",
    timeAgo: "2 hours ago",
    type: "accumulation",
    severity: "high",
    title: "Massive USDC Accumulation Detected",
    description: "Whale wallet 0x742d35Cc moved 15M USDC from Binance to unknown wallet, suggesting preparation for large position entry",
    relatedWallet: "0x742d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E1C",
    relatedCoin: "USDC",
    impact: "Large capital deployment imminent",
    confidence: 92
  },
  {
    id: "2",
    timestamp: "2024-01-15 10:15:42",
    timeAgo: "4 hours ago",
    type: "transfer",
    severity: "medium",
    title: "Strategic ETH Consolidation",
    description: "Top performer wallet consolidated 50 ETH from 3 different addresses into main trading wallet",
    relatedWallet: "0x123d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E2D",
    relatedCoin: "ETH",
    impact: "Position consolidation for upcoming trade",
    confidence: 78
  },
  {
    id: "3",
    timestamp: "2024-01-15 08:20:33",
    timeAgo: "6 hours ago",
    type: "buy",
    severity: "high",
    title: "New LINK Position by Whale",
    description: "High-return insider opened substantial LINK position worth $2.3M, first LINK purchase in 6 months",
    relatedWallet: "0x456d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E3E",
    relatedCoin: "LINK",
    impact: "Potential bullish signal for LINK",
    confidence: 89
  },
  {
    id: "4",
    timestamp: "2024-01-14 20:45:17",
    timeAgo: "18 hours ago",
    type: "sell",
    severity: "medium",
    title: "Profit Taking on AAVE",
    description: "Insider wallet with 94% win rate took profits on AAVE position, selling 500 tokens at peak",
    relatedWallet: "0x789d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E4F",
    relatedCoin: "AAVE",
    impact: "Potential short-term resistance level",
    confidence: 85
  },
  {
    id: "5",
    timestamp: "2024-01-14 16:30:26",
    timeAgo: "22 hours ago",
    type: "accumulation",
    severity: "high",
    title: "Mystery Token Accumulation",
    description: "Multiple tracked wallets simultaneously accumulated unknown token 0x8f4...3d2, total value $5.2M",
    relatedWallet: null,
    relatedCoin: "Unknown",
    impact: "Potential new opportunity identified",
    confidence: 96
  },
  {
    id: "6",
    timestamp: "2024-01-14 13:12:45",
    timeAgo: "1 day ago",
    type: "transfer",
    severity: "low",
    title: "Cross-Chain Bridge Activity",
    description: "Insider moved assets from Ethereum to Arbitrum, possible DeFi yield farming preparation",
    relatedWallet: "0xABCd35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E5G",
    relatedCoin: "ETH",
    impact: "Cross-chain yield opportunity",
    confidence: 67
  },
  {
    id: "7",
    timestamp: "2024-01-14 09:58:12",
    timeAgo: "1 day ago",
    type: "buy",
    severity: "medium",
    title: "Altcoin Diversification",
    description: "High-performing wallet diversified into 5 different altcoins within 2-hour window",
    relatedWallet: "0xDEFd35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E6H",
    relatedCoin: "Multiple",
    impact: "Altcoin season preparation",
    confidence: 73
  }
];

export default function LeaksPage() {
  const handleSearch = (query: string, filters: Record<string, unknown>) => {
    console.log("AI Search on Leaks:", query, filters);
    // TODO: Implement leak-specific search logic
  };

  const handleFollowUp = (query: string) => {
    console.log("Follow-up query on Leaks:", query);
    handleSearch(query, {});
  };

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case "high": return { 
        bg: "bg-gradient-to-r from-red-50 to-pink-50 border-l-red-400", 
        icon: AlertTriangle, 
        iconColor: "text-red-600",
        badge: "bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200"
      };
      case "medium": return { 
        bg: "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-yellow-400", 
        icon: TrendingUp, 
        iconColor: "text-yellow-600",
        badge: "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-200"
      };
      case "low": return { 
        bg: "bg-gradient-to-r from-green-50 to-emerald-50 border-l-green-400", 
        icon: Clock, 
        iconColor: "text-green-600",
        badge: "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200"
      };
      default: return { 
        bg: "bg-gradient-to-r from-blue-50 to-indigo-50 border-l-blue-400", 
        icon: Clock, 
        iconColor: "text-blue-600",
        badge: "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200"
      };
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "buy": return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200";
      case "sell": return "bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200";
      case "transfer": return "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200";
      case "accumulation": return "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 border-purple-200";
      default: return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Insider Leaks
        </h1>
        <p className="text-slate-600 text-lg">
          Early alerts and insights from insider wallet activities - stay ahead of the market
        </p>
      </div>

      {/* AI Search Component */}
      <AISearch onSearch={handleSearch} onFollowUp={handleFollowUp} />

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-blue-900">Total Leaks</h3>
            <Zap className="h-5 w-5 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-900">1,247</div>
          <p className="text-xs text-blue-700">All time detected</p>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-pink-100 border border-red-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-red-900">Today&apos;s Leaks</h3>
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div className="text-3xl font-bold text-red-900">23</div>
          <p className="text-xs text-red-700">+12% from yesterday</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-green-900">Avg Confidence</h3>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-900">84.2%</div>
          <p className="text-xs text-green-700">Signal accuracy</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-purple-900">Success Rate</h3>
            <DollarSign className="h-5 w-5 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-purple-900">78.9%</div>
          <p className="text-xs text-purple-700">Profitable signals</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Filter className="h-5 w-5 text-orange-600" />
          Filters & Search
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Search by coin, wallet, or description..." 
              className="pl-10 border-slate-300 focus:border-orange-400"
            />
          </div>
          <Select defaultValue="all-types">
            <SelectTrigger className="w-[140px] border-slate-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-types">All Types</SelectItem>
              <SelectItem value="buy">Buy Orders</SelectItem>
              <SelectItem value="sell">Sell Orders</SelectItem>
              <SelectItem value="transfer">Transfers</SelectItem>
              <SelectItem value="accumulation">Accumulation</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-severity">
            <SelectTrigger className="w-[140px] border-slate-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-severity">All Severity</SelectItem>
              <SelectItem value="high">High Impact</SelectItem>
              <SelectItem value="medium">Medium Impact</SelectItem>
              <SelectItem value="low">Low Impact</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[140px] border-slate-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="confidence">By Confidence</SelectItem>
              <SelectItem value="impact">By Impact</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Leaks Feed */}
      <div className="space-y-6">
        {leaks.map((leak) => {
          const severityConfig = getSeverityConfig(leak.severity);
          const SeverityIcon = severityConfig.icon;

          return (
            <div key={leak.id} className={`${severityConfig.bg} border-l-4 rounded-lg p-6 hover:scale-[1.01] transition-transform duration-200`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                    <SeverityIcon className={`h-6 w-6 ${severityConfig.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">{leak.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-600 mt-1">
                      <Clock className="h-4 w-4" />
                      <span>{leak.timeAgo}</span>
                      <span>•</span>
                      <span>{leak.timestamp}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={severityConfig.badge}>
                    {leak.severity.toUpperCase()}
                  </Badge>
                  <Badge className={getTypeBadge(leak.type)}>
                    {leak.type.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                {leak.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {leak.relatedWallet && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-slate-600">Wallet:</span>
                    <Button variant="link" className="h-auto p-0 font-mono text-sm text-blue-600 hover:text-blue-800">
                      {leak.relatedWallet.slice(0, 10)}...{leak.relatedWallet.slice(-8)}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-slate-600">Asset:</span>
                  <Badge className="bg-white/80 text-slate-700 border-slate-300">{leak.relatedCoin}</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-slate-600">Confidence:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-slate-900">{leak.confidence}%</span>
                    <div className="w-20 h-3 bg-white/60 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-300" 
                        style={{ width: `${leak.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-white/40">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-800">Impact Analysis:</span>
                  <span className="text-sm text-slate-700">{leak.impact}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-12">
        <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg">
          Load More Leaks
        </Button>
      </div>
    </div>
  );
} 