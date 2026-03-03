// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { Newsletter } from "./Newsletter";

// export const MailchimpForm = () => {
//   const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

//   return (
//     <>
//       <MailchimpSubscribe
//         url={postUrl}
//         render={({ subscribe, status, message }) => (
//           <Newsletter
//             status={status}
//             message={message}
//             onValidated={formData => subscribe(formData)}
//             />
//         )}
//         />
//     </>
//   )
// }


// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { Newsletter } from "./Newsletter";

// export const MailchimpForm = () => {

//   const mailchimpUrl = process.env.REACT_APP_MAILCHIMP_URL;
//   const mailchimpU = process.env.REACT_APP_MAILCHIMP_U;
//   const mailchimpId = process.env.REACT_APP_MAILCHIMP_ID;

//   const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
   
//   // ✅ Console logs for debugging
//   console.log("MAILCHIMP_URL:", mailchimpUrl);
//   console.log("MAILCHIMP_U:", mailchimpU);
//   console.log("MAILCHIMP_ID:", mailchimpId);
//   console.log("POST_URL:", postUrl);
  
//   return (
//     <MailchimpSubscribe
//       url={postUrl}
//       render={({ subscribe, status, message }) => (
//         <Newsletter
//           status={status}
//           message={message}
//           onValidated={(formData) => subscribe(formData)}
//         />
//       )}
//     />
//   );
// };



import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  // Read values from Vite env
  const baseUrl = import.meta.env.VITE_MAILCHIMP_URL; // e.g., https://<dc>.list-manage.com/subscribe/post
  const u = import.meta.env.VITE_MAILCHIMP_U;         // your Mailchimp "u" param
  const id = import.meta.env.VITE_MAILCHIMP_ID;       // your Mailchimp "id" param

  // Guard against missing env (prevents runtime crash)
  if (!baseUrl || !u || !id) {
    console.warn(
      "Mailchimp env vars are missing. Please set VITE_MAILCHIMP_URL, VITE_MAILCHIMP_U, and VITE_MAILCHIMP_ID in your .env"
    );
    return null; // or render a friendly placeholder UI
  }

  // IMPORTANT: use & rather than &amp; here (this is JS, not HTML)
  const postUrl = `${baseUrl}?u=${encodeURIComponent(u)}&id=${encodeURIComponent(id)}`;

  // Optional: debug in console (remove in production)
  // console.log("Mailchimp POST URL:", postUrl);

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailchimpForm;