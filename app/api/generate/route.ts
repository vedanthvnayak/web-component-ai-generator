import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { component, standards, prompt } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that generates React component code based on user input.",
        },
        {
          role: "user",
          content: `

            Generate a React functional component that is ${component}:

-The response should only contain code that is ready to be rendered directly in a React app.
-Use React hooks (like useState, useEffect) where necessary and ensure the component is functional.
-Use Tailwind CSS for styling.
-The component should be responsive and adapt well to various screen sizes.
-Export a single component, either named Component or a unique name as specified.
-Return only the JSX and the component code itself—no boilerplate, comments, or explanations.
-The code must be valid, self-contained, and ready to render immediately.
-Follow these standards: ${standards}.
-Additional requirements: ${prompt}.
-Make the UI responsive, and if no color scheme is mentioned, default to a dark theme vith black text and border.
-Include dummy data if needed for the component to render correctly.
-The component should be fully responsive for both mobile and desktop views.
-Provide only the code—no extra text, explanations, or comments.`,
        },
      ],
    });

    let generatedCode = completion.choices[0].message.content;
    const regex = /```jsx([\s\S]*?)```/;

    // Extract the code
    const match = generatedCode?.match(regex);
    generatedCode = match ? match[1].trim() : null;

    return NextResponse.json({ code: generatedCode });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "Failed to generate code" },
      { status: 500 }
    );
  }
}
