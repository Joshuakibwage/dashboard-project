export type User = {
  id: number;
  username: string;
  email: string;
  phone: string;
  location: string;
  name: string;
  role: "Admin" | "User" | "Manager";
  joinDate: string;
  profileCompletion: number;
  avatar: string;
  bio: string;
  badges: ("verified" | "admin" | "awarded" | "popular")[];
};

export const USERS: User[] = [
  {
    id: 1,
    username: "john-doe",
    name: "John Doe",
    email: "john@example.com",
    phone: "+254 234 5678",
    location: "Nairobi, KE",
    role: "Admin",
    joinDate: "2025.01.01",
    profileCompletion: 66,
    avatar: "/Logo.svg",
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptas distinctio ab ipsa commodi fugiat labore quos veritatis cum corrupti sed repudiandae ipsum, harum recusandae ratione ipsam in, quis quia.",
    badges: ["verified", "admin"],
  },
  {
    id: 2,
    username: "jane-smith",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+254 456 7890",
    location: "Nairobi, KE",
    role: "Manager",
    joinDate: "2025.02.15",
    profileCompletion: 85,
    avatar: "https://github.com/shadcn.png",
    bio: "Passionate about building great products and leading teams to success.",
    badges: ["verified", "awarded"],
  },
  {
    id: 3,
    username: "alex-johnson",
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+254 789 0123",
    location: "Mombasa, KE",
    role: "User",
    joinDate: "2025.03.10",
    profileCompletion: 45,
    avatar: "https://github.com/shadcn.png",
    bio: "Exploring new technologies and contributing to open source.",
    badges: ["verified", "popular"],
  },
  {
    id: 4,
    username: "sarah-williams",
    name: "Sarah Williams",
    email: "sarah@example.com",
    phone: "+254 012 3456",
    location: "Kisumu, KE",
    role: "User",
    joinDate: "2025.01.20",
    profileCompletion: 72,
    avatar: "https://github.com/shadcn.png",
    bio: "Full-stack developer with a passion for clean code.",
    badges: ["verified", "awarded", "popular"],
  },
  {
    id: 5,
    username: "michael-brown",
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "+254 345 6789",
    location: "Nairobi, KE",
    role: "Manager",
    joinDate: "2024.12.05",
    profileCompletion: 90,
    avatar: "https://github.com/shadcn.png",
    bio: "Product Manager with 10+ years of experience in tech.",
    badges: ["admin"],
  },
];

export const getUserByUsername = (username: string): User | undefined => {
  return USERS.find((user) => user.username === username);
};

export const getAllUsernames = (): string[] => {
  return USERS.map((user) => user.username);
};
