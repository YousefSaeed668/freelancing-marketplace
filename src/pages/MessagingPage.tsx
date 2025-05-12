import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Search, Paperclip, Send, MoreVertical, ExternalLink,
  Image as ImageIcon, FileText, Download
} from 'lucide-react';

interface Message {
  id: number;
  sender: 'me' | 'other';
  content: string;
  timestamp: string;
  attachment?: {
    type: 'image' | 'document';
    name: string;
    size: string;
  };
}

interface Conversation {
  id: number;
  user: {
    name: string;
    image: string;
    status: 'online' | 'offline';
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
  project?: string;
}

const sampleConversations: Conversation[] = [
  {
    id: 1,
    user: {
      name: 'أحمد محمد',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      status: 'online'
    },
    lastMessage: 'شكراً لك على العرض المقدم. هل يمكننا مناقشة التفاصيل؟',
    timestamp: '12:30',
    unread: 2,
    project: 'تصميم موقع إلكتروني'
  },
  {
    id: 2,
    user: {
      name: 'سارة أحمد',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      status: 'offline'
    },
    lastMessage: 'تم استلام التصميم، شكراً جزيلاً',
    timestamp: '09:45',
    unread: 0
  },
  {
    id: 3,
    user: {
      name: 'محمد علي',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      status: 'online'
    },
    lastMessage: 'هل يمكنك إرسال نموذج من أعمالك السابقة؟',
    timestamp: 'أمس',
    unread: 1,
    project: 'ترجمة محتوى موقع'
  }
];

const sampleMessages: Message[] = [
  {
    id: 1,
    sender: 'other',
    content: 'مرحباً، شكراً لك على العرض المقدم للمشروع',
    timestamp: '12:30'
  },
  {
    id: 2,
    sender: 'me',
    content: 'شكراً لك على الرد. سعيد بالتواصل معك',
    timestamp: '12:31'
  },
  {
    id: 3,
    sender: 'other',
    content: 'هل يمكنك إخباري المزيد عن خبرتك في مشاريع مماثلة؟',
    timestamp: '12:32'
  },
  {
    id: 4,
    sender: 'me',
    content: 'بالتأكيد! لدي خبرة 5 سنوات في تصميم المواقع الإلكترونية، وقد عملت على العديد من المشاريع المشابهة. يمكنني إرسال بعض النماذج من أعمالي السابقة.',
    timestamp: '12:34'
  },
  {
    id: 5,
    sender: 'me',
    content: 'هذا نموذج من آخر مشروع أكملته الشهر الماضي',
    timestamp: '12:35',
    attachment: {
      type: 'image',
      name: 'project-preview.jpg',
      size: '2.4 MB'
    }
  }
];

const MessagingPage: React.FC = () => {
  const { theme } = useTheme();
  const [activeConversation, setActiveConversation] = useState(sampleConversations[0]);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-[calc(100vh-64px)] py-8">
      <div className="container mx-auto">
        <div className="flex h-[calc(100vh-160px)]">
          {/* Conversations List */}
          <div className={`
            w-1/3 border-l overflow-hidden flex flex-col
            ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}
          `}>
            {/* Search Bar */}
            <div className={`
              p-4
              ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}
            `}>
              <div className={`
                flex items-center rounded-md
                ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}
              `}>
                <Search className="mr-2 ml-3" size={20} />
                <input
                  type="text"
                  placeholder="بحث في المحادثات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`
                    w-full py-2 px-2 rounded-md
                    ${theme === 'light' 
                      ? 'bg-gray-100 text-deep-charcoal' 
                      : 'bg-gray-700 text-soft-ivory'}
                  `}
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {sampleConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setActiveConversation(conversation)}
                  className={`
                    w-full p-4 flex items-start gap-3 border-b transition-colors
                    ${theme === 'light' 
                      ? 'border-gray-200 hover:bg-gray-50' 
                      : 'border-gray-700 hover:bg-gray-750'}
                    ${activeConversation.id === conversation.id
                      ? theme === 'light'
                        ? 'bg-gray-100'
                        : 'bg-gray-700'
                      : ''}
                  `}
                >
                  <div className="relative">
                    <img
                      src={conversation.user.image}
                      alt={conversation.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className={`
                      absolute bottom-0 left-0 w-3 h-3 rounded-full border-2
                      ${theme === 'light' ? 'border-white' : 'border-gray-800'}
                      ${conversation.user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}
                    `} />
                  </div>

                  <div className="flex-1 text-right">
                    <h3 className="font-bold">{conversation.user.name}</h3>
                    {conversation.project && (
                      <p className={`
                        text-sm mb-1
                        ${theme === 'light' 
                          ? 'text-professional-blue' 
                          : 'text-muted-gold'}
                      `}>
                        {conversation.project}
                      </p>
                    )}
                    <p className="text-sm text-medium-grey dark:text-cool-grey line-clamp-1">
                      {conversation.lastMessage}
                    </p>
                  </div>

                  <div className="text-xs">
                    <p className="text-medium-grey dark:text-cool-grey">
                      {conversation.timestamp}
                    </p>
                    {conversation.unread > 0 && (
                      <span className={`
                        inline-block px-2 py-1 rounded-full mt-1 text-white text-center
                        ${theme === 'light' 
                          ? 'bg-professional-blue' 
                          : 'bg-deep-ocean-blue'}
                      `}>
                        {conversation.unread}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="w-2/3 flex flex-col">
            {/* Chat Header */}
            <div className={`
              p-4 flex items-center justify-between border-b
              ${theme === 'light' 
                ? 'bg-white border-gray-200' 
                : 'bg-gray-800 border-gray-700'}
            `}>
              <div className="flex items-center gap-3">
                <img
                  src={activeConversation.user.image}
                  alt={activeConversation.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold">{activeConversation.user.name}</h2>
                    <a 
                      href="#" 
                      className={`
                        p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
                      `}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  {activeConversation.project && (
                    <p className={`
                      text-sm
                      ${theme === 'light' 
                        ? 'text-professional-blue' 
                        : 'text-muted-gold'}
                    `}>
                      {activeConversation.project}
                    </p>
                  )}
                </div>
              </div>

              <button className={`
                p-2 rounded-full
                ${theme === 'light' 
                  ? 'hover:bg-gray-100' 
                  : 'hover:bg-gray-700'}
              `}>
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {sampleMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'me' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`
                    max-w-[70%] space-y-1
                  `}>
                    <div className={`
                      p-3 rounded-lg
                      ${message.sender === 'me'
                        ? theme === 'light'
                          ? 'bg-professional-blue text-white'
                          : 'bg-deep-ocean-blue text-white'
                        : theme === 'light'
                          ? 'bg-gray-100'
                          : 'bg-gray-700'
                      }
                    `}>
                      <p>{message.content}</p>
                      {message.attachment && (
                        <div className={`
                          mt-2 p-3 rounded-md flex items-center gap-3
                          ${message.sender === 'me'
                            ? 'bg-blue-600'
                            : theme === 'light'
                              ? 'bg-white'
                              : 'bg-gray-600'
                          }
                        `}>
                          {message.attachment.type === 'image' ? (
                            <ImageIcon size={24} />
                          ) : (
                            <FileText size={24} />
                          )}
                          <div className="flex-1">
                            <p className="font-medium">{message.attachment.name}</p>
                            <p className="text-sm opacity-80">{message.attachment.size}</p>
                          </div>
                          <button className="p-2 rounded-full hover:bg-black/10">
                            <Download size={20} />
                          </button>
                        </div>
                      )}
                    </div>
                    <p className={`
                      text-xs text-right
                      ${theme === 'light' 
                        ? 'text-medium-grey' 
                        : 'text-cool-grey'}
                    `}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className={`
              p-4 border-t
              ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}
            `}>
              <div className="flex gap-2">
                <button className={`
                  p-2 rounded-full
                  ${theme === 'light' 
                    ? 'hover:bg-gray-100' 
                    : 'hover:bg-gray-700'}
                `}>
                  <Paperclip size={20} />
                </button>
                
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className={`
                    flex-1 py-2 px-4 rounded-full
                    ${theme === 'light' 
                      ? 'bg-gray-100 text-deep-charcoal' 
                      : 'bg-gray-700 text-soft-ivory'}
                  `}
                />
                
                <button className={`
                  p-2 rounded-full
                  ${messageInput.trim()
                    ? theme === 'light'
                      ? 'bg-professional-blue text-white'
                      : 'bg-deep-ocean-blue text-white'
                    : theme === 'light'
                      ? 'text-medium-grey'
                      : 'text-cool-grey'
                  }
                `}>
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingPage;