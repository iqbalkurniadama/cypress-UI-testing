describe('JobTiles', () => {


  describe('add job tiles', () => {
    it('add job tiles', () => {
      cy.login('Admin', 'admin123')
      cy.toJobTitles()
      cy.get('.oxd-button').click()
      cy.get(':nth-child(2) > .oxd-input').type('test 123')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('test description')
      cy.get('.oxd-file-input').selectFile(`cypress/downloads/test.png`, {force:true})
      cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('test note')
      cy.get('.oxd-button--secondary').click()
  
      cy.wait(2000)
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Successfully Saved')
      })
    })
  
    it('job already exists', () => {
      cy.login('Admin', 'admin123')
      cy.toJobTitles()
      cy.get('.oxd-button').click()
      cy.get(':nth-child(2) > .oxd-input').type('test 123')
      cy.get('.oxd-button--secondary').click()
  
      cy.wait(2000)
      cy.contains('Already exists').should('be.visible')
    })
  
    it('field job title required', () => {
      cy.login('Admin', 'admin123')
      cy.toJobTitles()
      cy.get('.oxd-button').click()
      cy.get('.oxd-button--secondary').click()
  
      cy.wait(2000)
      cy.contains('Required').should('be.visible')
    })
  
    it('job already exists', () => {
      cy.login('Admin', 'admin123')
      cy.toJobTitles()
      cy.get('.oxd-button').click()
      cy.get(':nth-child(2) > .oxd-input').type('test 123')
      cy.get('.oxd-button--secondary').click()
  
      cy.wait(2000)
      cy.contains('Already exists').should('be.visible')
    })
  
    it('file job specifications more than 1mb', () => {
      cy.login('Admin', 'admin123')
      cy.toJobTitles()
      cy.get('.oxd-button').click()
      cy.get(':nth-child(2) > .oxd-input').type('test')
      cy.get('.oxd-file-input').selectFile('cypress/downloads/img.jpg', {force:true})
      cy.get('.oxd-button--secondary').click()
  
      cy.wait(2000)
      cy.contains('Attachment Size Exceeded').should('be.visible')
    })
  })

  describe('edit job titles', ()=> {
    
  })


})