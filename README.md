# Modern Dashboard Project

A comprehensive and responsive dashboard application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project features a modern UI using **Shadcn UI** components, interactive charts, and a robust layout system with dark mode support.

## 🚀 Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Fonts:** [Geist](https://vercel.com/font) (Geist Sans & Geist Mono)
-   **Charts:** Custom chart components (Area, Bar, Pie, Line)

## ✨ Features

### 📊 Dashboard Overview
-   **Visual Analytics:** Integrated Area, Bar, and Pie charts for high-level data visualization.
-   **Activity Feeds:** "Latest Transactions" and "Popular Content" widgets to track recent activity.
-   **Productivity:** Built-in Todo List widget for task management.
-   **Responsive Grid:** A dynamic grid layout that adapts to different screen sizes (Mobile, Tablet, Desktop).

### 👤 User Management
-   **Dynamic Profile Pages:** Detailed views for individual users (`/users/[username]`).
-   **Badge System:** Interactive hover cards for user badges (Verified, Admin, Awarded, Popular).
-   **Profile Stats:** Visual progress bars for profile completion and detailed user metadata.
-   **Edit Functionality:** Slide-out Sheet component for editing user details without leaving the page.
-   **Activity Tracking:** Dedicated line charts for visualizing specific user activity over time.

### 🎨 UI & UX
-   **Theming:** Seamless Dark/Light mode toggling via `next-themes`.
-   **Navigation:** Collapsible Sidebar, top Navbar, and automatic Breadcrumbs for easy traversal.
-   **Modern Components:** Utilizes polished components like Avatars, Badges, and Hover Cards.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:

-   Node.js (v18 or later)
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Joshuakibwage/dashboard-project.git
    cd dashboard-project
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  Open http://localhost:3000 with your browser to see the result.

## 📂 Project Structure

```text
dashboard-project/
├── app/                   # Next.js App Router directory
│   ├── layout.tsx         # Root layout with Sidebar, Navbar, and ThemeProvider
│   ├── page.tsx           # Dashboard homepage with widgets and charts
│   └── users/             # User related routes
│       └── [username]/    # Dynamic user profile page
├── components/            # Reusable React components
│   ├── ui/                # Shadcn UI primitive components (Button, Sheet, etc.)
│   ├── providers/         # Context providers (ThemeProvider)
│   ├── AppSidebar.tsx     # Main sidebar navigation
│   ├── Navbar.tsx         # Top navigation bar
│   ├── CardList.tsx       # Reusable list widget
│   ├── TodoList.tsx       # Todo widget
│   └── ...                # Chart components (AppAreaChart, etc.)
├── public/                # Static assets
└── ...
```

## 📄 License

This project is licensed under the MIT License.