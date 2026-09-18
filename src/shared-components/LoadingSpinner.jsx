import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center pt-40">
      <FontAwesomeIcon
        icon={faSpinner}
        className="text-3xl text-emerald-600 animate-spin"
      />
    </div>
  );
};

export default LoadingSpinner;
