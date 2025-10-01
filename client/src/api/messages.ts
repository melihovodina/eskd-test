export interface MessageData {
  name: string;
  phone: string;
  message: string;
}

export const messagesApi = {
  async send(data: MessageData): Promise<void> {
    const response = await fetch('http://localhost:5000/api/messages', {
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
