node {
     environment {
            CI = 'true'
        }
        stage('checkout') {
            
                 echo 'Copying...'
                git 'https://github.com/deathsh0ot/AngTestApp.git'
            
        }
      stage('install modules') {
        
                echo 'installing modules...'
                sh 'npm install'
        
        }
         stage('Build') {
        
                echo 'Building...'
                sh 'ng build --prod' 
    
        }
        stage('SonarQube analysis') {
             
            def scannerHome = tool 'sonar_scanner';
            withSonarQubeEnv('SonarQ') {
            sh "${scannerHome}/bin/sonar-scanner  -Dsonar.projectKey=angularTestapp"
            
    }
  }
  stage("building image") {
        sh ' docker build -t angapp ${WORKSPACE}/ '
      }
  stage("run") {
        sh 'docker rm -f frontEnd || true'
        sh 'docker run -d --name frontEnd -p 4201:4200 angapp'
        
      }
    
}