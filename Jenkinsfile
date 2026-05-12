@Library('Shared') _
pipeline{
    agent any
    stages{
        stage('Code'){
            steps{
                script{
                    clone("https://github.com/Amit021020/nodejsapp.git","main")
                }
            }
        }
        stage('Build'){
            steps{
                script{
                     build("nodejs-app:latest",".")
                }
            }
        }
        stage('Push to DockerHub'){
            steps{
                script{
                    dockerHubPush("nodejs-app","latest")
                }
                
            }
        }
        stage('Deploy'){
            steps{
                script{
                    deploy()
                    sh "Deployed successfully"
                    
                }
            }
        }
    }
}
