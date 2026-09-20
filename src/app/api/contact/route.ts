import { NextResponse } from 'next/server';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Format the message for Slack
    const slackMessage = {
      text: `🚀 *New Project Inquiry from ExplodeLabs!*`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🚀 New Project Inquiry",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${data.name}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${data.email}`
            },
            {
              type: "mrkdwn",
              text: `*Company:*\n${data.company || "N/A"}`
            },
            {
              type: "mrkdwn",
              text: `*Service:*\n${data.service}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Project Details:*\n> ${data.message.split('\\n').join('\\n> ')}`
          }
        }
      ]
    };

    // Send the POST request to Slack
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      throw new Error(`Slack responded with ${response.status}: ${response.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending to Slack:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message to Slack" },
      { status: 500 }
    );
  }
}
