"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, Users, DollarSign, Coins } from "lucide-react";
import { AISearch } from "@/components/ai-search";

// Mock data for popular coins (by holder count)
const popularCoins = [
  { 
    symbol: "ETH", 
    name: "Ethereum", 
    holders: 127, 
    totalVolume: "$45.2M",
    avgHolding: "$356K",
    change24h: 3.4,
    price: "$2,234.56",
    marketCap: "$268.7B"
  },
  { 
    symbol: "BTC", 
    name: "Bitcoin", 
    holders: 89, 
    totalVolume: "$32.1M",
    avgHolding: "$361K",
    change24h: -1.2,
    price: "$43,210.00",
    marketCap: "$851.2B"
  },
  { 
    symbol: "LINK", 
    name: "Chainlink", 
    holders: 67, 
    totalVolume: "$18.9M",
    avgHolding: "$282K",
    change24h: 8.7,
    price: "$18.45",
    marketCap: "$10.8B"
  },
  { 
    symbol: "UNI", 
    name: "Uniswap", 
    holders: 45, 
    totalVolume: "$12.4M",
    avgHolding: "$276K",
    change24h: -4.3,
    price: "$6.78",
    marketCap: "$4.1B"
  },
  { 
    symbol: "AAVE", 
    name: "Aave", 
    holders: 38, 
    totalVolume: "$9.8M",
    avgHolding: "$258K",
    change24h: 12.1,
    price: "$142.50",
    marketCap: "$2.1B"
  },
  { 
    symbol: "COMP", 
    name: "Compound", 
    holders: 32, 
    totalVolume: "$7.2M",
    avgHolding: "$225K",
    change24h: 5.6,
    price: "$89.34",
    marketCap: "$890M"
  }
];

// Mock data for top performing coins (by returns)
const topReturns = [
  { 
    symbol: "PEPE", 
    name: "Pepe", 
    returns: 3421.7, 
    holders: 23,
    totalProfit: "$8.9M",
    avgBuyPrice: "$0.00000234",
    currentPrice: "$0.00008012",
    volume24h: "$892M"
  },
  { 
    symbol: "SHIB", 
    name: "Shiba Inu", 
    returns: 2156.3, 
    holders: 45,
    totalProfit: "$15.2M",
    avgBuyPrice: "$0.00000892",
    currentPrice: "$0.00020134",
    volume24h: "$234M"
  },
  { 
    symbol: "DOGE", 
    name: "Dogecoin", 
    returns: 1892.1, 
    holders: 67,
    totalProfit: "$22.1M",
    avgBuyPrice: "$0.0234",
    currentPrice: "$0.4658",
    volume24h: "$456M"
  },
  { 
    symbol: "WIF", 
    name: "dogwifhat", 
    returns: 1234.5, 
    holders: 12,
    totalProfit: "$3.4M",
    avgBuyPrice: "$0.12",
    currentPrice: "$1.60",
    volume24h: "$89M"
  },
  { 
    symbol: "BONK", 
    name: "Bonk", 
    returns: 987.2, 
    holders: 18,
    totalProfit: "$5.1M",
    avgBuyPrice: "$0.000012",
    currentPrice: "$0.000130",
    volume24h: "$123M"
  },
  { 
    symbol: "FLOKI", 
    name: "FLOKI", 
    returns: 756.8, 
    holders: 29,
    totalProfit: "$7.8M",
    avgBuyPrice: "$0.000023",
    currentPrice: "$0.000197",
    volume24h: "$67M"
  }
];

export default function CoinsPage() {
  const handleSearch = (query: string, filters: Record<string, unknown>) => {
    console.log("AI Search on Coins:", query, filters);
    // TODO: Implement coin-specific search logic
  };

  const handleFollowUp = (query: string) => {
    console.log("Follow-up query on Coins:", query);
    handleSearch(query, {});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Top Coins Analysis
        </h1>
        <p className="text-slate-600 text-lg">
          Discover which cryptocurrencies insiders are buying and which ones are delivering exceptional returns
        </p>
      </div>

      {/* AI Search Component */}
      <AISearch onSearch={handleSearch} onFollowUp={handleFollowUp} />

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-blue-900">Tracked Coins</h3>
            <Coins className="h-5 w-5 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-900">156</div>
          <p className="text-xs text-blue-700">Across all wallets</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-green-900">Total Volume</h3>
            <DollarSign className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-900">$234.7M</div>
          <p className="text-xs text-green-700">Combined insider holdings</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-purple-900">Avg Returns</h3>
            <TrendingUp className="h-5 w-5 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-purple-900">+1,847%</div>
          <p className="text-xs text-purple-700">Weighted average</p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-orange-900">Active Holders</h3>
            <Users className="h-5 w-5 text-orange-600" />
          </div>
          <div className="text-3xl font-bold text-orange-900">489</div>
          <p className="text-xs text-orange-700">Unique insider wallets</p>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="popular" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-white border border-slate-200">
          <TabsTrigger value="popular" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-50 data-[state=active]:to-purple-50 data-[state=active]:text-blue-700">
            Most Popular Coins
          </TabsTrigger>
          <TabsTrigger value="returns" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-50 data-[state=active]:to-emerald-50 data-[state=active]:text-green-700">
            Top Performing Coins
          </TabsTrigger>
        </TabsList>

        {/* Popular Coins Tab */}
        <TabsContent value="popular">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Most Popular Coins</h2>
                  <p className="text-sm text-slate-600">Cryptocurrencies held by the most insider wallets</p>
                </div>
                <Select defaultValue="holders">
                  <SelectTrigger className="w-[160px] border-slate-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="holders">By Holders</SelectItem>
                    <SelectItem value="volume">By Volume</SelectItem>
                    <SelectItem value="avgholding">By Avg Holding</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead>Rank</TableHead>
                    <TableHead>Asset</TableHead>
                    <TableHead>Insider Holders</TableHead>
                    <TableHead>Total Volume</TableHead>
                    <TableHead>Avg Holding</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>24h Change</TableHead>
                    <TableHead>Market Cap</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {popularCoins.map((coin, index) => (
                    <TableRow key={coin.symbol} className={`hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <TableCell>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                          <span className="text-white text-sm font-bold">#{index + 1}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              {coin.symbol.slice(0, 2)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{coin.symbol}</div>
                            <div className="text-xs text-slate-500">{coin.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span className="font-medium text-slate-900">{coin.holders}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-slate-900">{coin.totalVolume}</TableCell>
                      <TableCell className="text-slate-600">{coin.avgHolding}</TableCell>
                      <TableCell className="font-mono text-slate-900">{coin.price}</TableCell>
                      <TableCell>
                        <div className={`flex items-center ${coin.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {coin.change24h >= 0 ? (
                            <TrendingUp className="mr-1 h-4 w-4" />
                          ) : (
                            <TrendingDown className="mr-1 h-4 w-4" />
                          )}
                          <span className="font-medium">{Math.abs(coin.change24h)}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-600">{coin.marketCap}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Top Returns Tab */}
        <TabsContent value="returns">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Top Performing Coins</h2>
                  <p className="text-sm text-slate-600">Highest returns from insider activity</p>
                </div>
                <Select defaultValue="returns">
                  <SelectTrigger className="w-[160px] border-slate-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="returns">By Returns</SelectItem>
                    <SelectItem value="profit">By Total Profit</SelectItem>
                    <SelectItem value="holders">By Holders</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50">
                    <TableHead>Rank</TableHead>
                    <TableHead>Asset</TableHead>
                    <TableHead>Total Returns</TableHead>
                    <TableHead>Insider Holders</TableHead>
                    <TableHead>Total Profit</TableHead>
                    <TableHead>Avg Buy Price</TableHead>
                    <TableHead>Current Price</TableHead>
                    <TableHead>24h Volume</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topReturns.map((coin, index) => (
                    <TableRow key={coin.symbol} className={`hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <TableCell>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                          <span className="text-white text-sm font-bold">#{index + 1}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              {coin.symbol.slice(0, 2)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{coin.symbol}</div>
                            <div className="text-xs text-slate-500">{coin.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 font-bold text-sm px-3 py-1">
                          +{coin.returns.toLocaleString()}%
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-slate-900">{coin.holders}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-green-600 text-lg">{coin.totalProfit}</TableCell>
                      <TableCell className="font-mono text-xs text-slate-600">{coin.avgBuyPrice}</TableCell>
                      <TableCell className="font-mono text-xs text-slate-900 font-medium">{coin.currentPrice}</TableCell>
                      <TableCell className="text-slate-600">{coin.volume24h}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Market Insights</h2>
          <p className="text-sm text-slate-600 mb-6">Key observations from insider activity</p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-slate-800">DeFi Tokens Leading</p>
                <p className="text-xs text-slate-600 mt-1">
                  UNI, AAVE, and COMP showing strong insider accumulation
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-slate-800">Meme Coin Profits</p>
                <p className="text-xs text-slate-600 mt-1">
                  PEPE and SHIB delivering exceptional returns for early adopters
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-slate-800">ETH Dominance</p>
                <p className="text-xs text-slate-600 mt-1">
                  Ethereum remains the most popular asset among tracked wallets
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Recent Activity</h2>
          <p className="text-sm text-slate-600 mb-6">Latest coin movements by insiders</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
              <div className="flex items-center space-x-3">
                <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200">ETH</Badge>
                <span className="text-sm font-medium text-slate-700">Large accumulation</span>
              </div>
              <span className="text-xs text-slate-500 bg-white/80 px-2 py-1 rounded">2h ago</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
              <div className="flex items-center space-x-3">
                <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200">LINK</Badge>
                <span className="text-sm font-medium text-slate-700">Position increase</span>
              </div>
              <span className="text-xs text-slate-500 bg-white/80 px-2 py-1 rounded">4h ago</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200">
              <div className="flex items-center space-x-3">
                <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200">PEPE</Badge>
                <span className="text-sm font-medium text-slate-700">New entry</span>
              </div>
              <span className="text-xs text-slate-500 bg-white/80 px-2 py-1 rounded">6h ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 