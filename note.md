SQL non-SQL

SQL structured query language

mySQL
Postgres QL
SQLite

no SQL
not only SQL

document-oriented = > mongoDB,dynamodb,firebase
key-value => redis
graph-oriented => noe4j
column-family => cassandra


humongous
    mongo

Stores data in a JSON-like documents(key-value pairs)
BSON-> Binary JSON

[ //collection
    { //document
        _id: xxx1, name: yyy,
    },
    { 
        _id: xxx2, username: yyy 
    }
]//id and name are fields.

Noted: if don't set an id manually, mongoDB will produce an id automatically(like a hash code)

Flexibility or schemaless 

Level:
- DB server(started by mongod or other ways)
    - database(projects,there are three default database:local,admin and config
        - collections
            - documents
                - fields:字段

there will be a client for mongoDB server
(eg. mongo shell,mongodb Compass,script and server)

Relations:
Embedded:1 to 1 嵌入式
Reference: 1 to many 引用式
           many to many

