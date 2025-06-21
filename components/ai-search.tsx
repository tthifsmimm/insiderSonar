import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Sparkles, Filter, X, ArrowRight } from "lucide-react";

interface AISearchProps {
  onSearch: (query: string, filters: Record<string, unknown>) => void;
  onFollowUp: (query: string) => void;
}

export function AISearch({ onSearch, onFollowUp }: AISearchProps) {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    section: "all",
    timeframe: "24h",
    minReturn: "",
    minValue: ""
  });

  // Mock AI-generated follow-up suggestions based on query
  const getFollowUpSuggestions = (searchQuery: string) => {
    const suggestions = [
      "Show me wallets with similar patterns",
      "What coins do these wallets typically hold?",
      "Find recent activity from these addresses",
      "Compare performance over different timeframes",
      "Show me when these wallets last made moves"
    ];
    
    if (searchQuery.toLowerCase().includes("whale")) {
      return [
        "Show me largest whale transactions today",
        "Which coins do whales prefer?",
        "Find whale accumulation patterns"
      ];
    }
    
    if (searchQuery.toLowerCase().includes("return")) {
      return [
        "Show me consistent high performers",
        "Find wallets with similar return patterns",
        "What strategies do top performers use?"
      ];
    }
    
    return suggestions.slice(0, 3);
  };

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const handleFollowUpClick = (suggestion: string) => {
    setQuery(suggestion);
    onFollowUp(suggestion);
  };

  const clearFilters = () => {
    setFilters({
      section: "all",
      timeframe: "24h", 
      minReturn: "",
      minValue: ""
    });
    setQuery("");
  };

  const followUpSuggestions = query ? getFollowUpSuggestions(query) : [];

  return (
    <Card className="mb-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border-2 border-blue-200">
      <div className="space-y-4">
        {/* AI Search Input */}
        <div className="relative">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            <h3 className="font-semibold text-slate-900">AI-Powered Search</h3>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            <Input
              placeholder="Ask anything... e.g. &lsquo;Show me whales who bought ETH in the last 24 hours&rsquo; or &lsquo;Find wallets with returns over 1000%&rsquo;"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-base border-2 border-blue-200 focus:border-purple-400 bg-white"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button onClick={handleSearch} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Sparkles className="mr-2 h-4 w-4" />
              Search with AI
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="border-slate-300"
            >
              <Filter className="mr-2 h-4 w-4" />
              Manual Filters
            </Button>
            {(query || Object.values(filters).some(v => v && v !== "all" && v !== "24h")) && (
              <Button variant="ghost" onClick={clearFilters} size="sm">
                <X className="mr-1 h-3 w-3" />
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Manual Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-white rounded-lg border border-slate-200">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Section</label>
              <Select value={filters.section} onValueChange={(value) => setFilters({...filters, section: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sections</SelectItem>
                  <SelectItem value="wallets">Wallets</SelectItem>
                  <SelectItem value="coins">Coins</SelectItem>
                  <SelectItem value="leaks">Leaks</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Timeframe</label>
              <Select value={filters.timeframe} onValueChange={(value) => setFilters({...filters, timeframe: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1h">Last Hour</SelectItem>
                  <SelectItem value="24h">Last 24 Hours</SelectItem>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Min Return %</label>
              <Input 
                placeholder="e.g. 100"
                value={filters.minReturn}
                onChange={(e) => setFilters({...filters, minReturn: e.target.value})}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Min Value</label>
              <Input 
                placeholder="e.g. 1M"
                value={filters.minValue}
                onChange={(e) => setFilters({...filters, minValue: e.target.value})}
              />
            </div>
          </div>
        )}

        {/* AI Follow-up Suggestions */}
        {followUpSuggestions.length > 0 && (
          <div className="space-y-2">
            <Separator />
            <div className="flex items-center space-x-2">
              <ArrowRight className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">AI Suggestions:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {followUpSuggestions.map((suggestion, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="cursor-pointer hover:bg-purple-100 border-purple-200 text-purple-700 px-3 py-1"
                  onClick={() => handleFollowUpClick(suggestion)}
                >
                  {suggestion}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Current Search Status */}
        {query && (
          <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">
                AI is analyzing: &ldquo;{query}&rdquo;
              </span>
            </div>
            <p className="text-xs text-blue-700 mt-1">
              Finding relevant wallets, coins, and insider activity...
            </p>
          </div>
        )}
      </div>
    </Card>
  );
} 