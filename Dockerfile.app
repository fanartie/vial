# Use the official NGINX image
FROM nginx:alpine

# Set working directory to NGINX's default static file directory
WORKDIR /usr/share/nginx/html

# Remove any default static files from NGINX
RUN rm -rf ./*

# Copy the static files from /app/dist into the container
COPY app/dist/ .

COPY app/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the web server
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]