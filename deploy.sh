#!/bin/bash

# Exit on any error
set -e

# Update system packages
echo "Updating system packages..."
sudo yum update -y

# Install Node.js and npm
echo "Installing Node.js and npm..."
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
sudo yum install -y nodejs

# Verify Node.js and npm installation
echo "Node.js version:"
node -v
echo "npm version:"
npm -v

# Install PM2 globally
echo "Installing PM2..."
sudo npm install -g pm2

# Install project dependencies
echo "Installing project dependencies..."
npm install

# Build the frontend application
echo "Building the frontend..."
npm run build

# Start the application with PM2
echo "Starting the application with PM2..."
pm2 start ecosystem.config.js --env production

echo "Deployment finished successfully!"
