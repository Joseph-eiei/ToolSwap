import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Image, ChevronLeft } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: Date;
}

interface ChatViewProps {
  messages: Message[];
  messageText: string;
  onMessageChange: (text: string) => void;
  onSendMessage: () => void;
  onBack: () => void;
  selectedUser: { name: string; avatar: string };
}

const quickReplies = [
  "What's the tool's condition?",
  "Is it still available?",
  "Can you deliver?",
  "When can I pick it up?",
];

const ChatView = ({
  messages,
  messageText,
  onMessageChange,
  onSendMessage,
  onBack,
  selectedUser,
}: ChatViewProps) => (
  <>
    <div className="flex items-center p-4 border-b">
      <button onClick={onBack} className="mr-3 hover:text-gray-600">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <img
        src={selectedUser.avatar}
        alt={selectedUser.name}
        className="w-8 h-8 rounded-full object-cover mr-3"
      />
      <span className="font-semibold">{selectedUser.name}</span>
    </div>

    <ScrollArea className="h-[calc(100vh-180px)] p-4">
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === "user"
                  ? "bg-primary text-white"
                  : "bg-gray-100"
              }`}
            >
              <p>{message.text}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500 mb-2">Quick Replies:</p>
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              onClick={() => onMessageChange(reply)}
              className="text-sm bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>
    </ScrollArea>

    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
      <div className="max-w-md mx-auto flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="shrink-0"
          onClick={() => {
            // Handle image upload
          }}
        >
          <Image className="h-5 w-5" />
        </Button>
        <Input
          value={messageText}
          onChange={(e) => onMessageChange(e.target.value)}
          placeholder="Type a message..."
          className="flex-1"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSendMessage();
            }
          }}
        />
        <Button
          className="shrink-0"
          onClick={onSendMessage}
          disabled={!messageText.trim()}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  </>
);

export default ChatView;