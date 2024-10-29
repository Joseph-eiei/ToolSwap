import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  unread: number;
  avatar: string;
  timestamp: Date;
}

interface ConversationListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
}

const ConversationList = ({ conversations, onSelectConversation }: ConversationListProps) => (
  <ScrollArea className="h-[calc(100vh-64px)]">
    {conversations.map((conversation) => (
      <div key={conversation.id}>
        <button
          className="w-full p-4 hover:bg-gray-50 transition-colors"
          onClick={() => onSelectConversation(conversation.id)}
        >
          <div className="flex items-start space-x-3">
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 text-left">
              <div className="flex justify-between items-start">
                <span className="font-semibold">{conversation.name}</span>
                <span className="text-xs text-gray-500">
                  {conversation.timestamp.toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-1">
                {conversation.lastMessage}
              </p>
            </div>
            {conversation.unread > 0 && (
              <Badge variant="default" className="bg-primary">
                {conversation.unread}
              </Badge>
            )}
          </div>
        </button>
        <Separator />
      </div>
    ))}
  </ScrollArea>
);

export default ConversationList;