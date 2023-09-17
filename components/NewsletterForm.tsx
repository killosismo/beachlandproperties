import { useState } from 'react';
import { decode } from 'html-entities';

const NewsletterForm = ( {  }) => {

  

  return (
    <>
      <div className="d-flex newsletter-input-fields">
        <div className="mc-field-group">
          <input
            
            type="email"
            placeholder="Your email"
            className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
          <button className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
            Submit
          </button>
        </div>
        
      </div>
      
    </>
  );
}

export default NewsletterForm;

