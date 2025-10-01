import { useState, FormEvent } from 'react';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import Form from '../components/Form';
import Notification from '../components/Notification';
import { messagesApi, MessageData } from '../api/messages';
import { validateBelarusianPhone, validateMinLength } from '../utils/validation';

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
  general?: string;
}

interface ContactFormProps {
  onBack: () => void;
}

export default function ContactForm({ onBack }: ContactFormProps) {
  const [formData, setFormData] = useState<MessageData>({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateMinLength(formData.name, 2)) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    if (!validateBelarusianPhone(formData.phone)) {
      newErrors.phone = 'Введите корректный белорусский номер (+375... или 80...)';
    }

    if (!validateMinLength(formData.message, 2)) {
      newErrors.message = 'Сообщение должно содержать минимум 2 символа';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await messagesApi.send(formData);
      setFormData({ name: '', phone: '', message: '' });
      setErrors({});
      setNotification({ type: "success", message: "Сообщение успешно отправлено!" });
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      setNotification({ type: "error", message: "Не удалось отправить сообщение. Проверьте подключение." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <button
        onClick={onBack}
        className="absolute top-8 left-8 px-6 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
      >
        ← Назад
      </button>

      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
      <Form onSubmit={handleSubmit}>
        <Input
          label="Имя"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Ваше имя"
        />

        <Input
          label="Телефон"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="+375 29 123-45-67"
        />

        <Textarea
          label="Сообщение"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Ваше сообщение"
          rows={4}
        />

        <Button type="submit" fullWidth isLoading={isSubmitting}>
          Отправить
        </Button>
      </Form>
    </div>
  );
}