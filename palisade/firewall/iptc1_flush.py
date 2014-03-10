import iptc


table = iptc.Table(iptc.Table.FILTER)
chain = iptc.Chain(table, 'INPUT')
chain.flush()