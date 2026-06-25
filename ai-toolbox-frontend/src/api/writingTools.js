 const BASE_URL = "http://localhost:8081";

export async function getWritingToolData() {
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
  return { stats: [], tools: [] };

  // try {
  //   const response = await fetch(`${BASE_URL}/api/home`);
  //   return await response.json();
  // } catch (error) {
  //   console.error("Error fetching home data:", error);
  //   return { stats: [], tools: [] };
  // }
}
