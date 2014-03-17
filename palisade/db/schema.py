from sqlalchemy import Column, Integer, String, Sequence, Date, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()


class IPT_Rule(Base):
    __tablename__ = 'ipt_rule'
    id = Column(Integer, Sequence('ipt_rule_id_seq'), primary_key=True)
    protocol = Column(String(64))
    source = Column(String(256))
    destination = Column(String(256))
    jump = Column(String(256))

    def __init__(self, protocol='tcp', source=None, destination=None, jump='ACCEPT'):
        self.protocol = protocol
        self.source = source
        self.destination = destination
        self.jump = jump

    def __repr__(self):
        pass
