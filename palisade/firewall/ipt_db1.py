import iptc
from conn import Session
from schema import IPT_Rule


db = Session()

chain = iptc.Chain(iptc.Table(iptc.Table.FILTER), "INPUT")

db_rules = db.query(IPT_Rule).all()
for db_rule in db_rules:
	rule = iptc.Rule()	
	rule.src = db_rule.source
	rule.protocol = db_rule.protocol
	target = iptc.Target(rule, db_rule.jump)
	rule.target = target
	chain.insert_rule(rule)






