describe('Teste API', () => {

function gerarNomeUsuarioAleatorio() {
    const prefixo = 'user_';
    const sufixo = Math.random().toString(36).substr(2, 8); // Gera uma string aleatória de 8 caracteres
    return prefixo + sufixo;
}
var idUser
var primeiroLivro
var segundoLivro
var token
var userName = gerarNomeUsuarioAleatorio()
var password = "Zs3qntvf%123"
    it('Deverá criar um usuário', () => {

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/User',
            body: {
                "userName": userName,
                "password": password
            },
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            
            cy.log(response.body)

            idUser = response.body.userID
            cy.log(idUser)
        
        
        })
        
    });

    it('Deverá gerar um token', () => {

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body: {
                "userName": userName,
                "password": password
            },
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {
            
            cy.log(response.body)

            token = response.body.token
        
        
        })
        
    });

    it('Deverá confirmar se o usuário está autenticado', () => {

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/Authorized',
            body: {
                "userName": userName,
                "password": password
            },
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => cy.log(response))
        
    });

    it('Deverá listar os livros disponíveis', () => {

        cy.request({
            method: 'GET',
            url: 'https://demoqa.com/BookStore/v1/Books',
            body: {
                "userName": userName,
                "password": password
            },
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response) => {cy.log(response.body)

        primeiroLivro = response.body.books[0].isbn
        segundoLivro = response.body.books[1].isbn
        

        cy.log(primeiroLivro)
        cy.log(segundoLivro)
        
    })
    });

    it('Deverá alugar dois livros', () => {

        cy.request({
            method: 'POST',
            url: `https://demoqa.com/BookStore/v1/Books/`,
            body: {   
                    "userId": idUser,
                    "collectionOfIsbns": [
                      {
                        "isbn": primeiroLivro,
                      },
                      {
                        "isbn": segundoLivro
                      }
                    ]          
            },
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`  
            }
        }).then((response) => cy.log(response))       
    });

    it('Deverá listar as informações do usuário com os livros escolhidos', () => {

        cy.request({
            method: 'GET',
            url: `https://demoqa.com/Account/v1/User/${idUser}`,
            body: "",
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }).then((response) => {
            
            // Extraímos os dados do usuário e dos livros
            const usuario = response.body;
            const books = usuario.books;
      
            // Criando uma lista HTML dinâmica no DOM
            const htmlContent = `
              <h3>Informações do Usuário</h3>
              <ul>
                <li><strong>UserID:</strong> ${usuario.userId}</li>
                <li><strong>UserName:</strong> ${userName}</li>
              </ul>
              
              <h3>Livros Alugados</h3>
              <ul>
                ${books.map(book => `<li><strong>Livro:</strong> ${book.title} (ISBN: ${book.isbn})</li>`).join('')}
              </ul>
            `;
            cy.document().then((doc) => {
                // Criando um elemento div para exibir as informações
                const div = doc.createElement('div');
                div.id = 'user-books-info';
                div.innerHTML = htmlContent;
        
                // Adicionando esse elemento ao body da página
                doc.body.appendChild(div);
              });
            })
        
    });

})