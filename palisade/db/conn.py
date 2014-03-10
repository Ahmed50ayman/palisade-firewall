#TODO: sqlalchemy.exc.TimeoutError \
#TimeoutError: QueuePool limit of size 5 overflow 10 reached, connection timed out, timeout 30

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from palisade.conf import PalisadeConfig

conf = PalisadeConfig()
db_conn_string = "oracle://%s:%s@%s:%s/%s" % (conf.db.login, 
                                              conf.db.password, 
                                              conf.db.host,
                                              conf.db.port,
                                              conf.db.sid)

# Set echo=True for DEBUG db interactions
engine = create_engine(db_conn_string, echo=False, pool_size=20)
Session = sessionmaker(engine)


if __name__ == '__main__':
    print engine
    engine.execute("select 1 from dual").scalar()
    session = Session()
    print session