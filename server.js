import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "https://api.openai.com/v1";
const headers = {
  Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  "OpenAI-Beta": "assistants=v2",
  "Content-Type": "application/json",
};

async function createThread() {
  const response = await axios.post(`${BASE_URL}/threads`, {}, { headers });
  return response.data.id;
}

async function addMessageToThread(threadId, content) {
  const response = await axios.post(
    `${BASE_URL}/threads/${threadId}/messages`,
    {
      role: "user",
      content,
    },
    { headers }
  );
  return response.data.id;
}

async function startRun(threadId, assistantId) {
  const response = await axios.post(
    `${BASE_URL}/threads/${threadId}/runs`,
    {
      assistant_id: assistantId,
    },
    { headers }
  );
  return response.data.id;
}

async function checkRunStatus(threadId, runId) {
  const response = await axios.get(
    `${BASE_URL}/threads/${threadId}/runs/${runId}`,
    { headers }
  );
  return response.data;
}

async function listMessages(threadId) {
  const response = await axios.get(`${BASE_URL}/threads/${threadId}/messages`, {
    headers,
  });
  return response.data.data;
}

// 🟢 Main Flow
const ChatApi = async (query, threadId) => {
  try {
    const assistantId = process.env.ASSISTANT_ID;
    if (!assistantId) throw new Error("Missing ASSISTANT_ID");

    // const threadId = await createThread();
    // const threadId = "thread_OqrrwjBgea7bkRuozGp6b06W";
    console.log("Thread Id:", threadId);
    threadId = threadId || (await createThread());
    console.log("✅ Thread Created:", threadId);

    const messageId = await addMessageToThread(threadId, query);
    console.log("✅ User Message Added:", messageId);

    const runId = await startRun(threadId, assistantId);
    console.log("✅ Run Started:", runId);

    let runStatus = await checkRunStatus(threadId, runId);
    while (runStatus.status !== "completed") {
      console.log(`⏳ Waiting... Status: ${runStatus.status}`);
      await new Promise((r) => setTimeout(r, 2000));
      runStatus = await checkRunStatus(threadId, runId);
    }
    console.log("✅ Run Completed!");

    const messages = await listMessages(threadId);
    const assistantMessage = messages.find((msg) => msg.role === "assistant");

    if (assistantMessage) {
      console.log(
        "\n✅ Assistant Reply:\n",
        assistantMessage.content[0].text.value
      );
    } else {
      console.log("❗ No assistant reply found");
    }

    const temp3 = assistantMessage.content[0].text.value.toString();
    const msg = temp3.replace(/【\d+:\d+†.*?】/g, "");

    return {
      msg,
      threadId,
    };
  } catch (error) {
    console.error(
      "❌ Error Occurred:\n",
      error.response?.data || error.message
    );

    return {
      msg: error.response?.data || error.message,
      threadId,
    };
  }
};

export default ChatApi;
