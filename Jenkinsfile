pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
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
                sh 'docker run -d -p 80:80 --name test test'
            }
        }
    }
}