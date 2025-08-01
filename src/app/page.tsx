"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState<Record<string, number>>({});

  const addChip = () => {
    const name = input.trim();
    if (!name) return;

    setChips((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + 1,
    }));

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addChip();
  };

  const incrementChip = (name: string) => {
    setChips((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter text..."
        />
        <Button onClick={addChip}>Submit</Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(chips).map(([name, count]) => (
          <Badge
            key={name}
            onClick={() => incrementChip(name)}
            className="cursor-pointer"
          >
            {name}: {count}
          </Badge>
        ))}
      </div>
    </main>
  );
}
