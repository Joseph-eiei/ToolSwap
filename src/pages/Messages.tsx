import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ListFilter } from "lucide-react";
import ConversationList from "@/components/messages/ConversationList";
import ChatView from "@/components/messages/ChatView";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "other";
  timestamp: Date;
}

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  unread: number;
  avatar: string;
  timestamp: Date;
}

const Messages = () => {
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messageText, setMessageText] = useState("");

  // Mock data
  const conversations: Conversation[] = [
    {
      id: "1",
      name: "John D.",
      lastMessage: "The power drill is in great condition...",
      unread: 2,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      timestamp: new Date(),
    },
    {
      id: "2",
      name: "Sarah M.",
      lastMessage: "Yes, the lawn mower is still available",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      timestamp: new Date(Date.now() - 86400000),
    },
  ];

  const messages: Message[] = [
    {
      id: "1",
      text: "Hi, I'm interested in renting your power drill",
      sender: "user",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      text: "Sure! The power drill is in great condition and comes with all attachments",
      sender: "other",
      timestamp: new Date(Date.now() - 3500000),
    },
  ];

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    setMessageText("");
  };

  const selectedUser = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {!selectedConversation ? (
          <>
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => navigate("/")}
                    className="mr-3 hover:text-gray-600"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h1 className="text-xl font-semibold">Messages</h1>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/rentals")}
                  className="flex items-center gap-2"
                >
                  <ListFilter className="h-4 w-4" />
                  My Rentals
                </Button>
              </div>
            </div>
            <ConversationList
              conversations={conversations}
              onSelectConversation={setSelectedConversation}
            />
          </>
        ) : selectedUser ? (
          <ChatView
            messages={messages}
            messageText={messageText}
            onMessageChange={setMessageText}
            onSendMessage={handleSendMessage}
            onBack={() => setSelectedConversation(null)}
            selectedUser={selectedUser}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Messages;