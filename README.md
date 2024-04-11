1. Go to Cypress official website and see the setup steps for GitHub Actions
2. User can specify the specific browser name
3. To generate a report we need to go to 'https://github.com/actions/upload-artifact' site and see the mentioned to generate report
4. User can specify the if condition to generate a report even if test fails
5. We can parrellel esecution

Slack Integreation for report sending:
1. Create a channel oven a slack and add a members
2. Goto the 'https://github.com/marketplace/actions/slack-notify' site and take the slack notification content paste it into your yml file
3. There is one secreate key of webhook you need to pass for integrattion
4. Then, Go to slack channel and Click on the channel name > Integration > app > search and install 'incoming webhook' > choose a channel > copy the webhook url
5. Goto Github > Settings > Secreats and Variables > Actions > Create a secrete key and give the url and name
6. Now, Go to the yml file in which you need to pass this secrete key
7. And in SLACK_MESSAGE attribute you need pass the you run url which will specific to that run for example "Test Report at here: https://github.com/Vaibh-Sontakke/Cypress-Automation/actions/runs/${{github.run_id}}"
