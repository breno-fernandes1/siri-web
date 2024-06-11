
import { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 segundos de splash screen

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.splashScreen}>
      <h1>href= "@/public/images/senai.png"</h1>
    </div>
  );
};

export default SplashScreen;
