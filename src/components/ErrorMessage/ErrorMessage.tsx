interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
