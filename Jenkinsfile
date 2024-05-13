pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'CI=false npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t test .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop test || true'
                sh 'docker rm test || true'
                sh 'docker run -d -p 80:80 -p 443:443 --name test test'
            }
        }
    }
}