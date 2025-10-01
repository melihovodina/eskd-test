export interface MessageData {
  name: string;
  phone: string;
  message: string;
}

const API_URL =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_API_URL || ""
    : import.meta.env.MODE === 'deploy'
      ? import.meta.env.VITE_API_URL_DEPLOY || ""
      : import.meta.env.VITE_API_URL_DEV || "";

export const messagesApi = {
  async send(data: MessageData): Promise<void> {
    const response = await fetch(`${API_URL}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  }
};
