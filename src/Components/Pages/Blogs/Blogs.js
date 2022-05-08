import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='my-5'>Blogs</h1>
            <h3 className='mt-5 mb-3'>What are the differences between javascript and nodejs?</h3>
            <p className='mb-5'>Javascript is a programming language that is used for writing scripts on the website. JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>

            <h3 className='mt-5 mb-3'>What are the differences between SQL and NoSQL database?</h3>
            <p className='mb-5'>First of all SQL database are RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) and These databases have fixed or static or predefined schema. On the otherhand NoSQL are Non-relational or distributed database system. They have dynamic schema. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are not suited for hierarchical data storage. But NoSQL databases are best suited for hierarchical data storage.</p>

            <h3 className='mt-5 mb-43'>What is the purpose of jwt and how does it work?</h3>
            <h5 className='mt-4 mb-1 '>Purpose of JWT :</h5>
            <p className='mb-1'>The main purpose of JWT or Json Web Token is to transmit information securly between parties because they can be signed, which means you can be sure that the senders are who they say they are. It is an open standard used to share security information between a client and a server.  </p>
            <h5 className='mt-2 mb-1 '>The way JWT works :</h5>
            <p className='mb-5'>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between a client and a server. These claims are depends on the use case at hand. JWT is created with a secret key and that secret key is private to someone which means they will never reveal that to the public or inject inside the JWT token. When someone receive a JWT from the client, they can verify that JWT with this that secret key stored on the server.</p>

        </div>
    );
};

export default Blogs;