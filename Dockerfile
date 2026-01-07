FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy your HTML file
COPY index.html /usr/share/nginx/html/index.html

# Expose port 8080
EXPOSE 8080

# Change nginx to listen on 8080
RUN sed -i 's/80/8080/g' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
