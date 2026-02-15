"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Event = {
  id: number;
  date: Date;
  title: string;
  description: string;
  time: string;
  type: "meeting" | "deadline" | "reminder" | "event";
};

const EVENTS: Event[] = [
  {
    id: 1,
    date: new Date(2026, 1, 15),
    title: "Team Standup",
    description: "Daily sync with the team",
    time: "10:00 AM",
    type: "meeting",
  },
  {
    id: 2,
    date: new Date(2026, 1, 18),
    title: "Project Deadline",
    description: "Dashboard v2.0 release",
    time: "5:00 PM",
    type: "deadline",
  },
  {
    id: 3,
    date: new Date(2026, 1, 20),
    title: "Client Call",
    description: "Monthly review meeting",
    time: "2:00 PM",
    type: "meeting",
  },
  {
    id: 4,
    date: new Date(2026, 1, 25),
    title: "Performance Review",
    description: "Q1 performance evaluation",
    time: "3:30 PM",
    type: "event",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "meeting":
      return "bg-blue-100 text-blue-800";
    case "deadline":
      return "bg-red-100 text-red-800";
    case "reminder":
      return "bg-yellow-100 text-yellow-800";
    case "event":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const CalenderPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date(2026, 1, 15)
  );

  const eventsForSelectedDate = EVENTS.filter(
    (event) =>
      event.date.toDateString() === selectedDate?.toDateString()
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Calendar</h1>
        <p className="text-sm text-muted-foreground">
          View and manage your events
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar value={selectedDate} onChange={setSelectedDate} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>
              {selectedDate?.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </CardTitle>
            <CardDescription>
              {eventsForSelectedDate.length} event
              {eventsForSelectedDate.length !== 1 ? "s" : ""}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {eventsForSelectedDate.length > 0 ? (
              <div className="space-y-4">
                {eventsForSelectedDate.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-4 p-3 rounded-lg border"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{event.title}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getTypeColor(
                            event.type
                          )}`}
                        >
                          {event.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">
                No events scheduled for this date
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-3 p-3 rounded-lg border"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{event.title}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(
                        event.type
                      )}`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {event.date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    at {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalenderPage;
