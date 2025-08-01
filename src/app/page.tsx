"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState<Record<string, number>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleFocus = () => {
      inputRef.current?.focus();
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  const addChip = () => {
    const keyword = input.trim();
    if (!keyword) return;

    setChips((prev) => ({
      ...prev,
      [keyword]: (prev[keyword] || 0) + 1,
    }));

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addChip();
  };

  const incrementChip = (keyword: string) => {
    setChips((prev) => ({
      ...prev,
      [keyword]: prev[keyword] + 1,
    }));
  };

  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <div className="flex gap-2">
        <Input
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter keyword..."
        />
        <Button onClick={addChip}>Submit</Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(chips).map(([keyword, count]) => (
          <Badge
            key={keyword}
            onClick={() => incrementChip(keyword)}
            className="cursor-pointer"
          >
            {keyword}: {count}
          </Badge>
        ))}
      </div>
    </main>
  );
}
