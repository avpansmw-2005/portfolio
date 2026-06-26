#!/bin/sh

# Create a JavaScript file with environment variables
echo "window.env = {" > /usr/share/nginx/html/env-config.js

echo "  VITE_EMAILJS_SERVICE_ID: '$VITE_EMAILJS_SERVICE_ID'," >> /usr/share/nginx/html/env-config.js
echo "  VITE_EMAILJS_TEMPLATE_ID: '$VITE_EMAILJS_TEMPLATE_ID'," >> /usr/share/nginx/html/env-config.js
echo "  VITE_EMAILJS_PUBLIC_KEY: '$VITE_EMAILJS_PUBLIC_KEY'," >> /usr/share/nginx/html/env-config.js
echo "  VITE_AZURE_COMMUNICATION_KEY: '$VITE_AZURE_COMMUNICATION_KEY'," >> /usr/share/nginx/html/env-config.js
echo "  VITE_AZURE_SENDER_EMAIL: '$VITE_AZURE_SENDER_EMAIL'," >> /usr/share/nginx/html/env-config.js
echo "  VITE_OWNER_EMAIL: '$VITE_OWNER_EMAIL'," >> /usr/share/nginx/html/env-config.js
echo "};" >> /usr/share/nginx/html/env-config.js

# Start nginx
nginx -g 'daemon off;'