import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot } from "lucide-react";

export function ChatAvatar({ role }: { role: 'user' | 'ai' }) {
    if (role === 'user') {
        return null;
    }
    return (
        <Avatar className="h-9 w-9 shrink-0">
            <AvatarImage src="/placeholder.svg" alt="AI" className="hidden" />
            <AvatarFallback className="bg-primary/20 text-primary">
                <Bot className="h-5 w-5" />
            </AvatarFallback>
        </Avatar>
    )
}
