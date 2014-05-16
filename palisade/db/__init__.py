from conn import engine
from schema import *

def init_db():
    Base.metadata.create_all(bind=engine)

def drop_db():
    Base.metadata.drop_all(bind=engine)

def recreate_db():
    drop_db()
    init_db()

if __name__ == '__main__':
	init_db()