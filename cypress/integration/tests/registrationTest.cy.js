import { registrationPage } from "../../pages/registrationPage"
const registerObj = new registrationPage()
import registrationData from '../../fixtures/registrationData.json'

describe(' test automation', () => {



    it('register flow', () => {
        registerObj.openURL()
        registerObj.enterFirstName(registrationData.firstName)
        registerObj.enterlastName(registrationData.lastName)
        registerObj.enterEmail(registrationData.email)
        registerObj.enterTelephone(registrationData.telephone)
        registerObj.enterPassword(registrationData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()



    })
})