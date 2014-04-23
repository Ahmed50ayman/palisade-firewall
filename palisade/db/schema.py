from sqlalchemy import Column, Integer, String, Sequence, Date, Boolean, Text, ForeignKey
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
    ipranges = relationship('IPT_M_IPRange')

    def __init__(self, protocol='tcp', source=None, destination=None, jump='ACCEPT'):
        self.protocol = protocol
        self.source = source
        self.destination = destination
        self.jump = jump

    def __repr__(self):
        pass

class IPT_M_IPRange(Base):
    __tablename__ = 'ipt_m_iprange'
    id = Column(Integer, Sequence('ipt_m_iprange_id_seq'), primary_key=True)
    rule_id = Column(Integer, ForeignKey('ipt_rule.id', ondelete='CASCADE'))
    src_range = Column(String(256))
    dst_range = Column(String(256))

    def __init__(self, rule_id, src_range, dst_range):
        self.rule_id = rule_id
        self.src_range = src_range
        self.dst_range = dst_range

    def __repr__(self):
        pass