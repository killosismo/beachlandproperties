import { url } from 'inspector';
import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

const NewsletterSubscribe = () => {

  

  return (
    <MailchimpSubscribe url={process.env.NEXT_PUBLIC_MAILCHIMP_URL!} />

  );
};

export default NewsletterSubscribe;