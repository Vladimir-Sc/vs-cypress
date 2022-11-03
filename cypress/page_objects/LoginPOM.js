class Login{

    get email (){
        return cy.get('input[type="email"]')
    }

    get password (){
        return cy.get('input[type="password"]')
    }

    get loginButton (){
        return cy.get('button[type="submit"]')
    }

    login(){
        this.email.type(Cypress.env('validEmail'))
        this.password.type(Cypress.env('validPassword'))
        this.loginButton.click()
    }

}

export const login = new Login ()