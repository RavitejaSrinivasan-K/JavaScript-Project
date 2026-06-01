npm install allure-playwright
npm install allure-commandline

goto config.js file and change reporter : 'allure-playwright' ,
run any test scripts

allure generate allure-results -o allure-report
allure open allure-report

or

npx allure generate allure-results -o allure-report
npx allure open allure-report

