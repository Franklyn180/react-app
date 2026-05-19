pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                credentialsId: 'GITHUB_LOGIN',
                url: 'https://github.com/Franklyn180/react-app.git'
                    
                }
            }

            stage('Run SonarQube Tests'){
                steps {
                    withCredentials([string(credentialsId: 'SONAR_TOKEN', variable: 'SONAR_TOKEN')]){
                        sh '''
                            docker run --rm \
                            -e SONAR_TOKEN=$SONAR_TOKEN \
                            -v $(pwd):/usr/src \
                            sonarsource/sonar-scanner-cli \
                            -Dsonar.projectKey=franklyn-org_react-app \
                            -Dsonar.organization=franklyn-org \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=https://sonarcloud.io \
                            '''
                    }
                }
            }

            stage('Build Image') {
                steps {
                    sh 'docker compose build'
                }
            }

            stage('Deploy Application') {
                steps {
                    sh 'docker compose down -v'
                    sh 'docker compose up -d'
                }
            }
        }

        post {
            success {
                echo '✅ SonarQube analysis successful!'
                echo ' ✅ Application Image built successfully!'
                echo '✅ Application deployed successfully!'
            }

            failure {
                echo '❌ Failed. Please check the logs for details.'
            }
        }
    }
