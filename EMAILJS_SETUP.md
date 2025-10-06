# EmailJS Setup Instructions

To complete the email functionality implementation, you need to:

1. **Create an EmailJS account** at https://www.emailjs.com/
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with the following variables:
   - `{{from_name}}` - Sender name
   - `{{from_email}}` - Sender email
   - `{{message}}` - The complaint message
   - `{{to_email}}` - Recipient email (contacto@ni1diamas.cl)

4. **Replace the placeholders** in ActionSection.tsx:
   - `YOUR_PUBLIC_KEY` - Your EmailJS public key
   - `YOUR_SERVICE_ID` - Your EmailJS service ID
   - `YOUR_TEMPLATE_ID` - Your EmailJS template ID

5. **Example email template content:**
   ```
   Nueva Denuncia de Ni Un Diamas

   De: {{from_name}} ({{from_email}})
   
   Mensaje:
   {{message}}
   
   ---
   Este mensaje fue enviado desde el formulario de denuncias de Ni Un Diamas.
   ```

The form is now fully implemented and will work once these credentials are configured.