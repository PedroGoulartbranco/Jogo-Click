from app import criar_app, db
from app.models import Itens

app = criar_app()

def adicionar_itens():
    with app.app_context():
        if Itens.query.first():
            print("Os itens já existem no banco!")
            return
        
        clique_2x = Itens(nome="Click 2x", descricao="Cada clique da 2 vezes mais moedas", preco=150)
        db.session.add_all(clique_2x)
        db.session.commit()

if __name__ == "__main__":
    adicionar_itens()