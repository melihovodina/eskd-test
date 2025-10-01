import Button from '../components/Button';
import PageLayout from '../layouts/PageLayout';

interface WelcomePageProps {
  onNext: () => void;
}

export default function WelcomePage({ onNext }: WelcomePageProps) {
  return (
    <PageLayout>
      <div className="max-w-md w-full text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-light text-gray-800 mb-4">
          Добро пожаловать
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
          Мы рады видеть вас здесь. Пожалуйста, заполните форму, чтобы связаться с нами.
        </p>
        <Button onClick={onNext}>
          Далее
        </Button>
      </div>
    </PageLayout>
  );
}
