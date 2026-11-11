interface StatusMessageProps {
  type: "loading" | "error";
  message?: string;
}

function StatusMessage({ type, message }: StatusMessageProps) {
  if (type === "loading") {
    return <p className="status-message">Carregando filmes...</p>;
  }

  return <p className="status-message status-message--error">Ops! {message}</p>;
}

export default StatusMessage;