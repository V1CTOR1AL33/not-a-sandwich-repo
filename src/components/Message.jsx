const ResponseMessage = ({ message, onRetry }) => {
    return (
      <div className="response-container">
        <p className="response-text">{message}</p>
        <button onClick={onRetry} className="retry-button">Try Again?</button>
      </div>
    );
  };
  