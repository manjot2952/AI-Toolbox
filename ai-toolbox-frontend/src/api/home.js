// const BASE_URL = "http://localhost:8080";
// import { Clock, BarChart3, Box } from "lucide-react";

// export async function getHomeData() {
//     const stats = [
//     {
//       title: "Total Tools",
//       value: "150+",
//       subtitle: "AI tools available",
//       icon: Box
//     },
//     {
//       title: "Categories",
//       value: "12",
//       subtitle: "Different categories",
//       icon: BarChart3
//     }
//   ];

//   const tools = [
//     {
//       name: "ChatGPT",
//       category: "Writing Tools",
//       image: "/images/chatgpt.png",
//       description: "Advanced conversational assistant for writing.",
//       rating: 4.8,
//       users: "100M+ users",
//       premium: false,
//     },
//     {
//       name: "MidJourney",
//       category: "Image Generation",
//       image: "/images/midjourney.jpg",
//       description: "Create stunning AI-generated art.",
//       rating: 4.7,
//       users: "15M+ users",
//       premium: true,
//     }
//   ];
//   return { stats, tools };

  // try {
  //   const response = await fetch(`${BASE_URL}/api/home`);
  //   return await response.json();
  // } catch (error) {
  //   console.error("Error fetching home data:", error);
  //   return { stats: [], tools: [] };
  // }
// }

// const BASE_URL = "http://localhost:8080";

// export async function getHomeData(page = 0, size = 10) {
//   const response = await fetch(
//     `${BASE_URL}/api/tools?page=${page}&size=${size}`
//   );
//   return await response.json();
// }

import { Box, BarChart3, Clock } from "lucide-react";

const BASE_URL = "http://localhost:8081";

// Convert backend icons → lucide icons
const iconMap = {
  "box": Box,
  "barchart": BarChart3,
  "clock": Clock,
};

export async function getHomeData(page = 0, size = 6) {
      const stats = [
    {
      title: "Total Tools",
      value: "150+",
      subtitle: "AI tools available",
      icon: Box
    },
    {
      title: "Categories",
      value: "12",
      subtitle: "Different categories",
      icon: BarChart3
    }
  ];

  const tools = [
    {
      name: "ChatGPT",
      category: "Writing Tools",
      image: "/images/chatgpt.png",
      description: "Advanced conversational assistant for writing.",
      rating: 4.8,
      users: "100M+ users",
      premium: false,
    },
    {
      name: "MidJourney",
      category: "Image Generation",
      image: "/images/midjourney.jpg",
      description: "Create stunning AI-generated art.",
      rating: 4.7,
      users: "15M+ users",
      premium: true,
    }
  ];
  try {
    const res = await fetch(`${BASE_URL}/api/home?page=${page}&size=${size}`);
    const data = await res.json();

    // Attach actual icon components to stats
    const statsWithIcons = data.stats.map((s) => ({
      ...s,
      icon: iconMap[s.icon?.toLowerCase()] || Box,
    }));

    return {
      stats: statsWithIcons,
      tools: data.tools,
      lastPage: data.lastPage,
    };
  } catch (error) {
    console.error("Home fetch failed:", error);
    return { stats: stats, tools: tools, lastPage: true };
  }
}
