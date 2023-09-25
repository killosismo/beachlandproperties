import { useState, KeyboardEvent } from 'react';
import { decode } from 'html-entities';

interface NewsletterFormProps {
  status: string;
  message: string;
  onValidated: (data: { EMAIL: string }) => boolean;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ status, message, onValidated }) => {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const handleFormSubmit = (): boolean | null => {
    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    return! email && email.indexOf('@') > -1 && isFormValidated;
  };

  const handleInputKeyEvent = (event: KeyboardEvent<HTMLInputElement>): void => {
    setError(null);

    if (event.keyCode === 13) {
      event.preventDefault();
      handleFormSubmit();
    }
  };

  const getMessage = (message: string): string | null => {
    if (!message) {
      return null;
    }

    const result = message?.split('-') ?? null;

    if ('0' !== result?.[0]?.trim()) {
      return decode(message);
    }

    const formattedMessage = result?.[1]?.trim() ?? null;

    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <div className="d-flex newsletter-input-fields">
        <div className="mc-field-group">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder="Your email"
            className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
          <button className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
        
        
      </div>
      <div className="newsletter-form-info">
        {status === 'sending' && <div>Sending...</div>}
        {(status === 'error' || error) && (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message)! }}
          />
        )}
        {status === 'success' && status !== 'error' && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </>
  );
};

export default NewsletterForm;