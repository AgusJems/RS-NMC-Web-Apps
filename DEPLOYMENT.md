# Deployment Instructions for CentOS 10

This guide will walk you through the process of deploying the application on a CentOS 10 server.

## 1. Prerequisites

Before you begin, ensure you have the following installed on your CentOS 10 server:

*   **git**: To clone the project repository.
*   **A user with sudo privileges**.

You can install git with the following command:
```bash
sudo yum install -y git
```

## 2. Clone the Repository

Clone the project repository to your server. 
You can do this by running the following command:

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

## 3. Configure the Environment

The application uses a `.env` file for configuration. You need to create this file in the root of the project directory.

1.  Create a new file named `.env`:
    ```bash
    touch .env
    ```
2.  Open the file with a text editor and add the following environment variables. **Replace the placeholder values with your actual configuration.**

    ```
    # Server Configuration
    PORT=3001

    # Database Configuration
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name

    # JWT Configuration
    JWT_SECRET=your_jwt_secret
    ```

## 4. Run the Deployment Script

The `deploy.sh` script automates the setup process.

1.  Make the script executable:
    ```bash
    chmod +x deploy.sh
    ```
2.  Run the script:
    ```bash
    ./deploy.sh
    ```
This script will:
*   Install Node.js, npm, and PM2.
*   Install project dependencies.
*   Build the frontend application.
*   Start the application with PM2.

## 5. Set Up a Reverse Proxy (Nginx)

In a production environment, it's recommended to use a web server like Nginx as a reverse proxy. This will handle incoming traffic and forward it to your Node.js application.

1.  Install Nginx:
    ```bash
    sudo yum install -y nginx
    ```
2.  Start and enable Nginx:
    ```bash
    sudo systemctl start nginx
    sudo systemctl enable nginx
    ```
3.  Configure Nginx to proxy requests to your application. Create a new configuration file in `/etc/nginx/conf.d/`:

    ```bash
    sudo nano /etc/nginx/conf.d/your-domain.conf
    ```
4.  Add the following configuration to the file. **Replace `your-domain.com` with your actual domain name or server IP address.**

    ```nginx
    server {
        listen 80;
        server_name your-domain.com;

        location / {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

5.  Test the Nginx configuration and restart the service:
    ```bash
    sudo nginx -t
    sudo systemctl restart nginx
    ```

## 6. Managing the Application with PM2

PM2 provides several useful commands to manage your application:

*   **List all running processes:**
    ```bash
    pm2 list
    ```
*   **Monitor a specific process:**
    ```bash
    pm2 monit <app-name>
    ```
*   **View logs:**
    ```bash
    pm2 logs <app-name>
    ```
*   **Restart the application:**
    ```bash
    pm2 restart <app-name>
    ```
*   **Stop the application:**
    ```bash
    pm2 stop <app-name>
    ```

Your application should now be deployed and accessible at your domain or server IP address.
