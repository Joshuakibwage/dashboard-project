import React from "react";

type Message = {
  id: number;
  sender: string;
  subject: string;
  snippet: string;
  time: string;
};

const MESSAGES: Message[] = [
  {
    id: 1,
    sender: "Alice Johnson",
    subject: "Welcome to the dashboard",
    snippet: "Thanks for joining — here are a few tips to get started...",
    time: "2h",
  },
  {
    id: 2,
    sender: "Billing",
    subject: "Invoice #12345",
    snippet: "Your invoice is available. View and pay by the due date...",
    time: "1d",
  },
  {
    id: 3,
    sender: "Product Team",
    subject: "New feature rollout",
    snippet: "We're excited to ship the new analytics page next week...",
    time: "3d",
  },
  {
    id: 4,
    sender: "Support",
    subject: "Ticket update",
    snippet: "We've applied a fix to your reported issue. Please verify...",
    time: "Apr 1",
  },
];

const InboxPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Inbox</h1>
        <p className="text-sm text-muted-foreground">Messages and notifications</p>
      </div>

      <div className="space-y-2">
        {MESSAGES.map((m) => (
          <div
            key={m.id}
            className="flex items-start gap-4 p-4 rounded-lg border bg-card"
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              {m.sender.split(" ").map((s) => s[0]).slice(0, 2).join("")}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{m.subject}</div>
                  <div className="text-sm text-muted-foreground">{m.sender}</div>
                </div>
                <div className="text-xs text-muted-foreground">{m.time}</div>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{m.snippet}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxPage;
