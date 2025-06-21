"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ExternalLink, Copy, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { AISearch } from "@/components/ai-search";

// Mock wallet data
const walletData = {
  id: "1",
  address: "0x742d35Cc6C6C432C4E8C2B4F4a8B7A7F4C2D1E1C",
  totalValue: "$12.4M",
  returns: 2847.5,
  winRate: 94.2,
  totalTrades: 156,
  lastActive: "2 hours ago",
  risk: "Low"
};

// Mock holdings data
const holdings = [
  { 
    coin: "ETH", 
    name: "Ethereum", 
    quantity: "2,847.5", 
    value: "$7,234,567", 
    percentage: 58.3, 
    change24h: 3.4,
    avgBuyPrice: "$2,145"
  },
  { 
    coin: "BTC", 
    name: "Bitcoin", 
    quantity: "89.23", 
    value: "$3,847,291", 
    percentage: 31.0, 
    change24h: -1.2,
    avgBuyPrice: "$41,234"
  },
  { 
    coin: "LINK", 
    name: "Chainlink", 
    quantity: "45,672", 
    value: "$892,156", 
    percentage: 7.2, 
    change24h: 8.7,
    avgBuyPrice: "$16.45"
  },
  { 
    coin: "UNI", 
    name: "Uniswap", 
    quantity: "12,456", 
    value: "$234,789", 
    percentage: 1.9, 
    change24h: -4.3,
    avgBuyPrice: "$18.23"
  },
  { 
    coin: "AAVE", 
    name: "Aave", 
    quantity: "1,234", 
    value: "$198,456", 
    percentage: 1.6, 
    change24h: 12.1,
    avgBuyPrice: "$145.67"
  }
];

// Mock transaction history
const transactions = [
  {
    id: "1",
    date: "2024-01-15",
    time: "14:32:18",
    coin: "ETH",
    type: "BUY",
    amount: "150.5",
    price: "$2,234.56",
    value: "$336,422",
    hash: "0xabc123...def456"
  },
  {
    id: "2",
    date: "2024-01-15",
    time: "09:15:42",
    coin: "LINK",
    type: "SELL",
    amount: "5,000",
    price: "$18.45",
    value: "$92,250",
    hash: "0x789xyz...123abc"
  },
  {
    id: "3",
    date: "2024-01-14",
    time: "16:20:33",
    coin: "BTC",
    type: "BUY",
    amount: "2.5",
    price: "$43,210.00",
    value: "$108,025",
    hash: "0xdef789...456ghi"
  },
  {
    id: "4",
    date: "2024-01-14",
    time: "11:45:17",
    coin: "UNI",
    type: "BUY",
    amount: "2,500",
    price: "$6.78",
    value: "$16,950",
    hash: "0x123def...789abc"
  },
  {
    id: "5",
    date: "2024-01-13",
    time: "13:58:26",
    coin: "AAVE",
    type: "SELL",
    amount: "100",
    price: "$142.50",
    value: "$14,250",
    hash: "0x456abc...def123"
  }
];

export default function WalletDetailPage() {
  const handleSearch = (query: string, filters: Record<string, unknown>) => {
    console.log("AI Search on Wallet Detail:", query, filters);
    // TODO: Implement wallet detail-specific search logic
  };

  const handleFollowUp = (query: string) => {
    console.log("Follow-up query on Wallet Detail:", query);
    handleSearch(query, {});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/wallets">
          <Button variant="outline" size="sm" className="border-blue-200 text-blue-700 hover:bg-blue-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Wallets
          </Button>
        </Link>
      </div>

      {/* AI Search Component */}
      <AISearch onSearch={handleSearch} onFollowUp={handleFollowUp} />

      {/* Wallet Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Wallet Details
            </h1>
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-mono text-lg">{walletData.address}</span>
              <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-blue-50">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground">Last active: {walletData.lastActive}</p>
          </div>
          <Badge variant="secondary" className="text-sm bg-green-100 text-green-700 border-green-200">
            {walletData.risk} Risk
          </Badge>
        </div>

        {/* Wallet Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-blue-700">Portfolio Value</h3>
              <Wallet className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-900">{walletData.totalValue}</div>
            <p className="text-xs text-blue-600">Current holdings</p>
          </div>
          
          <div className="p-6 rounded-lg border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-green-700">Total Returns</h3>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-900">+{walletData.returns.toLocaleString()}%</div>
            <p className="text-xs text-green-600">All-time performance</p>
          </div>
          
          <div className="p-6 rounded-lg border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-purple-700">Win Rate</h3>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-900">{walletData.winRate}%</div>
            <p className="text-xs text-purple-600">Successful trades</p>
          </div>
          
          <div className="p-6 rounded-lg border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-orange-700">Total Trades</h3>
              <ExternalLink className="h-4 w-4 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-orange-900">{walletData.totalTrades}</div>
            <p className="text-xs text-orange-600">Since tracking started</p>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="holdings" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200">
          <TabsTrigger value="holdings" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Current Holdings
          </TabsTrigger>
          <TabsTrigger value="transactions" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Transaction History
          </TabsTrigger>
        </TabsList>

        {/* Holdings Tab */}
        <TabsContent value="holdings">
          <div className="border border-blue-200 rounded-lg">
            <div className="p-6 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Current Holdings
                  </h2>
                  <p className="text-blue-600 mt-1">Real-time portfolio breakdown</p>
                </div>
                <Select defaultValue="value">
                  <SelectTrigger className="w-[140px] border-blue-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="value">By Value</SelectItem>
                    <SelectItem value="quantity">By Quantity</SelectItem>
                    <SelectItem value="change">By Change</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow className="border-blue-100">
                    <TableHead className="text-blue-700 font-semibold">Asset</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Quantity</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Current Value</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Portfolio %</TableHead>
                    <TableHead className="text-blue-700 font-semibold">24h Change</TableHead>
                    <TableHead className="text-blue-700 font-semibold">Avg Buy Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {holdings.map((holding, index) => (
                    <TableRow key={holding.coin} className={index % 2 === 0 ? "bg-blue-50/30" : "bg-white"}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{holding.coin.slice(0, 2)}</span>
                          </div>
                          <div>
                            <div className="font-medium">{holding.coin}</div>
                            <div className="text-xs text-muted-foreground">{holding.name}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono">{holding.quantity}</TableCell>
                      <TableCell className="font-medium">{holding.value}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span>{holding.percentage}%</span>
                          <div className="w-12 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" 
                              style={{ width: `${Math.min(holding.percentage, 100)}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={`flex items-center ${holding.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {holding.change24h >= 0 ? (
                            <TrendingUp className="mr-1 h-4 w-4" />
                          ) : (
                            <TrendingDown className="mr-1 h-4 w-4" />
                          )}
                          {Math.abs(holding.change24h)}%
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{holding.avgBuyPrice}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Transactions Tab */}
        <TabsContent value="transactions">
          <div className="border border-purple-200 rounded-lg">
            <div className="p-6 border-b border-purple-100 bg-gradient-to-r from-purple-50 to-violet-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                    Transaction History
                  </h2>
                  <p className="text-purple-600 mt-1">Complete trading activity</p>
                </div>
                <div className="flex space-x-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[120px] border-purple-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="buy">Buy Orders</SelectItem>
                      <SelectItem value="sell">Sell Orders</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="date">
                    <SelectTrigger className="w-[120px] border-purple-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">By Date</SelectItem>
                      <SelectItem value="value">By Value</SelectItem>
                      <SelectItem value="coin">By Coin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow className="border-purple-100">
                    <TableHead className="text-purple-700 font-semibold">Date & Time</TableHead>
                    <TableHead className="text-purple-700 font-semibold">Asset</TableHead>
                    <TableHead className="text-purple-700 font-semibold">Type</TableHead>
                    <TableHead className="text-purple-700 font-semibold">Amount</TableHead>
                    <TableHead className="text-purple-700 font-semibold">Price</TableHead>
                    <TableHead className="text-purple-700 font-semibold">Total Value</TableHead>
                    <TableHead className="text-purple-700 font-semibold">Tx Hash</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx, index) => (
                    <TableRow key={tx.id} className={index % 2 === 0 ? "bg-purple-50/30" : "bg-white"}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{tx.date}</div>
                          <div className="text-xs text-muted-foreground">{tx.time}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-blue-200 text-blue-700">{tx.coin}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={tx.type === "BUY" ? "default" : "secondary"}
                          className={tx.type === "BUY" ? 
                            "bg-green-100 text-green-800 border-green-200 hover:bg-green-200" : 
                            "bg-red-100 text-red-800 border-red-200 hover:bg-red-200"
                          }
                        >
                          {tx.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono">{tx.amount}</TableCell>
                      <TableCell>{tx.price}</TableCell>
                      <TableCell className="font-medium">{tx.value}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs">{tx.hash}</span>
                          <Button variant="ghost" size="sm" className="hover:bg-purple-50">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 