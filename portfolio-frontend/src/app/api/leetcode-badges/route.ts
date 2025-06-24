import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Try to fetch from the original API
    const response = await fetch('https://alfa-leetcode-api.onrender.com/rishi2k3/Badges', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Portfolio-Bot/1.0)',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching LeetCode badges:', error);
    
    // Return fallback data if API fails
    const fallbackData = {
      badges: [
        {
          id: "4519258",
          displayName: "100 Days Badge 2024",
          icon: "https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png",
          creationDate: "2024-07-26"
        },
        {
          id: "3964197",
          displayName: "50 Days Badge 2024",
          icon: "https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png",
          creationDate: "2024-05-23"
        },
        {
          id: "4029373",
          displayName: "May LeetCoding Challenge",
          icon: "https://leetcode.com/static/images/badges/dcc-2024-5.png",
          creationDate: "2024-06-01"
        }
      ],
      badgesCount: 3,
      upcomingBadges: [],
      activeBadge: null
    };
    
    return NextResponse.json(fallbackData);
  }
} 