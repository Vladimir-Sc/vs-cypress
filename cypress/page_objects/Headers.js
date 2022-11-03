class Headers {

    get header2 (){
        return cy.get('h2[class="vs-c-modal__title"]')
    }

}

export const headers = new Headers ()
