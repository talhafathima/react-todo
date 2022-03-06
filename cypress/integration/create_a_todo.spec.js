describe('Creating a new todo task',() =>{
    it('Add a task to todo-list',()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="taskToBeAdded"]').type('sleep 8 hours');
        cy.get('[data-testid="addTask"]').click();
        cy.get('[data-testid="taskToBeAdded"]').should('have.value', "");
        cy.contains('sleep 8 hours');
        cy.get('[data-testid="deleteTask"]').click();
        cy.contains('sleep 8 hours').should('not.exist');
    }); 
});