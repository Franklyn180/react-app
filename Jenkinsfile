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
        }

        post {
            success {
                echo '✅ SonarQube analysis successful!'
            }

            failure {
                echo '❌ SonarQube analysis failed. Please check the logs for details.'
            }
        }
    }
