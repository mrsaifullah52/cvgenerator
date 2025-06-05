import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="ml-2 px-2 py-1 text-sm text-white bg-brand-dark rounded"
    >
      {enabled ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;
