import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

const NewsletterSubscribe: React.FC = () => {

  const MAILCHIMP_URL: string = process.env.NEXT_PUBLIC_MAILCHIMP_URL!;

  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={ ( props: any ) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={ status }
            message={ message }
            onValidated={ (formData: any) => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default NewsletterSubscribe;