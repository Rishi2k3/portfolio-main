import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Try to fetch from the original API
    const response = await fetch('https://leetcode-stats-api.herokuapp.com/rishi2k3');

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    return NextResponse.json({ error: 'Failed to fetch LeetCode data' }, { status: 500 });
  }
} 