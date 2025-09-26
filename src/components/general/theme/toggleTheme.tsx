"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button size="icon" variant="ghost" onClick={handleToggle}>
      {theme === "dark" ? (
        <Sun key="sun" className="w-7 h-7" />
      ) : (
        <Moon key="moon" className="w-7 h-7" />
      )}
    </Button>
  );
}
