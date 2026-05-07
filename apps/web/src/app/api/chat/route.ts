import {convertToModelMessages, streamText} from "ai";
import {createOpenAICompatible} from "@ai-sdk/openai-compatible";

const deepseek = createOpenAICompatible({
  baseURL: 'https://api.deepseek.com/v1',
  apiKey: 'sk-49abd01da4784c5589f5d567e30f369b',
  name: 'deepseek',
})

export async function POST(request: Request) {
  const { messages } = await request.json()


  const result = streamText({
    model: deepseek('deepseek-chat'),
    messages: await convertToModelMessages(messages),
  })
  console.log(result)
  return result.toUIMessageStreamResponse()
}