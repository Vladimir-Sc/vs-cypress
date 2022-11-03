class Boards {

    get boardPlus (){
        return cy.get('li[title="Add new Board"]')
    }

    addNewBoard(){
        this.boardPlus.click()
    }

    get boardTitle(){
        return cy.get('input[name="name"]')
    }

    get nextButton(){
        return cy.get('button[name="next_btn"]')
    }

    get checkButton(){
        return cy.get('span[name="type_scrum"]')
    }

    get finishButton(){
        return cy.get('button[name="next_btn"]')
    }

    get configurationbutton(){
        return cy.get('[data-cy="board-configuration"]')
        //cy.get('li[data-cy="board-configuration"]').last()
    }

    createBoard(){
        this.boardTitle.type('rrrr')
        this.nextButton.click()
        this.checkButton.click()
        this.nextButton.click()
        this.nextButton.click()
        this.finishButton.click()
    }

    clickConfig(){
        this.configurationbutton.click()
    }

    get editBoardTitle(){
        return cy.get('input[name="name"]')
    }

    get editBoardDesciption(){
        return cy.get('textarea[name="description"]')
    }

    get updateBoard (){
        return cy.get('button[class="vs-c-btn vs-c-btn--primary vs-c-btn--spaced vs-u-font-weight-bold vs-c-btn-auth--top-gap"]')
    }

    get SuccessfulUpdate(){
        return cy.get('.el-message')
    }

    editBoard(){
        this.editBoardTitle.type('gggg')
        this.editBoardDesciption.type('ffffrrrttt')
        this.updateBoard.click()
}


get Avatar(){
    return cy.get('img[class="vs-u-img--round vs-c-user-avatar"]')
}

get Profile(){
    return cy.get('a[href="/account/settings"]')
}

get logOutbutton(){
    return cy.get('button[class="vs-c-btn vs-c-btn--link vs-c-btn--danger"]')
}

logOut(){
    this.Avatar.click()
    this.Profile.click()
    this.logOutbutton.click()
    
}

}

export const boards = new Boards () 