#!/usr/bin/python


import iptc

rule = iptc.Rule()
rule.in_interface = 'eth0'
rule.src = "10.50.50.0/255.255.255.0"
rule.protocol = "tcp"
match = iptc.Match(rule, "state")
match.state = "RELATED,ESTABLISHED"
#match.dport = "80"

target = iptc.Target(rule, "ACCEPT")
rule.add_match(match)
rule.target = target

chain = iptc.Chain(iptc.Table(iptc.Table.FILTER), "INPUT")
chain.insert_rule(rule)

print len(chain.rules)

for rule in chain.rules:
	print 'src: %s, ip: %s, dst: %s, proto: %s' % (rule.get_src(), rule.get_ip(), rule.get_dst(), rule.get_protocol())

