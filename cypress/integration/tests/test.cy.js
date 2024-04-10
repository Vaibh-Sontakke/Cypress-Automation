describe('tests', ()=>{
    it('Test first', ()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get('#input-firstname').type('Vaibh')
    })
})
