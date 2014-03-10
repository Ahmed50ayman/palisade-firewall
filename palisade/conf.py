'''
Created on 03.01.2014

@author: bova
'''
import ConfigParser

class Database(object):
    host = ''
    port = ''
    sid = ''
    login = ''
    password = ''

class Wpump(object):
    thread_count=''
    output_dir = ''
    chunk_size = ''
    
class PalisadeConfig():
    def __init__(self):
        self.cfg = ConfigParser.ConfigParser()
        self.cfg.read(['/etc/palisade/palisade.conf', 'c:/tmp/palisade.conf'])
        self.init_variables()
        self.populate_variables()
    
    def init_variables(self):
        self.db = Database()
        self.wpump = Wpump()
        
    def populate_variables(self):
        self.db.host = self.cfg.get('database', 'host')
        self.db.port = self.cfg.get('database', 'port')
        self.db.sid = self.cfg.get('database', 'sid')
        self.db.login = self.cfg.get('database', 'login')
        self.db.password = self.cfg.get('database', 'password')
        
        # self.wpump.thread_count = self.cfg.getint('wpump', 'thread_count')
        # self.wpump.output_dir = self.cfg.get('wpump', 'output_dir')
        # self.wpump.chunk_size = self.cfg.getint('wpump', 'chunk_size')
        
        
