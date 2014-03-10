Oracle
======

* Install instant client::

	yum install oracle-instantclient11.2-basic-11.2.0.3.0-1.x86_64.rpm
	yum install oracle-instantclient11.2-devel-11.2.0.3.0-1.x86_64.rpm

* Maybe not required
	
	export ORACLE_HOME=/usr/lib/oracle/11.2/client64/
	export PATH=/usr/lib/oracle/11.2/client64/bin/:$PATH
	export PATH=/usr/lib/oracle/11.2/client64/lib/:$PATH
	export LD_LIBRARY_PATH=/usr/lib/oracle/11.2/client64/lib/:$LD_LIBRARY_PATH 

* install cx_Oracle::
	
	python-pip install cx_Oracle

* Post install actions::
	
	vi /etc/profile.d/oracle.sh
		
		export ORACLE_HOME=/usr/lib/oracle/11.2/client64
		export LD_LIBRARY_PATH=$ORACLE_HOME/lib:$LD_LIBRARY_PATH

	